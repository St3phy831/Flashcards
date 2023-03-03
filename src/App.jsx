import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './components/Header.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header title="US History Flashcards" description="How well do you know about US History? This will put you to the test!"/>
      <h5>Number of Cards: 10</h5>
    </div>
  )
}

export default App
