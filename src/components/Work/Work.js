import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";

const Work = ({WorkData, title}) => {
  return (
    <div className="work-container">
      <h1 className="project-heading">{title}</h1>
      <div className="project-container">
        {WorkData.map((val, index) => {
            return (
                <ProjectCard
                key={index}
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
                view={val.view}
                extraText={val.extraText}
                second_button_title={val.second_button_title}
                />
            );
        })}
      </div>
    </div>
  );
};

export default Work;
