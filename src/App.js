import { useState, useEffect } from 'react';
import './App.css';
import mainPicture from './surrounded.jpg'

function App() {

  const [idea, setIdea] = useState('');

  useEffect(()=> {
    accessIdeas();
  }, [])


  const accessIdeas = async() => {
    const response = await fetch('http://www.boredapi.com/api/activity/ ');
    const data = await response.json();
    setIdea(data.activity)
  }

  const handleMouseOver = () => {
    accessIdeas();
  }

  return (
    <main>
      <h2>Boredom Buster</h2>
      <h2 onMouseOver={handleMouseOver}>{idea}</h2>
      <img src={mainPicture} alt="" />
    </main>
  );
}

export default App;
