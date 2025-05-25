import './CourseCompare.css';
import { useEffect, useRef, useState } from "react";
import CourseCompareTable from './CourseCompareTable.tsx';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import courseData from "../../CourseData.json"

function CourseCompare() {

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
              disablePortal
              options={Object.keys(courseData)}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Course 1" />}
              onChange={(event, newInputValue) => setCode1(newInputValue)}

            />
          </div>
          <div className='autocomplete-wrapper'>
            <Autocomplete
              disablePortal
              options={Object.keys(courseData)}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Course 2" />}
              onChange={(event, newInputValue) => setCode2(newInputValue)}
            />
          </div>

      {code1 && code2 && 

      <div className="courses-container">
        <CourseCompareTable code1={code1} code2={code2} />
      </div>
      }
    </div>
  );
}

export default CourseCompare;