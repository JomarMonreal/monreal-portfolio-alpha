import { FC } from "react";
import { ProjectType } from "../types/types";
import Image from "next/image";
import FloatingTitle from "./FloatingTitle";

interface ProjectSectionCardProps{
  type: ProjectType,
  imagePath: string,
  title: string,
  description: string,
  projectUrl: string,
  onViewClick: ()=>void
}

export const ProjectsSectionCard:FC<ProjectSectionCardProps> = (props) => {
  return <div className="flex my-4 items-center flex-wrap" >
    <Image 
      src={props.imagePath} 
      width={300} 
      height={300} 
      alt={props.type}
      onClick={props.onViewClick}
      className="hover:scale-105 cursor-pointer mr-4"
    />
    <div className="flex-1">
      <FloatingTitle text={props.title} tag={"h3"} className={"text-4xl"}/>
      <p className="mb-3">{props.description}</p>
      <button onClick={props.onViewClick}>View more details</button>
    </div>
  </div>;
}
