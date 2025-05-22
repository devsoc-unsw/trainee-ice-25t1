function CourseDescription({ description } : { description : string }) {
  return (
    <div>
      <h2>Course Description</h2>
      <p>
        { description }
      </p>
    </div>
  );
}



export default CourseDescription;
