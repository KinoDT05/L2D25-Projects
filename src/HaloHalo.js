import './personality_quiz_style.css';
import dessert from './assets/ResultHaloHalo.png';

export default function HaloHalo() {
    return (
        <body>
        <h1 id = "YouGot"><b>
            You Got...</b></h1>
            
        <img id = "Result" src={dessert} alt="Descriptive Text" />
        
    </body>
      );
}