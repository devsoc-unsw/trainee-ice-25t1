import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Landing from "./pages/Landing/Landing";
import Home from "./pages/Home/Home";
import CourseInfo from "./pages/CourseInfo/CourseInfo";
import CourseCompare from "./pages/CourseCompare/CourseCompare";

function App() {
  return (
    <BrowserRouter>
       <Routes>
         <Route path="/" element={<Landing/>}/>
         <Route path="/home" element={<Home/>}/>
         <Route path="/course-info" element={<CourseInfo/>}/>
         <Route path="/course-compare" element={<CourseCompare/>}/>
       </Routes>
     </BrowserRouter>
  )
}

export default App
