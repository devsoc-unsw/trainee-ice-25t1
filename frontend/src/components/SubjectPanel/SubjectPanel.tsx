import React from 'react';
import CourseDataRaw from '../../pages/CourseInfo/Data/CourseData.json'
import { CourseData } from '../../types/courses';        

import './SubjectPanel.css';

import { useNavigate } from 'react-router-dom';


type SubjectPanelProps = {
  inputText: string;
};

function SubjectPanel({ inputText }: SubjectPanelProps) {
  const courseData = CourseDataRaw as CourseData;
  const subjects = Object.keys(courseData).map((code, index) => ({
    id: index,
    text: code,
  }));
  const navigate = useNavigate();


  const filteredSubjects = subjects.filter(subject =>
    subject.text.toLowerCase().includes(inputText)
  );

  return (
    <div className="grid-container">
      {filteredSubjects.map(subject => (
        <div key={subject.id} className="subject-box" onClick={() => navigate(`/course-info?code=${subject.text}`)}>
          {subject.text}
        </div>
      ))}
    </div>
  );
}

export default SubjectPanel;
