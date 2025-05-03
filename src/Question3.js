import './personality_quiz_style.css';

export default function Question3({ prev, nextA, nextB, nextC }) {
    return (
        <div>
            <div id="Div1_QuizBackground">
                <div id="Div2_TextingBox">
                    <h1 id="Question"><b>
                    3. What superpower would you want to have?</b></h1>
                </div>

                <div id="Div3_ChoiceBox">
                    <button className="ChoiceButton" type="button" onClick={() => nextA()}>
                        <b>Elemental Control</b>
                    </button>
                    <button className="ChoiceButton" type="button" onClick={() => nextB()}>
                        <b>Teleportation</b>
                    </button>
                    <button className="ChoiceButton" type="button" onClick={() => nextC()}>
                        <b>Mind Control</b>
                    </button>
                </div>
            </div>
            <button class="BackBtn" onClick={prev}>Back</button>
        </div>
    );
}
