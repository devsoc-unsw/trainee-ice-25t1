import './CourseCompare.css';
import { useEffect, useRef, useState } from "react";
import CourseCompareTable from './CourseCompareTable.tsx';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import courseData from "../../CourseData.json"
import { styled } from '@mui/material';
import LoadingIndicator from '../../components/LoadingIndicator/LoadingIndicator.tsx';

const StyledDiv = styled("div")(() => ({
  color: "#bfedb4",
  margin: "2rem",
  paddingRight: "1rem",
  paddingBottom: "2rem",
  background: "rgba(12, 113, 76, 0.4)",
  backdropFilter: "blur(10px)",
  border: "1px solid #bfedb4",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
  borderRadius: "15px",
}))

const CourseCompare = () => {

  const [code1, setCode1] = useState<string | null>(null);
  const [code2, setCode2] = useState<string | null>(null)

  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function updateHeight() {
      if (backgroundRef.current) {
        backgroundRef.current.style.setProperty(
          "--bg-height",
          `${document.documentElement.scrollHeight}px`
        );
      }
    }

    window.addEventListener("resize", updateHeight);
    window.addEventListener("load", updateHeight);
    updateHeight();

    return () => {
      window.removeEventListener("resize", updateHeight);
      window.removeEventListener("load", updateHeight);
    };
  }, []);

  return (
    <div>
      <div className='autocomplete-wrapper'>
        <Autocomplete
          options={Object.keys(courseData)}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Course 1" />}
          onChange={(event, newInputValue) => setCode1(newInputValue)}

        />
      </div>
      <div className='autocomplete-wrapper'>
        <Autocomplete
          options={Object.keys(courseData)}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Course 2" />}
          onChange={(event, newInputValue) => setCode2(newInputValue)}
        />
      </div>
      {!code1 && !code2 && 
        <LoadingIndicator loadingIndicatorColor="#FFF" textColor="#FFF" textToDisplay="Please select the courses to compare!🚀"/>
      }

      {!code1 && code2 &&
        <LoadingIndicator loadingIndicatorColor="#FFF" textColor="#FFF" textToDisplay="You have not selected Course 1 🫠"/>
      }

      {code1 && !code2 && 
        <LoadingIndicator loadingIndicatorColor="#FFF" textColor="#FFF" textToDisplay="Almost there! Please select a second course! 🛬"/>
      }

      {code1 && code2 && 
        <StyledDiv className="courses-container">
          <CourseCompareTable code1={code1} code2={code2} />
        </StyledDiv>
      }
    </div>
  );
}

export default CourseCompare;