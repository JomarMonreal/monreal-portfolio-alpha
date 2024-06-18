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
  skills: string[],
  role: string
}

export const ProjectDetailScreen: FC<ProjectDetailScreenProps> = (props) => {
  return <div className={`${styles.project_detail_screen}`}> 
    <img className={styles.project_detail_screen_image} src={props.imageUrl} />
  

    <div className={`w-full`}>
      <div className="flex my-4 w-full overflow-x-auto scrollbar-thin scrollbar-track-lime-100 scrollbar-thumb-lime-700">
        {props.skills.map((skill, index)=>{
          return (
            <div key={index} className="tag flex-nowrap whitespace-nowrap w-auto hover:bg-lime-600">{skill}</div>
          )
        })}
      </div>
      <h1 className="text-4xl font-semibold">{props.title}</h1>
      <h4 className="text-2xl"><span className="font-semibold"> Role:</span> {props.role}</h4>
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
