import { styled } from "@mui/material";

interface PrerequisiteSkillsProps {
  info?: string[];
}
const StyledLi = styled("li")(() => ({
  listStyleType: "none"
}))

function PrerequisiteSkills({ info }: PrerequisiteSkillsProps) {
  console.log(info)
  return (
    <div>
      <h2>Prerequisite Skills</h2>
      <ul>
        {info && info.length > 0 ? (
          info.map((item, index) => <StyledLi key={index}>{item}</StyledLi>)
        ) : (
          <StyledLi>No prerequisite skills listed.</StyledLi>
        )}
      </ul>
    </div>
  );
}

export default PrerequisiteSkills;
