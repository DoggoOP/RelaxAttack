import React from 'react';
import './App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <main>

      <h1 className="Gradient1">RelaxAttack</h1>
      <h2 className="Gradient2">Specialized Relaxation Methods for each Personality Type<br></br>If you do not know your personality type, click <a className="personalitytest" href="https://www.16personalities.com/free-personality-test" target="_blank"><u>here</u></a> to take a quick test.</h2>
      
      <div className="wrapper">
        <Link to="/intj" >
          
          <button className="button1 perfect">INTJ
          <div className="buttext">
            Imaginative 
            Strategic<br></br> 
            Planners
          </div></button>

        </Link>

        <Link to="/intp">
          <button className="button2 perfect">INTP
          <div className="buttext">Innovative<br></br> 
            Curious<br></br> 
            Logical</div></button>
        </Link>


        <Link to="/entj">
        <button className="button3 perfect">ENTJ
        <div className="buttext">Bold<br></br> 
          Imaginative Strong-Willed</div></button>
        </Link>
        <Link to="/entp">
        <button className="button4 perfect">ENTP
        <div className="buttext">Smart <br></br>Curious<br></br> Intellectual</div></button>
        </Link>
        <Link to="/infj">
        <button className="button5 perfect">INFJ
        <div className="buttext">Quiet <br></br>Mystical<br></br> Idealist</div></button>
        </Link>
        <Link to="/infp">
        <button className="button6 perfect">INFP
        <div className="buttext">Poetic<br></br> Kind<br></br> Altruisitc</div></button>
        </Link>
        <Link to="/enfj">
        <button className="button7 perfect">ENFJ
        <div className="buttext">Charismatic Inspiring Leadership</div></button>
        </Link>
        <Link to="/enfp">
        <button className="button8 perfect">ENFP
        <div className="buttext">Enthusiastic Creative <br></br>Sociable</div></button>
        </Link>
        <Link to="/istj">
        <button className="button9 perfect">ISTJ
        <div className="buttext">Practical<br></br> Fact-minded Reliable</div></button>
        </Link>
        <Link to="/isfj">
        <button className="button10 perfect">ISFJ
        <div className="buttext">Protective<br></br> Warm<br></br> Caring</div></button>
        </Link>
        <Link to="/estj">
        <button className="button11 perfect">ESTJ
        <div className="buttext">Organized<br></br> Punctual<br></br> Leadership</div></button>
        </Link>
        <Link to="/esfj">
        <button className="button12 perfect">ESFJ
        <div className="buttext">Caring<br></br> Social<br></br> Popular</div></button>
        </Link>
        <Link to="/istp">
        <button className="button13 perfect">ISTP
        <div className="buttext">Bold<br></br> Practical Experimental</div></button>
        </Link>
        <Link to="/isfp">
        <button className="button14 perfect">ISFP
        <div className="buttext">Artistic<br></br> Exploring<br></br> Explorer</div></button>
        </Link>
        <Link to="/estp">
        <button className="button15 perfect">ESTP
        <div className="buttext">Smart<br></br> Energetic<br></br> Peceptive</div></button>
        </Link>
        <Link to="/esfp">
        <button className="button16 perfect">ESFP
        <div className="buttext">Spontaneous Energetic Enthusiastic</div></button>
        </Link>
      </div>
    </main>
  );
}

export default App;