import './results_style.css';
import dessert from './assets/ResultTaho.png';

export default function Taho({name}) {
    return (
    
<body>
	<h1 id = "YouGot"><b>
		{name}You Got...</b></h1>
		
	<img id = "Result" src={dessert} alt="Descriptive Text" />
	

</body>
    )
}