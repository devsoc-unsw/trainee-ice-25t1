import preq_skill_data from "../../subjectPrereqSkillAssessmentData.json"
import { CourseCodeInterface } from "./CourseCodeInterface";

function PrerequisiteSkills({code}: CourseCodeInterface) {
  console.log(code)
  return (
    <div>
      <h2>Prerequisite Skills</h2>
      <ul>
        {/* @ts-ignore */}

        {preq_skill_data[code].prereq_skills.map(item => {
          console.log(item)
          return <li>{item}</li>
        })}
      </ul>
    </div>
  );
}

export default PrerequisiteSkills;
