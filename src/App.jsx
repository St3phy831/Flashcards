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

  const [index, setIndex] = useState(0);
  const [isQuestion, setIsQuestion] = useState(true);
  const [questionsViewed, setQuestionsViewed] = useState([getRandomNumber()]);

  const updateIsQuestion = () => setIsQuestion(!isQuestion);

  const handleNextQuestion = () => {
    setIsQuestion(true);
    let newIndex = getRandomNumber();
    updateQuestionsViewed(newIndex);
    setIndex(index + 1);
  };

  const updateQuestionsViewed = (newIndex) => {
    setQuestionsViewed([...questionsViewed, newIndex]);
  };

  return (
    <div className="App">
      <Header
        title="US History Flashcards"
        description="How well do you know about US History? This will put you to the test!"
      />
      <h5>Number of Cards: 10</h5>
      <Flashcard
        question={questions[questionsViewed[index]].question}
        answer={questions[questionsViewed[index]].answer}
        isFlipped={isQuestion ? "" : "flipped"}
        handlerFunction={updateIsQuestion}
      />
      <Button variant="primary" disabled={index === 0 ? "disabled" : ""}>
        Back
      </Button>
      <Button variant="primary" onClick={handleNextQuestion}>
        Next
      </Button>
    </div>
  );
}

export default App;
