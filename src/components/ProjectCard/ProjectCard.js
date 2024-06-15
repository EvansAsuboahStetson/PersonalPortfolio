import { NavLink } from "react-router-dom";
import "./ProjectCard.css";
import React from "react";
import Modal from "../Modal/Modal";

const ProjectCard = (props) => {
    return (
        <div className="project-card">
            <img src={props.imgsrc} alt="image" />
            <h2 className="project-title">
                {props.title}
            </h2>
            <div className="pro-details">
                <p>{props.text}</p>
                <div className="pro-btn">
                    <Modal data={props} />
                    {props.second_button_title && 
                    <NavLink to={props.view} className="btn btns">
                        {props.second_button_title}
                        
                    </NavLink>}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
