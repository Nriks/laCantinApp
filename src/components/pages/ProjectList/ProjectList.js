import React from "react";
import ProjectCard from "../../Project/ProjectCard";
import projects from "../../../projects.json";

const ProjectList = props => {
  return (
    <ul>
      {props.projects.map(item => {
        return (
          // <Discographie
          //   id={item.id}
          //   name={item.name}
          //   description={item.created}
          //   src={item.picture}
          // />
          <span>DiscographielIST</span>
        );
      })}
    </ul>
  );
};

export default ProjectList;
