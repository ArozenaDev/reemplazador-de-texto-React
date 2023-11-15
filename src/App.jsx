import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState('');
  const [word, setWord] = useState('');
  const [replacement, setReplacement] = useState('');

  const change = () => {
    const lowerCaseInput = input.toLowerCase();
    if(lowerCaseInput.includes(word.toLowerCase())) {
      setInput(lowerCaseInput.replaceAll(word.toLowerCase(), replacement));
    } else {
      setInput("El texto no incluye esa palabra");
    }
  }

  return (
    <>
       <h1>Reemplazador de texto</h1>
        <form>
        <textarea 
          id="input" 
          name="text" 
          rows="20" cols="60" 
          placeholder="Introduce un texto..." 
          value={input}
          onChange={(e) => setInput(e.target.value)} 
        />
        <br/>
        <input 
          type="text" 
          id="word" 
          placeholder= "Introduce la palabra a reemplazar" 
          value={word} 
          onChange={(e) => setWord(e.target.value)}
        />
        <input 
          type="text" 
          id="replacement" 
          placeholder= "introduce la palabra de reemplazo" 
          value={replacement}
          onChange={(e) => setReplacement(e.target.value)}
        />
        <br/>
        <input type="button" id="go" value="Reemplazar" onClick={() => change()}/>
        </form>
    </>
  )
}

export default App
