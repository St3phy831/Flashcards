import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Flashcard from "./components/Flashcard.jsx";
import Header from "./components/Header.jsx";
import { questions } from "./constants/Questions.jsx";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const getRandomNumber = () => {
    return Math.floor(Math.random() * 10);
  };

  const [isQuestion, setIsQuestion] = useState(true);
  const updateIsQuestion = () => setIsQuestion(!isQuestion);

  const [ithQuestion, setIthQuestion] = useState(getRandomNumber());
  const updateIthQuestion = () => {
    setIsQuestion(true);
    setIthQuestion(getRandomNumber());
  };

  return (
    <div className="App">
      <Header
        title="US History Flashcards"
        description="How well do you know about US History? This will put you to the test!"
      />
      <h5>Number of Cards: 10</h5>
      <Flashcard
        text={
          isQuestion
            ? questions[ithQuestion].question
            : questions[ithQuestion].answer
        }
        color={isQuestion ? "" : "blue"}
        handlerFunction={updateIsQuestion}
      />
      <Button variant="primary" onClick={updateIthQuestion}>
        Next
      </Button>
    </div>
  );
}

export default App;
