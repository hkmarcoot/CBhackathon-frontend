import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import imagess from './image.jpg';
function Cards() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imagess} height="200" width={200} />
      <Card.Body  style={{display: 'flex'}}>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Cards;