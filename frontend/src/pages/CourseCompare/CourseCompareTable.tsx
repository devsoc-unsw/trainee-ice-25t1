import "./CourseCompareTable.css"
import courseData from "../../CourseData.json"
import assessmentData from "../../subjectPrereqSkillAssessmentData.json"

interface CourseCompareTableProps {
  code1: string;
  code2: string;
}
export default function CourseCompareTable({code1, code2}: CourseCompareTableProps) {

  const assessment1True = code1 in courseData;
  const assessment2True = code2 in courseData;
  const weekArray = ["week1", "week2", "week3", "week4", "week5", "week6", "week7", "week8", "week9", "week10", "week11"]
  return (

    <div className="course-compare-table">
      <div></div>
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

      {weekArray.map((week, i) => {
        return (
        <>
          <h2>Week {i + 1}</h2>
          {/* @ts-ignore */}
          <h3>{assessment1True ? assessmentData[code1]["assessment_timeline"][week].join('; ') : "Unavailable"}</h3>
          {/* @ts-ignore */}
          <h3>{assessment2True ? assessmentData[code2]["assessment_timeline"][week].join('; ') : "Unavailable"}</h3>
        </>)
      })}

    </div>
  )

}