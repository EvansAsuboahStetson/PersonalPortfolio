import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";

const Work = ({ WorkData, title }) => {
  const groupedByDate = WorkData.reduce((acc, experience) => {
    const date = experience.date ? new Date(experience.date) : null;
    const year = date ? date.getFullYear() : "Unknown"; // Group under "Unknown" if no date is present
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(experience);
    return acc;
  }, {});

  return (
    <div className="work-container">
      <h1 className="project-heading">{title}</h1>
      {Object.keys(groupedByDate)
        .filter((year) => groupedByDate[year].length > 0) // Only show years with data
        .sort((a, b) => (a === "Unknown" ? 1 : b === "Unknown" ? -1 : b - a)) // Sort with "Unknown" last
        .map((year) => (
          <div key={year} className="year-group">
            {year !== "Unknown" && <h2 className="year-heading">{year}</h2>} {/* Hide the heading if year is "Unknown" */}
            <div className="project-container">
              {groupedByDate[year].map((val, index) => (
                <ProjectCard
                  key={index}
                  imgsrc={val.imgsrc}
                  title={val.title}
                  text={val.text}
                  extraText={val?.extraText}
                  second_button_title={val.second_button_title}
                  videoUrl={val.videoUrl}
                />
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Work;
