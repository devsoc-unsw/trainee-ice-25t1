function PrerequisiteSubjects({ prereq } : { prereq : string }) {
  return (
    <div>
      <h2>Prerequisites</h2>
      <p>{ prereq }</p>
    </div>
  );
}

export default PrerequisiteSubjects;
