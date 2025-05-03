import { useState } from 'react';
import './App.css';
import StartPage from './StartPage.js';
import QuizPage from './QuizPage.js';
import Question2 from './Question2.js'; 
import Question3 from './Question3.js';
import Question4 from './Question4.js';
import MangoGraham from './MangoGraham.js';
import Taho from './Taho.js';
import HaloHalo from './HaloHalo.js';
import LecheFlan from './LecheFlan.js';
import PichiPichi from './PichiPichi.js';
import Suman from './Suman.js';

function App() {
  const [step, setStep] = useState(0);
  const [name, setName] = useState('');
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);
  const [countC, setCountC] = useState(0);

  const [quizPageChoice, setQuizPageChoice] = useState(null); 
  const [question2Choice, setQuestion2Choice] = useState(null); 
  const [question3Choice, setQuestion3Choice] = useState(null);
  const [question4Choice, setQuestion4Choice] = useState(null);


  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleStartPageComplete = (data) => {
    setName(data);     
    nextStep();        
  };

  // Handlers for QuizPage choices
  const handleQuizPageA = () => {
    setQuizPageChoice('A');
    setCountA(prev => prev + 1);  // Increment count for choice A
    nextStep();
  };

  const handleQuizPageB = () => {
    setQuizPageChoice('B');
    setCountB(prev => prev + 1);  // Increment count for choice B
    nextStep();
  };

  const handleQuizPageC = () => {
    setQuizPageChoice('C');
    setCountC(prev => prev + 1);  // Increment count for choice C
    nextStep();
  };

  // Handlers for Question2 choices
  const handleQuestion2A = () => {
    setQuestion2Choice('A');
    setCountA(prev => prev + 1);  // Increment count for choice A
    nextStep();
  };

  const handleQuestion2B = () => {
    setQuestion2Choice('B');
    setCountB(prev => prev + 1);  // Increment count for choice B
    nextStep();
  };

  const handleQuestion2C = () => {
    setQuestion2Choice('C');
    setCountC(prev => prev + 1);  // Increment count for choice C
    nextStep();
  };

  // Handlers for Question3 choices
  const handleQuestion3A = () => {
    setQuestion3Choice('A');
    setCountA(prev => prev + 1);  // Increment count for choice A
    nextStep();
  };

  const handleQuestion3B = () => {
    setQuestion3Choice('B');
    setCountB(prev => prev + 1);  // Increment count for choice B
    nextStep();
  };

  const handleQuestion3C = () => {
    setQuestion3Choice('C');
    setCountC(prev => prev + 1);  // Increment count for choice C
    nextStep();
  };

  // Handlers for Question4 choices
  const handleQuestion4A = () => {
    setQuestion4Choice('A');
    setCountA(prev => prev + 1);  // Increment count for choice A
    nextStep();
  };

  const handleQuestion4B = () => {
    setQuestion4Choice('B');
    setCountB(prev => prev + 1);  // Increment count for choice B
    nextStep();
  };

  const handleQuestion4C = () => {
    setQuestion4Choice('C');
    setCountC(prev => prev + 1);  // Increment count for choice C
    nextStep();
  };

  // Most selected option
  const getResult = () => {
    const counts = { A: countA, B: countB, C: countC };
    const maxChoice = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
    
    if (countA === countB && countB > countC) {
      return 'LecheFlan'; 
    } else if (countB === countC && countC > countA) {
      return 'PichiPichi'; 
    } else if (countA === countC && countC > countB) {
      return 'Suman'; 
    }

    switch (maxChoice) {
      case 'A':
        return 'MangoGraham';
      case 'B':
        return 'Taho';
      case 'C':
        return 'HaloHalo';
      default:
        return null;
    }

  };

  

  const steps = [
    <StartPage next={handleStartPageComplete} />,
    <QuizPage
      name={name}
      prev={prevStep}
      nextA={handleQuizPageA}
      nextB={handleQuizPageB}
      nextC={handleQuizPageC}
    />,
    <Question2
      name={name}
      prev={prevStep}
      nextA={handleQuestion2A}
      nextB={handleQuestion2B}
      nextC={handleQuestion2C}
    />,
    <Question3
      name={name}
      prev={prevStep}
      nextA={handleQuestion3A}
      nextB={handleQuestion3B}
      nextC={handleQuestion3C}
    />,
    <Question4
      name={name}
      prev={prevStep}
      nextA={handleQuestion4A}
      nextB={handleQuestion4B}
      nextC={handleQuestion4C}
    />,
    // Final Result Page
    (() => {
      const result = getResult();
      switch (result) {
        case 'MangoGraham':
          return <MangoGraham />;
        case 'Taho':
          return <Taho />;
        case 'HaloHalo':
          return <HaloHalo />;
        case 'LecheFlan':
          return <LecheFlan />;
        case 'PichiPichi':
          return <PichiPichi />;
        case 'Suman':
          return <Suman />;
        default:
          return <div>Error</div>;
      }
    })()
    
  ];

  return (
    <div>{steps[step]}</div>
  );
}

export default App;
