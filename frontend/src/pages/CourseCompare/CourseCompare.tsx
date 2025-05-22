import CourseInfo from '../CourseInfo/CourseInfo.tsx';
import './CourseCompare.css';
import { useEffect, useRef } from "react";

function CourseCompare() {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function updateHeight() {
      if (backgroundRef.current) {
        backgroundRef.current.style.setProperty(
          "--bg-height",
          `${document.documentElement.scrollHeight}px`
        );
      }
    }

    window.addEventListener("resize", updateHeight);
    window.addEventListener("load", updateHeight);
    updateHeight();

    return () => {
      window.removeEventListener("resize", updateHeight);
      window.removeEventListener("load", updateHeight);
    };
  }, []);

  return (
    <div className="background" ref={backgroundRef}>
      <div className="courses-container">
        <div><CourseInfo /></div>
        <div><CourseInfo /></div>
      </div>
    </div>
  );
}

export default CourseCompare;