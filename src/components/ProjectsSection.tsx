import { ProjectsSectionCard } from "./ProjectsSectionCard";

export function ProjectsSection() {
  return <div>
    <h2>Projects</h2>

    <ProjectsSectionCard 
      type={"website"} 
      imagePath={"/images/website2.png"} 
      title={"IChooSe"} 
      description={"IChooSe is an online room reservation system for the Institute of Computer Science at the University of the Philippines Los Baños. It simplifies the process of reserving rooms within the institute."} 
      projectUrl={"https://alpha-ichoose.vercel.app/"}
    />

    <ProjectsSectionCard 
      type={"website"} 
      imagePath={"/images/website2.png"} 
      title={"Farm-to-Table"} 
      description={"IChooSe is an online room reservation system for the Institute of Computer Science at the University of the Philippines Los Baños. It simplifies the process of reserving rooms within the institute."} 
      projectUrl={"https://alpha-ichoose.vercel.app/"}
    />

    <ProjectsSectionCard 
      type={"website"} 
      imagePath={"/images/mobile.png"} 
      title={"Elbi GenerosiTree"} 
      description={"IChooSe is an online room reservation system for the Institute of Computer Science at the University of the Philippines Los Baños. It simplifies the process of reserving rooms within the institute."} 
      projectUrl={"https://alpha-ichoose.vercel.app/"}
    />

  </div>;
}

