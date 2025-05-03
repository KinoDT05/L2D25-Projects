import './personality_quiz_style.css';

export default function QuizPage({ prev, name, nextA, nextB, nextC }) {
    return (
        <div>
            <div id="Div1_QuizBackground">
                <div id="Div2_TextingBox">
                <p>Hello {name}! Welcome to the Desert Personality Test!</p>
                <p>Answer a few of these questions to learn about what kind of dessert you are!</p>
                    <h1 id="Question"><b>
                        1. If you were to go on an adventure, where would you go?</b></h1>
                </div>

                <div id="Div3_ChoiceBox">
                    <button className="ChoiceButton" type="button" onClick={() => nextA()}>
                        <b>A magical land.</b>
                    </button>
                    <button className="ChoiceButton" type="button" onClick={() => nextB()}>
                        <b>I’ll stay home.</b>
                    </button>
                    <button className="ChoiceButton" type="button" onClick={() => nextC()}>
                        <b>Somewhere I haven’t been to before!</b>
                    </button>
                </div>
            </div>
            <button class="BackBtn" onClick={prev}>Back</button>
        </div>
    );
}
