"use client"

import { Project, convertToProjectsArray} from "@/types/types";
import { ProjectsSectionCard } from "./ProjectsSectionCard";
import projectsJSON from "../../public/json/projects.json"
import { useState } from "react";
import Popup from "./Popup";
import { ProjectDetailScreen } from "../popup_screens/ProjectDetailScreen";
import FloatingTitle from "./FloatingTitle";

export function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>(convertToProjectsArray(projectsJSON))
  const [isPopupVisible, setIsPopupVisible] = useState(false)
  const [currrentProject, setCurrrentProject] = useState<Project>(projects[0]);

  return (
    <div  id="project_section">
      <FloatingTitle text="Projects" tag="h2" className="text-6xl" />
      <p>Explore a selection of my featured works and innovations, showcasing a diverse range of projects and creative solutions.</p>

      {projects.map((project, index) => (
        <ProjectsSectionCard
          key={index}
          type={project.type}
          imagePath={project.imagePath}
          title={project.title}
          description={project.description.split(".")[0]}
          projectUrl={project.projectUrl} 
          onViewClick={()=>{setIsPopupVisible(true); setCurrrentProject(project)}}
        />
      ))}

      {isPopupVisible? <Popup onOutsideClick={()=>{setIsPopupVisible(false)}} borderRadius={"2rem"} width={"50vw"} height={"80vh"}>
        <ProjectDetailScreen type={currrentProject.type} title={currrentProject.title} description={currrentProject.description} imageUrl={currrentProject.imageUrl} projectUrl={currrentProject.projectUrl}/>
      </Popup>: null}
    </div>
  );
}

