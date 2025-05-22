import CourseDescription from '../../components/CourseInfo/CourseDescription.tsx';
import PrerequisiteSkills from '../../components/CourseInfo/PrerequisiteSkills';
import PrerequisiteSubjects from '../../components/CourseInfo/PrerequisiteSubjects';
import Timeline from '../../components/CourseInfo/Timeline';
import CourseDataRaw from './Data/CourseData.json'
import { CourseData } from '../../types/courses.ts'
import './CourseInfo.css';

function CourseInfo() {
  const courseData = CourseDataRaw as CourseData;
  const course = courseData["COMP1521"];
  return (
    <div>
      <h1>📖 COMP1521</h1>
      <CourseDescription description={course.description} />

      <div className="prerequisites_grid">
        <PrerequisiteSkills />
        <PrerequisiteSubjects prereq={course.raw_requirements} />
      </div>

      <Timeline />
    </div>
  );
}


export default CourseInfo;
