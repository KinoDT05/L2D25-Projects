import './personality_quiz_style.css';

export default function Question2({ prev, nextA, nextB, nextC }) {
    return (
        <div>
            <div id="Div1_QuizBackground">
                <div id="Div2_TextingBox">
                    <h1 id="Question"><b>
                    2. If you were to hang out with someone, who would you hang out with?</b></h1>
                </div>

                <div id="Div3_ChoiceBox">
                    <button className="ChoiceButton" type="button" onClick={() => nextA()}>
                        <b>My family.</b>
                    </button>
                    <button className="ChoiceButton" type="button" onClick={() => nextB()}>
                        <b>My close circle of friends.</b>
                    </button>
                    <button className="ChoiceButton" type="button" onClick={() => nextC()}>
                        <b>Anyone who’s free.</b>
                    </button>
                </div>
            </div>
            <button class="BackBtn" onClick={prev}>Back</button>
        </div>
    );
}
