import React from 'react';
import dessert from './assets/ResultMangoGraham.png';

function MangoGraham({name}) {
  return (
    <body>
	<h1 id = "YouGot"><b>
		You Got...</b></h1>
		
	<img id = "Result" src={dessert} alt="Descriptive Text" />
	
</body>
  );
}

export default MangoGraham;