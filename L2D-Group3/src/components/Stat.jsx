import Sword from '../assets/attackP.png';
import Wand from '../assets/attackM.png';
import Shield from '../assets/defenseP.png';
import Book from '../assets/defenseM.png';

export default function Stat({name, value}) {
    const icon = {
        "Physical Attack": Sword,
        "Mental Attack": Wand,
        "Physical Defense": Shield,
        "Special Defense": Book
    };

    return (
        <div className='daydreamFont blackText'>
            <p style={{fontSize: 8, display: 'flex', alignItems: 'center', margin:0, padding: '-10px 0', lineHeight:'0.5px'}}>
                <img src={icon[name]} alt="icon" style={{ height: 20, width: 20}}/>
                {value}
            </p>
        </div>
    );
}