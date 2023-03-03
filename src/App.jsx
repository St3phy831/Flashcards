import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Flashcard from './components/Flashcard.jsx'
import Header from './components/Header.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  return (
    <div className="App">
      <Header title="US History Flashcards" description="How well do you know about US History? This will put you to the test!"/>
      <h5>Number of Cards: 10</h5>
      <Flashcard />
    </div>
  )
}

export default App
