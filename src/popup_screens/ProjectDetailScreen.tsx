"use client";

import { ProjectType } from "@/types/types";
import styles from "./ProjectDetailScreen.module.css"
import { FC } from "react";
import { GoXCircle } from "react-icons/go";
import { iconSize, navIconSize } from "@/constants/iconConstants";

interface ProjectDetailScreenProps{
  type: ProjectType,
  title: string,
  description: string,
  imageUrl: string,
  projectUrl: string,
}

export const ProjectDetailScreen: FC<ProjectDetailScreenProps> = (props) => {
  return <div className={`${styles.project_detail_screen}`}> 
    <img className={styles.project_detail_screen_image} src={props.imageUrl} />
    <div className={`${styles.project_detail_screen_details}`}>
      <h1 className="text-3xl">{props.title}</h1>
      <p>{props.description}</p>
    </div>
    <div className={`flex w-full mt-3 justify-end`}>
      <a href={props.projectUrl}>
        <button>View Project Link</button>
      </a>
    </div>
    <div style={{height: "1rem", visibility: "hidden"}}>...</div>
  </div>;
}
