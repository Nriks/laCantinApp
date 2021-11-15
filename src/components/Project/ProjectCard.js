import React from "react";
import "../App.css";
import projects from "../../projects.json";

const ProjectCard = () => {
  return (
    <li>
      <h3>HELOOOO</h3>
      <div className="discographie">
        {/* <img src={props.src} alt={props.title} /> */}
        <h3>Discographie Component fetched from local</h3>
        {projects &&
          projects.map(({ name, id }) => (
            <div key={id}>
              <strong>{name}</strong>

              <img src={projects.img} alt={projects.name} />
            </div>
          ))}
        {/* <p>{props.created}</p> */}

        <span />
      </div>
    </li>
  );
};

export default ProjectCard;
