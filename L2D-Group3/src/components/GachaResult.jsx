import { Link } from "react-router";
import Card from "./Card.jsx";
import '../pages/Gacha.css'

export default function GachaResult( {cards, rollAgain} ){
  return (
    <div className="main-content">
      <div className="cardRow">
        {cards.map((card, i) => (
          <Card key={i} card={card} {...card} />
        ))}
      </div>
      <div className="buttonRow">
        <button onClick={rollAgain} className="gachaButton">Roll Again</button>
        <Link to="/">
          <button className="homeButton">Back to Home</button>
        </Link>
      </div>
    </div>
  );
};