import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    id: 1,
    name: "Phonebook",
    description: "Searchable phone book..",
    image: "/Phonebook.png",
    github: "https://github.com/eugeniusz57/goit-react-hw-08-phonebook",
    link: "https://eugeniusz57.github.io/goit-react-hw-08-phonebook/contacts",
  },
  {
    id: 2,
    name: "So Yummy",
    description: "Website with regulations from all over the world.",
    image: "/SoYummy.png",
    github: "https://github.com/AlexTanetsDev/yummy-team4-react-project",
    link: "https://team-team-yummy.netlify.app/",
  },
  {
    id: 3,
    name: "Filmoteka",
    description: "Application for choosing a movie.",
    image: "/Filmoteka.png",
    github: "https://github.com/Reqvite/Filmoteka",
    link: "https://reqvite.github.io/Filmoteka/",
  },
  {
    id: 4,
    name: "Web studio",
    description: "A website with a responsive layout. Role: Developer",
    image: "/Webstudio.png",
    github: "https://github.com/eugeniusz57/goit-markup-hw-08",
    link: "https://eugeniusz57.github.io/goit-markup-hw-08/",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h2 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-16 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h2>

      <div className="flex flex-col space-y-28">
        {projects.map(({ id, link, image, name, description, github }) => {
          return (
            <ul key={id}>
              <SlideUp offset="-300px 0px -300px 0px">
                <li className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={link} target="_blank">
                      <Image
                        src={image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h3 className="text-4xl font-bold mb-6">{name}</h3>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </li>
              </SlideUp>
            </ul>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
