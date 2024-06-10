import { FC } from "react";
import styles from "./ProjectsSection.module.css";

type ProjectType = "website" | "mobile"

interface ProjectSectionCardProps{
  type: ProjectType,
  imagePath: string,
  title: string,
  description: string,
  projectUrl: string,
}

export const ProjectsSectionCard:FC<ProjectSectionCardProps> = (props) => {
  return <div className={styles.projects_section_card} style={{ alignItems: "center" }}>
    <img className={styles.projects_section_image} src={props.imagePath} />
    <div className="padded flexed" style={{ flexDirection: "column", height: "100%" }}>
      <h3 style={{ margin: 0 }}>{props.title}</h3>
      <p className={styles.projects_section_description}>{props.description}</p>
      <button style={{ width: "auto" }}>View more details</button>
    </div>
  </div>;
}
