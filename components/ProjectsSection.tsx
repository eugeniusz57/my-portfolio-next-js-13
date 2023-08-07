import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";
import { projectsArray } from "../data/projects";

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h2 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-16 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h2>

      <div className="flex flex-col space-y-28">
        {projectsArray.map(
          ({ id, link, image, name, description, github, role }) => {
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
                          height={1500}
                          className="rounded-xl shadow-xl hover:opacity-70"
                        />
                      </Link>
                    </div>
                    <div className="mt-8 md:w-1/2">
                      <h3 className="text-4xl font-bold mb-6">{name}</h3>
                      <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                        {description}
                      </p>
                      <p className="text-xl font-bold leading-7 mb-4 text-teal-500 dark:text-neutral-400">
                        Role: {role}
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
          }
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
