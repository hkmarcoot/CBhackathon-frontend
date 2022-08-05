import { useState, useEffect } from "react";

import "../../styles.css";

const API_URL = "http://localhost:3000";

function App() {
  const [lostitem, setLostitem] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("");
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    async function getlostitem() {
      await fetch(`${API_URL}/lostitem`)
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch the data for for that resourse");
          }
          return res.json();
        })
        .then((data) => {
          setIsPending(false);
          setLostitem(data.payload);
          setError(null);
        })
        .catch((err) => {
          //auto catches network / connection error
          setIsPending(false);
          setError(err.message);
        });
    }
    getlostitem();
    console.log(lostitem);
  }, []);
  return <div className="App"></div>;
}

export default App;
