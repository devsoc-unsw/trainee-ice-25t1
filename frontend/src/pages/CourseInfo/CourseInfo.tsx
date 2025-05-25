import CourseDescription from '../../components/CourseInfo/CourseDescription.tsx';
import PrerequisiteSkills from '../../components/CourseInfo/PrerequisiteSkills';
import PrerequisiteSubjects from '../../components/CourseInfo/PrerequisiteSubjects';
import Timeline from '../../components/CourseInfo/Timeline';
import CourseDataRaw from './Data/CourseData.json'
import { CourseData } from '../../types/courses.ts'

import { useLocation } from 'react-router-dom';

import './CourseInfo.css';
import { CourseCodeInterface } from '../../components/CourseInfo/CourseCodeInterface.tsx';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

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
    <div>
      <h1>📖{_code}</h1>
      <CourseDescription description={course.description} />

      <div className="prerequisites_grid">
        <PrerequisiteSkills info={course.prereq_skills}/>
        <PrerequisiteSubjects prereq={course.raw_requirements} />
      </div>

      <Timeline timeline={course.assessment_timeline}/>
    </div>
  );
}


export default CourseInfo;
