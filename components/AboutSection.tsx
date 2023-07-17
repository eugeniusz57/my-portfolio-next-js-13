"use client";
import React from "react";
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

const skills = [
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

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-32">
        <h2 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-16 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h2>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h3 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h3>
            <p>
              Hi, my name is Yevhenii and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> frontend developer
              based in Poznan, Poland.
            </p>
            <br />
            <p>
              I graduated from Higher school of socio-economic (Poland, Środa
              WLKP), in 2022 with a BS in Computer Engineering
            </p>
            <br />
            <p>
              I am currently looking for a permanent position in a company where
              I can join a friendly and professional team and develop my skills
              in HTML, CSS, Tailwind, JavaScript, React, Next, Redux, and
              Node.js to help the team achieve its goals.
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-teal-500">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do, I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities. 🙂
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h3 className="text-2xl font-bold mb-6">My Skills</h3>
            <ul className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map(({ id, skill, icon }) => {
                return (
                  <li
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold flex justify-center align-middle"
                    key={id}
                  >
                    {icon}
                    <p className="mx-2">{skill}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
