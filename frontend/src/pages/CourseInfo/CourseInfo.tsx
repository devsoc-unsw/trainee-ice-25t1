import './CourseInfo.css';

function CourseInfo() {
    return (
        <div >
            <h1>📖 COMP1521 </h1>
            <h2>Course Outline</h2>
            <p> This course introduces students to how
                computer systems are structured in terms of
                basic electronic components, how they are
                used to implement procedural programs, and how they are structured as a collection of software layers. It introduces students to low-level software layers such as operating systems, and introduces concurrency concepts. The goal is
                to give students a solid understanding of what happens when high-level programs are executed, as a basis for
                further study in important areas of  computing such as computer architecture, operating systems.</p>
            <div className="prerequisites_grid">
              <div>
                <h2>Prerequisite Skills</h2>
                <ul>
                  <li>Write simple programs in the C programming language</li>
                  <li>Define and invoke functions and return results in C</li>
                  <li>Define and manipulate structured data in C</li>
                  <li>Use pointers to access data objects</li>
                </ul>
              </div>
              <div>
                <h2>Prerequisite Subjects</h2>
                <p>COMP1511 or DPST1091 or COMP1911 or COMP1917</p>
              </div>
            </div>
            <h2>Timeline</h2>
            <div className="timeline_grid">
              <h3>Week 1</h3>
              <h3>Week 2</h3>
              <h3>Week 3</h3>
              <h3>Week 4</h3>
              <h3>Week 5</h3>
              <h3>Week 6</h3>
              <h3>Week 7</h3>
              <h3>Week 8</h3>
              <h3>Week 9</h3>
              <h3>Week 10</h3>
            </div>
            <div className="timeline_grid">
              <p>- </p>
              <p>- </p>
              <p>Weekly Quiz <br /> Lab 1 Due <br />Lab 2 Due </p>
              <p>Weekly Quiz <br /> Lab 3 Due</p>
              <p>Assignment 1 Due <br /> Weekly Quiz <br /> Lab 4 Due</p>
              <p>- </p>
              <p>Weekly Quiz <br />Lab 5 Due</p>
              <p>Assignment 2 Due <br /> Weekly Quiz <br /> Lab 6 Due</p>
              <p>Weekly Quiz <br /> Lab 7 Due</p>
              <p>Weekly Quiz <br />Lab 8 Due</p>

            </div>
        </div>
    );
}

export default CourseInfo;
