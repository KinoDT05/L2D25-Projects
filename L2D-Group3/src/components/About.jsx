import './About.css';

export default function About({dev1, dev2, dev3, dev4}) {
    return (
      <div className="about">
        <br></br>
        <h2 className="about-title" style = {{color:'#402905'}}>About Devs</h2>
        <h2 style = {{color:'#402905', fontSize: '20px'}}>Who We Are</h2>
        <br></br>
        <p style={{lineHeight:'2', color:'#402905'}}>We’re a team of computer science students looking to test and enhance our skills 
          by creating a website that captures our interests in anime and gacha. 
          With the help of our mentor, we utilized and combined our new learnings with our creativity and artistic skills 
          to design this anime-inspired gacha page.</p>
          <br></br>
        <h2 style = {{color:'#402905', fontSize: '20px'}}>Meet the Developers</h2>
        <br></br>
        <ul className='about-devs' style={{lineHeight:'2', color: '#402905'}}>
            <li>{dev1}</li>
            <li>{dev2}</li>
            <li>{dev3}</li>
            <li>{dev4}</li>
        </ul>
      </div>
    );
}