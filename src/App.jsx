import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Flashcard from "./components/Flashcard.jsx";
import Header from "./components/Header.jsx";
import { questions } from "./constants/Questions.jsx";
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [isQuestion, setIsQuestion] = useState(true);
  const updateIsQuestion = () => setIsQuestion(!isQuestion);

  return (
    <div className="App">
      <Header
        title="US History Flashcards"
        description="How well do you know about US History? This will put you to the test!"
      />
      <h5>Number of Cards: 10</h5>
      <Flashcard text={isQuestion ? questions[0].question: questions[0].answer} handlerFunction={updateIsQuestion}/>
      <Button variant="primary">Next</Button>
    </div>
  );
}

export default App;
