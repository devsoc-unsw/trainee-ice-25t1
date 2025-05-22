import "./Landing.css";
import { useNavigate } from 'react-router-dom';
import { keyframes } from "@emotion/react";
import { styled } from "@mui/system";

<link href="https://fonts.cdnfonts.com/css/kaushan-script" rel="stylesheet"></link>

// Adapted from: https://codepen.io/hylobates-lar/pen/qBbQeON
const gradientAnimation = keyframes`
  0% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 100%;
  }
  100% {
    background-position: 50% 0%;
  }
`;

const AnimatedGradientDiv = styled("div")(() => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: "100vw",
    minHeight: '100vh',
    background: "linear-gradient(to bottom, #193e54,rgb(92, 117, 88), #3d968a, #a3dda5)",  
    backgroundSize: "150% 150%",
    animation: `${gradientAnimation} 10s ease infinite`,
}))

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