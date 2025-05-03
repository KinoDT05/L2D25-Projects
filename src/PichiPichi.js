import './personality_quiz_style.css';
import dessert from './assets/ResultPichiPichi.png';

export default function PichiPichi() {
    return (
        <body>
        <h1 id = "YouGot"><b>
            You Got...</b></h1>
            
        <img id = "Result" src={dessert} alt="Descriptive Text" />
        
    
    </body>
      );
}