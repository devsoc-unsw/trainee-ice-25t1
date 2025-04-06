import React, { useState } from 'react';
import './SubjectPanel.css';

function SubjectPanel() {
  const [subjects] = useState([
    { id: 1, text: "COMP1511" },
    { id: 2, text: "COMP1521" },
    { id: 3, text: "COMP1531" },
    { id: 4, text: "COMP2511" },
    { id: 5, text: "COMP2521" }
  ]);


  return (
    <div className="grid-container">
      {subjects.map(subject => (
        <div key={subject.id} className="subject-box">
          {subject.text}
        </div>
      ))}
    </div>
  );
}

export default SubjectPanel;
