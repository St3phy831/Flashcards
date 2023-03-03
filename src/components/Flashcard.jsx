import React from "react";
import Card from "react-bootstrap/Card";
import './Flashcard.css'

const Flashcard = (props) => {
  return (
    <div className="Flashcard" onClick={props.handlerFunction}>
      <Card className={"Card " + props.isFlipped} border="primary" style={{ width: '45rem' }}>
        <Card.Body className="front"><h5>{props.question}</h5></Card.Body>
        <Card.Body className="back"><h5>{props.answer}</h5></Card.Body>
      </Card>
    </div>
  );
};

export default Flashcard;
