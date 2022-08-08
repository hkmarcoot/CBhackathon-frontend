import { Button } from "bootstrap";
const handleForm = () => {
  
}

const handleReply = () => {
  alert("Work in Progress...")
}

export default function Cards({ lostitem }) {
  console.log("new:" + lostitem);
    return (
      <div className="result-section" data-testid="result-section-testing">
        <div className="result-container">
          
          {lostitem.map((block, index) => {
            return (
              
              <div className="result-block" key={index}>
                <div className="result-text-container">
                  
                  {block.item && (
                    <div className="card-container">                
                  <img className="image" src={block.item.picture} alt={block.item.itemName} />
                  <div className="items">
                  <p>Founder Name: {block.itemFounder}</p>
                  <p>Item Name: {block.item.itemName}</p>
                  <p>Description: {block.item.description}</p>
                  <p>Found Location: {block.item.foundLocation.address + ". Latitude: " + block.item.foundLocation.lat + " Longitude: " + block.item.foundLocation.lng}  </p>
                  </div>
                  
                  </div>
                  )}
                  <div className="reply">
                  <button onClick={() =>handleForm()}>
  REPLY
  </button>   </div>            
                </div>
                
              </div>
            );
          })}
        </div>
        <div className="form">
        <div className="lost_title">Found a lost item?</div>
               
                <div className="section">

                
                <p>Your Name:<input/> </p>
                <p>Item description: <input/></p>
                <p>Image Link:<input/> </p>
                </div>
              
<div className="section">
<p>Where have you found this item?</p> 
<p>Address: <input/></p>
<p>Latitude:<input/> </p>
<p>Longitude:<input/> </p>

<button onClick={() =>handleForm()}>
  SUBMIT
  </button>
</div>
              



          </div>
      </div>
    );
  }
  