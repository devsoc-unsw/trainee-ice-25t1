interface PrerequisiteSkillsProps {
  info?: string[];
}

function PrerequisiteSkills({ info }: PrerequisiteSkillsProps) {
  console.log(info)
  return (
    <div>
      <h2>Prerequisite Skills</h2>
      <ul>
        {info && info.length > 0 ? (
          info.map((item, index) => <li key={index}>{item}</li>)
        ) : (
          <li>No prerequisite skills listed.</li>
        )}
      </ul>
    </div>
  );
}

export default PrerequisiteSkills;
