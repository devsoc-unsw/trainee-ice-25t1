import React, { useState } from 'react';
import './SubjectPanel.css';

import { useNavigate } from 'react-router-dom';


type SubjectPanelProps = {
  inputText: string;
};

function SubjectPanel({ inputText }: SubjectPanelProps) {
  const navigate = useNavigate();

  const [subjects] = useState([
    { id: 1, text: "COMP1511" },
    { id: 2, text: "COMP1521" },
    { id: 3, text: "COMP1531" },
    { id: 4, text: "COMP2511" },
    { id: 5, text: "COMP2521" }
  ]);

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
