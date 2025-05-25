// import CourseInfo from '../CourseInfo/CourseInfo.tsx';
import './CourseCompare.css';
import { useEffect, useRef } from "react";

import { useLocation } from 'react-router-dom';
import CourseCompareTable from './CourseCompareTable.tsx';
import CourseInfo from '../CourseInfo/CourseInfo.tsx';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

function CourseCompare() {
  const backgroundRef = useRef<HTMLDivElement>(null);

  const query = useQuery();

  var code1 = query.get('code1') as string;
  var code2 = query.get('code2') as string;

  if (!code1)
    code1 = 'COMP1511';
  if (!code2)
    code2 = 'COMP1531';

  code1 = code1.toUpperCase();
  code2 =  code2.toUpperCase();

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
      <div className="courses-container">
        {/* <div><CourseInfo code={code1}/></div>
        <div><CourseInfo code={code2}/></div> */}

        <CourseCompareTable code1={code1} code2={code2} />
      </div>
    </div>
  );
}

export default CourseCompare;