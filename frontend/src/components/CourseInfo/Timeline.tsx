interface AssessmentTimelineProps {
  timeline?: Record<string, string[]>;
}

function Timeline({ timeline }: AssessmentTimelineProps) {
  if (!timeline || Object.keys(timeline).length === 0) {
    return <p>No assessment timeline available.</p>;
  }

  const weeks = Object.keys(timeline).sort((a, b) => {
    const aNum = parseInt(a.replace(/\D/g, ""));
    const bNum = parseInt(b.replace(/\D/g, ""));
    return aNum - bNum;
  });

  return (
    <div>
      <h2>Assessment Timeline</h2>
      <table className="timeline_table">
        <thead>
          <tr>
            {weeks.map((week) => (
              <th key={week}>{week}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {weeks.map((week) => {
              const tasks = timeline[week];
              return (
                <td key={week}>
                  {tasks.length === 1 && tasks[0] === '-' ? (
                    <em>None</em>
                  ) : (
                    <ul className="no-bullets">
                      {tasks.map((task, idx) => (
                        <li key={idx}>{task}</li>
                      ))}
                    </ul>
                  )}
                </td>
              );
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Timeline;
