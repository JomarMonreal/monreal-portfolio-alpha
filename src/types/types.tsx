export type ProjectType = "website" | "mobile";
export type Project = {
    type: ProjectType,
    imagePath: string,
    title: string,
    description: string,
    projectUrl: string,
  }
  
const convertToProject = (data: any): Project | null => {
    const projectTypes: ProjectType[] = ["website", "mobile"];
    if (projectTypes.includes(data.type)) {
        return {
            type: data.type as ProjectType,
            imagePath: data.imagePath,
            title: data.title,
            description: data.description,
            projectUrl: data.projectUrl
        };
    }
    return null;
};

export const convertToProjectsArray = (jsonArray: any[]): Project[] => {
    return jsonArray.map(item => convertToProject(item)).filter(item => item !== null) as Project[];
};