import React, { useEffect } from "react";
import WeatherApp from "../images/weather-app.jpg";
import ColorPickerApp from "../images/color-picker-app.jpg";
import ToDoApp from "../images/ToDo-app.png";
import GitHubBlack from "../images/github-mark.png";
import ComingSoon from "../images/coming-soon.png";
import ProjectsData from "../../projects.json";

export default function Projects() {
  const outputProjects = ProjectsData;

  const imageMap = {
    WeatherApp: WeatherApp,
    ColorPickerApp: ColorPickerApp,
    ToDoApp: ToDoApp,
  };

  useEffect(() => {
    console.log(outputProjects);
  }, []);
  return (
    <div className="sm:h-auto h-full flex flex-col items-center justify-center">
      <p className="text-[50px] text-red py-16">Projects</p>
      <div className="flex items-center justify-center flex-row flex-wrap  w-[100%]  ">
        {outputProjects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col border-0 rounded-3xl  shadow-lg w-auto h-[420px] mb-20 mx-5 bg-gray transition-all duration-500 ease-in-out transform hover:scale-105    "
          >
            <img
              src={imageMap[project.image]}
              alt="image"
              className="w-full h-[250px] p-[15px] shadow-lg bg-grayHover rounded-3xl cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                window.open(project.link, "_blank");
              }}
            />

            <div className="flex flex-row items-center justify-between px-5 content-center h-auto py-6 space-x-2	">
              <p className="text-[22px] font-bold">{project.name}</p>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  window.open(project.git, "_blank");
                }}
              >
                <img src={GitHubBlack} alt="GitHub" className="w-6 h-6 max-w-6 max-h-6" />
              </button>
            </div>
            <div className="flex flex-row items-center justify-between px-5 pb-6 font-bold max-w-md break-words text-brown tracking-wider w-full ">
              <p className="break-all">Technologies: {project.technologies}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
