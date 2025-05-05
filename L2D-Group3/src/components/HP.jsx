import Heart from '../assets/hp.png';

export default function HP({hp}) {
    return (
        <div className='daydreamFont blackText' style={{display:'flex', justifyContent:'row'}}>
            <p style={{fontSize: 10, display: 'flex', alignItems: 'center'}}>
                <img src={Heart} alt='Hp' style={{ height: 24, width: 24, padding: 2, marginTop: '1px', display: 'block'}}/>{hp}
            </p>
        </div>
    );
}