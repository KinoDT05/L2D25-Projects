import { useState } from 'react';

import dessert1 from './assets/front_page_1.png';
import dessert2 from './assets/front_page_2.png';

export default function StartPage({ next }) {

    const [input, setInput] = useState('');
    const isValid = input.trim().length > 0;

    const handleNext = () => {
        if (isValid) next(input); // Pass the data to App
    };

    return (
        <div>
            <img id="ImageCake" src={dessert1}/>
            <img id="ImageCookie" src={dessert2}/>
            
            <p id="Learn2Dev"><b>* * LEARN-2-DEV * *</b></p>
            <p><i>- By "Expert Gamers" (Group 2) -</i></p>
            <h1 class="BigTitle">What Dessert<br/>Are You?</h1>
            <p id = "Subtitle"><b>TAKE THE QUIZ TO FIND OUT!</b></p>
                
            <form onSubmit={handleNext}>
                <div id = "Div1_NameBox">
                <input
                    id="NameBox"
                    type="text;"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder="Enter your name..."
                />
                </div>
            </form>

            <div id="Div2_StartButton">
                <button id="StartButton" type="button" onClick={handleNext}>
                <b>START</b>
                </button>
            </div>
        </div>
    );
}