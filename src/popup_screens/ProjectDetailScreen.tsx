"use client";

import { ProjectType } from "@/types/types";
import styles from "./ProjectDetailScreen.module.css"
import { FC } from "react";

interface ProjectDetailScreenProps{
  type: ProjectType,
  title: string,
  description: string,
  imageUrl: string,
  projectUrl: string,
}

export const ProjectDetailScreen: FC<ProjectDetailScreenProps> = (props) => {
  return <div className={`filled padded ${styles.project_detail_screen}`}> 
    <div style={{height: "1rem", visibility: "hidden"}}>...</div>
    <img className={styles.project_detail_screen_image} src={props.imageUrl} />
    <div className={`filled ${styles.project_detail_screen_details}`}>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
    <div className={`filled flexed`} style={{justifyContent: "flex-end"}}>
      <a href={props.projectUrl}>
        <button>View Project Link</button>
      </a>
    </div>
    <div style={{height: "1rem", visibility: "hidden"}}>...</div>
  </div>;
}
