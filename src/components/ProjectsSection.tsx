"use client"

import { Project, convertToProjectsArray} from "@/types/types";
import { ProjectsSectionCard } from "./ProjectsSectionCard";
import projectsJSON from "../../public/json/projects.json"
import { useState } from "react";

export function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>(convertToProjectsArray(projectsJSON))

  return (
    <div>
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <ProjectsSectionCard
          key={index}
          type={project.type}
          imagePath={project.imagePath}
          title={project.title}
          description={project.description}
          projectUrl={project.projectUrl}
        />
      ))}
    </div>
  );
}
