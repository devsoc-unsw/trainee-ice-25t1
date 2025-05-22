import '../../pages/CourseInfo/CourseInfo.css';
import { CourseCodeInterface } from './CourseCodeInterface';
import data from "../../subjectPrereqSkillAssessmentData.json"

function Timeline({code}: CourseCodeInterface) {
  const weeks = [
    "week1", "week2", "week3", "week4", "week5", "week6", "week7", "week8", 
    "week9", "week10", "week11"
  ]
  return (
    <>
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
        <h3>Week 11</h3>


      </div>

      <div className="timeline_grid">
        {weeks.map(week => {
          return <p>
              {
                // @ts-ignore
                (data[code]["assessment_timeline"][week] as string[]).map(item => {
                  return <>{item}<br/></>
                })
              }

          </p>
        })}
        {/* <p>- </p>
        <p>- </p>
        <p>Weekly Quiz <br /> Lab 1 Due <br /> Lab 2 Due</p>
        <p>Weekly Quiz <br /> Lab 3 Due</p>
        <p>Assignment 1 Due <br /> Weekly Quiz <br /> Lab 4 Due</p>
        <p>- </p>
        <p>Weekly Quiz <br /> Lab 5 Due</p>
        <p>Assignment 2 Due <br /> Weekly Quiz <br /> Lab 6 Due</p>
        <p>Weekly Quiz <br /> Lab 7 Due</p>
        <p>Weekly Quiz <br /> Lab 8 Due</p> */}
      </div>
    </>
  );
}

export default Timeline;
