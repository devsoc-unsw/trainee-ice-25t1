
function CourseInfo() {
    return (
        <div >
            <h1>📖 Course title</h1>
            <h2>Course Outline</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h2>Prerequisite Skills</h2>
              </div>
              <div>
                <h2>Prerequisite Subjects</h2>
              </div>
            </div>
            <h2>Timeline</h2>
        </div>
    );
}

export default CourseInfo;
