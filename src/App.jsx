// import "./App.css";
import { useEffect, useState } from "react";
import "./style.css";

function App() {
  const [cards, setCards] = useState([
    "mrekk",
    "Ivaxa",
    "NINERIK",
    "Accolibed",
    "gnahus",
    "milosz",
    "NyanPotato",
    "lifeline",
    "bored yes",
    "JappaDeKappa",
  ]);

  const [score, setScore] = useState(0);

  const [bestScore, setBestScore] = useState(0);

  const [clickedCards, setClickedCards] = useState([]);

  const shuffle = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  useEffect(() => {
    console.log("Clicked cards updated:", clickedCards);
  }, [clickedCards]);

  const reset = () => {
    setScore(0);
    setClickedCards([]);
  };

  const handleClick = (card) => {
    if (clickedCards.includes(card)) {
      if (score > bestScore) {
        setBestScore(score);
      }
      setScore(0);
      setClickedCards([]);
    } else {
      setClickedCards([...clickedCards, card]);
      const newScore = score + 1;
      setScore(newScore);
      if (newScore === cards.length) {
        reset();
        alert("Congrats! you won the game!");
      }
    }
    setCards(shuffle(cards));
  };

  return (
    <div>
      <div>
        <header>
          <p>Score: {score}</p>
          <p>Best Score: {bestScore}</p>
          <button onClick={() => reset()}>Reset Round</button>
        </header>
      </div>
      <div id="cards">
        <ul>
          {cards.map((card) => (
            <li key={card}>
              <button onClick={() => handleClick(card)}>{card}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
