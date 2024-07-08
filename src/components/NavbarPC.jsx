import React from "react";
import { useNavigate } from "react-router-dom";
import GitHub from "../images/github-beige.png";

export default function NavbarPC() {
  const navigate = useNavigate();

  return (
    <nav className="bg-midnight w-full py-4 shadow-2xl border-b-[1px] border-beige">
      <div className="flex items-center justify-between w-full max-w-screen-xl mx-auto px-4">
        <button onClick={() => navigate("/")}>
          <p className="text-beige font-bold sm:text-3xl text-base ">Portfolio</p>
        </button>

        <div className="flex sm:space-x-8 space-x-6 sm:text-xl text-sm	">
          <button
            className="hover:border-b-4 border-red"
            onClick={() => navigate("/")}
          >
            <p className="text-beige">Home Page</p>
          </button>
          <button
            className="hover:border-b-4 border-red"
            onClick={() => navigate("/projects")}
          >
            <p className="text-beige">Projects</p>
          </button>
          <button
            className="hover:border-b-4 border-red"
            onClick={() => navigate("/contacts")}
          >
            <p className="text-beige">Contacts</p>
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              window.open("https://github.com/amadeus211", "_blank");
            }}
          >
            <img
              src={GitHub}
              alt="GitHub"
              className="w-6 h-6 hover:w-7 hover:h-7 transition-all duration-150 ease-in-out"
            />
          </button>
        </div>
      </div>
    </nav>
  );
}