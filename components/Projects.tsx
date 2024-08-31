"use client";
import { useContext } from "react";
import UserContext from "@/context/UserDetailsContext";
import { FaGithub } from "react-icons/fa";
import { Divider } from "@nextui-org/divider";

const Projects = () => {
  const user: any = useContext(UserContext);
  const redirectToURL = (url: string) => {
    window.open(url, "_blank");
  };
  return (
    <main>
      <div className="">
        {user.projects.map((project: any, index: number) => (
          <div
            key={index}
            className="mb-6 sm:mb-8 p-4 sm:p-6 bg-gray-900 border border-gray-800 rounded-lg shadow-sm hover:shadow-none transition-shadow shadow-slate-600 duration-100"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-white">
              {project.name}
            </h3>
            <Divider className="bg-slate-800 my-3" />
            <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-6 mt-4">
              <div className="mt-4 md:mt-0 flex flex-col justify-center flex-grow">
                <div className="flex flex-wrap items-center mb-2 space-x-4">
                  {project.link && (
                    <a
                      onClick={() => redirectToURL(project.link)}
                      className="text-gray-300 hover:underline text-sm"
                    >
                      {project.link}
                    </a>
                  )}
                  {project.git && (
                    <a
                      onClick={() => redirectToURL(project.git)}
                      className="text-gray-300 cursor-pointer flex items-center hover:scale-110 text-2xl"
                    >
                      <FaGithub />
                    </a>
                  )}
                </div>
                <p className="text-whitemt-2 text-sm sm:text-base">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech: string, index: number) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs sm:text-sm font-medium bg-blue-100 text-blue-800 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {project.image && (
                <div className="flex-shrink-0">
                  <img
                    src={project.image}
                    alt="projectImage"
                    className="w-full md:w-64 h-auto rounded-lg shadow-md border-gray-800 border"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Projects;
