import { Link } from "react-router";
import './Banner.css';

export default function Banner({title}) {
    return (
      <div className="banner">
        <h1 className="title" style = {{color:"whitesmoke"}}>{title}</h1>
        <Link to="/gacha" className="gacha-button">Gacha</Link>
        <div className="spiel" style = {{color:'#5B4015', lineHeight: "2"}}>
            <p>🃏Test your luck and build your ultimate anime card collection!</p>
            <p>🔮Discover all the cards and even pull the most unexpected characters!</p>
            <p>🎉So keep rolling and catch 'em all!</p>
        </div>
      </div>
    );
}
