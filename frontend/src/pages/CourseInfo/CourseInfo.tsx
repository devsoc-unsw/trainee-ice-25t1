import CourseDescription from '../../components/CourseInfo/CourseDescription.tsx';
import PrerequisiteSkills from '../../components/CourseInfo/PrerequisiteSkills';
import PrerequisiteSubjects from '../../components/CourseInfo/PrerequisiteSubjects';
import Timeline from '../../components/CourseInfo/Timeline';
import CourseDataRaw from './Data/CourseData.json'
import { CourseData } from '../../types/courses.ts'

import { useLocation } from 'react-router-dom';

import './CourseInfo.css';
import { CourseCodeInterface } from '../../components/CourseInfo/CourseCodeInterface.tsx';
import { styled } from '@mui/material';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const StyledDiv = styled("div")(() => ({
  color: "#bfedb4",
  margin: "2rem",
  padding: "1rem",
  paddingBottom: "2rem",
  background: "rgba(12, 113, 76, 0.4)",
  backdropFilter: "blur(10px)",
  border: "1px solid #bfedb4",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
  borderRadius: "15px",
}))

function CourseInfo({code}: CourseCodeInterface) {
  const query = useQuery();

  var _code; 
  
  if (!code) {
    _code = query.get('code') as string;
  } else {
    _code = code;
  }

  if (!_code)
    _code = 'COMP1511'

  _code = _code.toLocaleUpperCase()

  const courseData = CourseDataRaw as CourseData;
  const course = courseData[_code];
  return (
    <StyledDiv>
      <h1>{_code} ~ {course.title} 🤔</h1>
      <CourseDescription description={course.description} />

      <div className="prerequisites_grid">
        <PrerequisiteSkills info={course.prereq_skills}/>
        <PrerequisiteSubjects prereq={course.raw_requirements} />
      </div>

      <Timeline timeline={course.assessment_timeline}/>
    </StyledDiv>
  );
}


export default CourseInfo;
