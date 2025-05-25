import "./CourseCompareTable.css"
import courseData from "../../CourseData.json"
import assessmentData from "../../subjectPrereqSkillAssessmentData.json"

interface CourseCompareTableProps {
  code1: string;
  code2: string;
}
export default function CourseCompareTable({code1, code2}: CourseCompareTableProps) {
  return (

    <div className="course-compare-table">
      <div>.</div>
      <h1>{code1}</h1>
      <h1>{code2}</h1>

      <h2>Title</h2>
      {/* @ts-ignore */}
      <h3>{courseData[code1]["title"]}</h3>
      {/* @ts-ignore */}
      <h3>{courseData[code2]["title"]}</h3>
      
      <h2>Description</h2>
      {/* @ts-ignore */}
      <h3>{courseData[code1]["description"].slice(0, 300)}...</h3>
      {/* @ts-ignore */}
      <h3>{courseData[code2]["description"].slice(0, 300)}...</h3>

      <h2>Terms Offered</h2>
      {/* @ts-ignore */}
      <h3>{courseData[code1]["terms"].join(', ')}</h3>
      {/* @ts-ignore */}
      <h3>{courseData[code2]["terms"].join(', ')}</h3>


      <h2>Week 1</h2>
      {/* @ts-ignore */}
      <h3>{assessmentData[code1]["assessment_timeline"]["week1"].join('; ')}</h3>
      {/* @ts-ignore */}
      <h3>{assessmentData[code2]["assessment_timeline"]["week1"].join('; ')}</h3>

      <h2>Week 2</h2>

      {/* @ts-ignore */}
      <h3>{assessmentData[code1]["assessment_timeline"]["week2"].join('; ')}</h3>
      {/* @ts-ignore */}
      <h3>{assessmentData[code2]["assessment_timeline"]["week2"].join('; ')}</h3>

      <h2>Week 3</h2>
      {/* @ts-ignore */}
      <h3>{assessmentData[code1]["assessment_timeline"]["week3"].join('; ')}</h3>
      {/* @ts-ignore */}
      <h3>{assessmentData[code2]["assessment_timeline"]["week3"].join('; ')}</h3>

      <h2>Week 4</h2>
      {/* @ts-ignore */}
      <h3>{assessmentData[code1]["assessment_timeline"]["week4"].join('; ')}</h3>
      {/* @ts-ignore */}
      <h3>{assessmentData[code2]["assessment_timeline"]["week4"].join('; ')}</h3>

      <h2>Week 5</h2>
      {/* @ts-ignore */}
      <h3>{assessmentData[code1]["assessment_timeline"]["week5"].join('; ')}</h3>
      {/* @ts-ignore */}
      <h3>{assessmentData[code2]["assessment_timeline"]["week5"].join('; ')}</h3>

      <h2>Week 6</h2>
      {/* @ts-ignore */}
      <h3>{assessmentData[code1]["assessment_timeline"]["week6"].join('; ')}</h3>
      {/* @ts-ignore */}
      <h3>{assessmentData[code2]["assessment_timeline"]["week6"].join('; ')}</h3>

      <h2>Week 7</h2>
      {/* @ts-ignore */}
      <h3>{assessmentData[code1]["assessment_timeline"]["week7"].join('; ')}</h3>
      {/* @ts-ignore */}
      <h3>{assessmentData[code2]["assessment_timeline"]["week7"].join('; ')}</h3>

      <h2>Week 8</h2>
      {/* @ts-ignore */}
      <h3>{assessmentData[code1]["assessment_timeline"]["week8"].join('; ')}</h3>
      {/* @ts-ignore */}
      <h3>{assessmentData[code2]["assessment_timeline"]["week8"].join('; ')}</h3>

      <h2>Week 9</h2>
      {/* @ts-ignore */}
      <h3>{assessmentData[code1]["assessment_timeline"]["week9"].join('; ')}</h3>
      {/* @ts-ignore */}
      <h3>{assessmentData[code2]["assessment_timeline"]["week9"].join('; ')}</h3>

      <h2>Week 10</h2>
      {/* @ts-ignore */}
      <h3>{assessmentData[code1]["assessment_timeline"]["week10"].join('; ')}</h3>
      {/* @ts-ignore */}
      <h3>{assessmentData[code2]["assessment_timeline"]["week10"].join('; ')}</h3>

      <h2>Week 11</h2>
      {/* @ts-ignore */}
      <h3>{assessmentData[code1]["assessment_timeline"]["week11"].join('; ')}</h3>
      {/* @ts-ignore */}
      <h3>{assessmentData[code2]["assessment_timeline"]["week11"].join('; ')}</h3>
    </div>
  )

}