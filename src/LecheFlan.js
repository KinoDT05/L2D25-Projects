import './personality_quiz_style.css';
import dessert from './assets/ResultLecheFlan.png';

export default function LecheFlan() {
    return (
        <body>
        <h1 id = "YouGot"><b>
            You Got...</b></h1>
            
        <img id = "Result" src={dessert} alt="Descriptive Text" />
        
    </body>
      );
}

