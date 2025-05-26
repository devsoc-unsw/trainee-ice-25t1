const PrerequisiteSubjects = ({ prereq } : { prereq : string }) => {
  return (
    <div>
      <h2>Prerequisites</h2>
        {prereq && prereq.length > 0 ? (
          <p>{ prereq }</p>
        ) : (
          <p>None</p>
        )}
    </div>
  );
}

export default PrerequisiteSubjects;
