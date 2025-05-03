import './personality_quiz_style.css';

export default function Question4({ prev, nextA, nextB, nextC }) {
    return (
        <div>
            <div id="Div1_QuizBackground">
                <div id="Div2_TextingBox">
                    <h1 id="Question"><b>
                    4. A friendly-looking stranger comes and talks to you. What do you do?</b></h1>
                </div>

                <div id="Div3_ChoiceBox">
                    <button className="ChoiceButton" type="button" onClick={() => nextA()}>
                        <b>Be wary.</b>
                    </button>
                    <button className="ChoiceButton" type="button" onClick={() => nextB()}>
                        <b>Be polite.</b>
                    </button>
                    <button className="ChoiceButton" type="button" onClick={() => nextC()}>
                        <b>Be energetic.</b>
                    </button>
                </div>
            </div>
            <button class="BackBtn" onClick={prev}>Back</button>
        </div>
    );
}
