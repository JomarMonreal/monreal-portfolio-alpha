import { FC } from "react";
import styles from "./ProjectsSectionCard.module.css";
import { ProjectType } from "../types/types";

interface ProjectSectionCardProps{
  type: ProjectType,
  imagePath: string,
  title: string,
  description: string,
  projectUrl: string,
  onViewClick: ()=>void
}

export const ProjectsSectionCard:FC<ProjectSectionCardProps> = (props) => {
  return <div className={styles.projects_section_card} style={{ alignItems: "center" }}>
    <img className={styles.projects_section_image} src={props.imagePath} />
    <div className="padded flexed" style={{ flexDirection: "column", justifyContent:"center", height: "100%" }}>
      <h3 style={{ margin: 0 }}>{props.title}</h3>
      <p className={styles.projects_section_description}>{props.description}</p>
      <button style={{ width: "auto" }} onClick={props.onViewClick}>View more details</button>
    </div>
  </div>;
}
