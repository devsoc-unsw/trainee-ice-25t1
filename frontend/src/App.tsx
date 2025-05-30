import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import './App.css';
import Landing from "./pages/Landing/Landing";
import Home from "./pages/Home/Home";
import CourseInfo from "./pages/CourseInfo/CourseInfo";
import CourseCompare from "./pages/CourseCompare/CourseCompare";
import Navbar from "./components/NavBar/NavBar";
import AnimatedGradientDiv from "./components/AnimatedGradientBackground/AnimatedGradientDiv";

function AppContent() {
  const location = useLocation();

  const showNav = location.pathname !== "/";

  return (
    <>
      {showNav && <Navbar />}
      <Routes>
         <Route path="/" element={<Landing/>}/>
         <Route path="/home" element={<Home/>}/>
         <Route path="/course-info" element={<CourseInfo code={null}/>}/>
         <Route path="/course-compare" element={<CourseCompare/>}/>
       </Routes>
    </>
  )
}
function App() {
  return (
    <AnimatedGradientDiv>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </AnimatedGradientDiv>
  )
}

export default App;
