import TextSmall from '../assets/TextSmall.png'

export default function Ability({ability}){
	return(
		<div className="daydreamFont blackText" style={{ 
			background: `url(${TextSmall})`,
			backgroundRepeat: 'no-repeat',
			backgroundSize: '100% 100%',
			width: '182px',
			marginLeft: '22px'
		}}>
		<p className="TextSmall" style = {{fontSize:8,
			padding: 5,
			margin: 0,
		}}>{ability}</p>
		</div>
	);
}