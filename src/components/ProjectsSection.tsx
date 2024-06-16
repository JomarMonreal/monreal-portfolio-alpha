import { Project, convertToProjectsArray} from "@/types/types";
import { ProjectsSectionCard } from "./ProjectsSectionCard";
import { FC, useEffect, useState } from "react";
import Popup from "./Popup";
import { ProjectDetailScreen } from "../popup_screens/ProjectDetailScreen";
import FloatingTitle from "./FloatingTitle";

interface ProjectsSectionProps{
  projects: Project[]
}

export const ProjectsSection:FC<ProjectsSectionProps> = (props) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false)
  const [currrentProject, setCurrrentProject] = useState<Project>(props.projects[0]);

  return (
    <section id="project_section">
      <FloatingTitle text="Projects" tag="h2" className="text-6xl" />
      <p>Explore a selection of my featured works and innovations, showcasing a diverse range of projects and creative solutions.</p>

      {props.projects.map((project, index) => (
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
        <ProjectDetailScreen type={currrentProject.type} title={currrentProject.title} description={currrentProject.description} imageUrl={currrentProject.imageUrl} projectUrl={currrentProject.projectUrl} skills={currrentProject.skills} role={currrentProject.role}/>
      </Popup>: null}
    </section>
  );
}

