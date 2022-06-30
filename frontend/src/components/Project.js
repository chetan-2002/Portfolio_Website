import React from "react";
import projects from "../projectData";

const Project = () => {
  return (
    <>
      <section className="my-16 px-5" id="projects">
        <header className="text-2xl  md:text-4xl font-bold pt-10">
          <h2>Projects</h2>
        </header>
        <div className="grid grid-cols-1 gap-4 md: grid md:grid-cols-2 md:gap-4 md:mb-3 my-12">
          {projects.map((project, index) => (
            <div className="flex flex-col overflow-auto  space-y-3 my-3 ">
              <image src={project.image}></image>
              <h3 className="uppercase font-bold text-lg">{project.title}</h3>
              <p>{project.description}</p>
              <div className="flex overflow-auto space-x-3 pb-2">
                {project.tools.map((disc, index) => (
                  <span
                    className="border border-gray-500 px-2 py-1 rounded-lg text-sm"
                    key={index}
                  >
                    {disc}
                  </span>
                ))}
              </div>
              <div className="w-auto flex space-x-5 relative">
                <a href={project.github} target="_blank" rel="noreferrer">
                  <img
                    src="./images/icons/github.svg"
                    alt="link to github page"
                    width="24px"
                    height="24px"
                  />
                </a>
                <a href={project.link} target="_blank" rel="noreferrer">
                  <img
                    src="./images/icons/external-link.svg"
                    alt="link to live website"
                    width="24px"
                    height="24px"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="mx-5">
        <a
          href="https://github.com/chetan-2002"
          target="_blank"
          rel="noreferrer"
          className="bg-gray block shadow-lg uppercase border border-gray-500 rounded-lg text-center my-12 p-2 max-w-xs m-auto"
        >
          <span>See more on Github</span>
        </a>
      </div>
    </>
  );
};

export default Project;
