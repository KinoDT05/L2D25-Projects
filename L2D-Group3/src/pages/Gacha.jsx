import { useState } from "react";
import { Link } from "react-router";
import GachaResult from "../components/GachaResult";
import { cardData } from "../utils/data.js";
import './Gacha.css';

export default function Gacha() {

  const [rolledCards, setRolledCards] = useState([]);
  const [hasRolled, setHasRolled] = useState(false);
  const CARDS = 3; 

  const getRandomCards = () => {
    const shuffled = [...cardData].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, CARDS);
  };

  const handleRoll = () => {
    setRolledCards(getRandomCards());
    setHasRolled(true);
  };

  const rollAgain = () => {
    setRolledCards(getRandomCards());
  };

  return (
    !hasRolled ? (
      <div className="main-content">
        <h1 className="gachaTitle">Try Out Your Luck</h1> 
        <div className="button-row">
          <button onClick={handleRoll} className="gachaButton">Draw 3</button>
          <Link to="/">
            <button className="homeButton">Back to Home</button>
          </Link>
        </div>
      </div>
    ) : (
      <GachaResult cards={rolledCards} rollAgain={rollAgain} />
    )
  );
}
