import { useNavigate } from 'react-router-dom';
import AnimatedGradientDiv from "../../components/AnimatedGradientBackground/AnimatedGradientDiv";
import "./Landing.css";

<link href="https://fonts.cdnfonts.com/css/kaushan-script" rel="stylesheet"></link>

const Landing = () => {
    const navigate = useNavigate();
    const clickMe = () => {
        navigate('/home');
    }
  
    return (
        <AnimatedGradientDiv>
            <img src="/bubble.png" alt="bubble" className="bubble-right-up"/>
            <img src="/bubble.png" alt="bubble" className="bubble-right-down"/>
            <img src="/bubble.png" alt="bubble" className="bubble-center-down"/>
            <img src="/bubble.png" alt="bubble" className="bubble-center-middle"/>
            <img src="/bubble.png" alt="bubble" className="bubble-left-down"/>
            <img src="/bubble.png" alt="bubble" className="bubble-left-middle"/>
            <img src="/bubble.png" alt="bubble" className="bubble-left-top"/>
            <div className="container">
                <h1 className="title">Bubbles</h1>
                <button className ="green-button" onClick={clickMe} >
                    Get Started
                    <img src="/arrow.png" alt="arrow" className="arrow-button"/>
                </button>
            </div>
        </AnimatedGradientDiv>
    );
}

export default Landing;