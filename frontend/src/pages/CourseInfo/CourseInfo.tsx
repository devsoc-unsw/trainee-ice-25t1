import CourseDescription from '../../components/CourseInfo/CourseDescription.tsx';
import PrerequisiteSkills from '../../components/CourseInfo/PrerequisiteSkills';
import PrerequisiteSubjects from '../../components/CourseInfo/PrerequisiteSubjects';
import Timeline from '../../components/CourseInfo/Timeline';
import CourseDataRaw from './Data/CourseData.json'
import { CourseData } from '../../types/courses.ts'

import { useLocation } from 'react-router-dom';

import './CourseInfo.css';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

function CourseInfo() {
  const query = useQuery();

  var code = query.get('code');
  if (!code)
    code = 'COMP1511';

  code = code.toLocaleUpperCase()

  const courseData = CourseDataRaw as CourseData;
  const course = courseData[code];
  return (
    <div>
      <h1>📖{code}</h1>
      <CourseDescription description={course.description} />

      <div className="prerequisites_grid">
        <PrerequisiteSkills code={code}/>
        <PrerequisiteSubjects prereq={course.raw_requirements} />
      </div>

      <Timeline code={code}/>
    </div>
  );
}


export default CourseInfo;
