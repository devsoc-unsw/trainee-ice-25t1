import CourseOutline from '../../components/CourseInfo/CourseOutline.tsx';
import PrerequisiteSkills from '../../components/CourseInfo/PrerequisiteSkills';
import PrerequisiteSubjects from '../../components/CourseInfo/PrerequisiteSubjects';
import Timeline from '../../components/CourseInfo/Timeline';
import './CourseInfo.css';

function CourseInfo() {
  return (
    <div>
      <h1>📖 COMP1521</h1>

      <CourseOutline />

      <div className="prerequisites_grid">
        <PrerequisiteSkills />
        <PrerequisiteSubjects />
      </div>

      <Timeline />
    </div>
  );
}

export default CourseInfo;
