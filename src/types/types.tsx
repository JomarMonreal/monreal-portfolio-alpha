export type ProjectType = "website" | "mobile" | "game";
export type Project = {
    type: ProjectType,
    imagePath: string,
    title: string,
    description: string,
    projectUrl: string,
    imageUrl: string,
  }

const convertToProject = (data: any): Project | null => {
    const projectTypes: ProjectType[] = ["website", "mobile", "game"];
    if (projectTypes.includes(data.type)) {
        return {
            type: data.type as ProjectType,
            imagePath: data.imagePath,
            title: data.title,
            description: data.description,
            projectUrl: data.projectUrl,
            imageUrl: data.imageUrl
        };
    }
    return null;
};

export const convertToProjectsArray = (jsonArray: any[]): Project[] => {
    return jsonArray.map(item => convertToProject(item)).filter(item => item !== null) as Project[];
};