import { keyframes } from "@emotion/react";
import { styled } from "@mui/system";

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

export default AnimatedGradientDiv;