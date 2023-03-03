import React from "react";
import Card from "react-bootstrap/Card";
import './Flashcard.css'

const Flashcard = (props) => {
  return (
    <div className="Flashcard">
      <Card border="primary" style={{ width: '45rem' }}>
        <Card.Body><h5 className="cardBody">This is some text within a card body.</h5></Card.Body>
      </Card>
    </div>
  );
};

export default Flashcard;