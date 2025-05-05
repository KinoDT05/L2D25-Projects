import Stat from './Stat.jsx';
import Description from './Description.jsx';
import HP from './HP.jsx';
import Ability from './Ability.jsx';
import common from '../assets/common.png';
import uncommon from '../assets/uncommon.png';
import rare from '../assets/rare.png';
import epic from '../assets/epic.png';
import mythical from '../assets/mythical.png';
import Star from '../assets/star.png'
import lockedCard from '../assets/lockedCard.png';
import frame from '../assets/frame.png';
import TextBig from '../assets/TextBig.png'

import '../assets/Daydream.css';
import './Card.css';

function Rizz({value}) { 
    return(
        <div className='daydreamFont blackText'>
            <h2 style={{fontSize: 8, display:'flex', justifyContent:'center', alignItems:'center', flexFlow: 'column nowrap', flexDirection:'column'}}>
                <img src={Star} alt='star' style={{ display:'flex', justifyContent: 'center', height: 20, width: 20}}/>
                {value}
            </h2>
        </div>
    )
}

export default function Card({card}){
    
    if (card.isLocked){

        return(
            <article>
                <img src={lockedCard} alt = "locked" height="288px" width="226px"/>
            </article>
        );
    }
    else{

        const backgrounds = {
            "Common": common,
            "Uncommon": uncommon,
            "Rare": rare,
            "Epic": epic,
            "Mythical": mythical,
        };

        return(
            <article id='goods'style={{
                width: '226px',
                height: '288px',
                backgroundImage: `url(${frame}), url(${card.img}), url(${backgrounds[card.rarity]})`,
                backgroundSize: 'cover, cover, cover',
                backgroundPosition: 'top, top, top',
                backgroundRepeat: 'no-repeat, no-repeat, no-repeat',
              }}>
                
                <section id="top">
                    <h2 className='daydreamFont blackText' style={{fontSize:10, display:'flex', justifyContent:'flex-start', marginTop:'6px'}}>{card.name}</h2>
                    <HP hp = {card.hp}/>
                </section>

                <section id="stuff">
                    <Description desc = {card.description}/>
                    <section id="stats" style={{
                        background: `url(${TextBig})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '100% 100%',
                        width: '182px',
                        height: '38px',
                        marginLeft: '22px'
                    }}>
                        <section id = "attack">
                            <Stat name = "Physical Attack" value = {card.attackPhysical}/>
                            <Stat name = "Mental Attack" value = {card.attackMental}/>
                        </section>
        
                        <Rizz id='charisma' value = {card.rizz}/>

                        <section id = "defense">
                            <Stat name = "Physical Defense" value = {card.defensePhysical}/>
                            <Stat name = "Special Defense" value = {card.defenseSpecial}/>
                        </section>
                    </section>
                    <Ability ability = {card.ability}/>
                </section>
            </article>
        );
    }
}