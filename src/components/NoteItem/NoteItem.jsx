import './NoteItem.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function NoteItem({ note }) {
  const date = new Date(note.createdAt).toLocaleDateString();
  return(
    <>
    <Card className="NoteItem">
    <Card.Body >
      <ListGroup> Note: {note.text}</ListGroup>
      <div>Created on: {date}</div>
    </Card.Body>
    </Card>
    </>
  );
}