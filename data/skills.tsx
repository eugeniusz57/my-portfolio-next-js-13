import { SiHtml5, SiNextdotjs, SiTailwindcss, SiExpress } from "react-icons/si";
import {
  BiLogoCss3,
  BiLogoTypescript,
  BiLogoReact,
  BiLogoGithub,
  BiGitBranch,
  BiLogoNodejs,
  BiLogoMongodb,
  BiLogoRedux,
} from "react-icons/bi";
import { BsFiletypeScss } from "react-icons/bs";
import { TbBrandJavascript, TbApi } from "react-icons/tb";
import { MdOutlineDesignServices } from "react-icons/md";
import { DiScrum } from "react-icons/di";

interface ISkills {
  id: number;
  skill: string;
  icon: JSX.Element;
}

export const skillsArray: ISkills[] = [
  { id: 1, skill: "HTML", icon: <SiHtml5 size={20} /> },
  { id: 2, skill: "CSS", icon: <BiLogoCss3 size={20} /> },
  { id: 3, skill: "SCSS", icon: <BsFiletypeScss size={20} /> },
  {
    id: 4,
    skill: "Responsive / Adaptive Design",
    icon: <MdOutlineDesignServices size={20} />,
  },
  { id: 5, skill: "JavaScript", icon: <TbBrandJavascript size={20} /> },
  { id: 6, skill: "REST API", icon: <TbApi size={20} /> },
  { id: 7, skill: "TypeScript", icon: <BiLogoTypescript size={20} /> },
  { id: 8, skill: "React", icon: <BiLogoReact size={20} /> },
  { id: 9, skill: "Next.js", icon: <SiNextdotjs size={20} /> },
  { id: 10, skill: "Tailwind CSS", icon: <SiTailwindcss size={20} /> },
  { id: 11, skill: "Git", icon: <BiGitBranch size={20} /> },
  { id: 12, skill: "GitHub", icon: <BiLogoGithub size={20} /> },
  { id: 13, skill: "Node.Js", icon: <BiLogoNodejs size={20} /> },
  { id: 14, skill: "Express", icon: <SiExpress size={20} /> },
  { id: 15, skill: "MongoDB", icon: <BiLogoMongodb size={20} /> },
  { id: 16, skill: "Scrum / Agile", icon: <DiScrum size={20} /> },
  { id: 17, skill: "Redux", icon: <BiLogoRedux size={20} /> },
];
