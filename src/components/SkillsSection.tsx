import { FaJava, FaPython, FaReact } from "react-icons/fa";
import { SiFlutter, SiNextdotjs } from "react-icons/si";
import { skillsIconSize } from "@/constants/iconConstants";
import FloatingTitle from "./FloatingTitle";

export function SkillsSection() {
  const skills = [
    {
      icon: <FaReact size={skillsIconSize} />,
      name: 'MERN Stack',
      description: 'Full-stack development with MongoDB, Express.js, React, and Node.js.'
    },
    {
      icon: <SiNextdotjs size={skillsIconSize} />,
      name: 'Next.js',
      description: 'High-performance and scalable web application development with Typescript.'
    },
    {
      icon: <SiFlutter size={skillsIconSize} />,
      name: 'Flutter',
      description: 'Cross-platform mobile applications for iOS and Android.'
    },
    {
      icon: <FaJava size={skillsIconSize} />,
      name: 'Java',
      description: 'Efficient and robust applications, especially for game development.'
    },
    {
      icon: <FaPython size={skillsIconSize} />,
      name: 'Python',
      description: 'Data analysis and statistics.'
    }
  ];

  return (
    <div className="my-3">
      <FloatingTitle text="Skills" tag="h2" className="text-6xl" />
      
      <p>
        With this comprehensive skill set, I am well-equipped to tackle diverse projects and deliver high-quality solutions that meet client needs and exceed expectations.
      </p>

      <ul className="ml-5">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center">
            <div className="animate-float">
              {skill.icon} 
            </div>
            <div className="p-4">
              <strong>{skill.name}:</strong> {skill.description}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}