import React from "react";
import { useNavigate } from "react-router-dom";
import GitHub from "../images/github-beige.png";
import { GoProjectSymlink } from "react-icons/go";
import { FaHome } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";

export default function NavbarMobile() {
  const navigate = useNavigate();

  return (
    <nav className="bg-midnight w-full py-4 shadow-2xl border-b-[1px] border-beige">
      <div className="flex items-center justify-between w-full max-w-screen-xl mx-auto px-4">
        <button onClick={() => navigate("/")}>
          <p className="text-beige font-bold sm:text-3xl text-base ">
            Portfolio
          </p>
        </button>

        <div className="flex sm:space-x-8 space-x-6 sm:text-xl text-sm text-beige	">
          <button
            className="hover:border-b-4 border-red"
            onClick={() => navigate("/")}
          >
            <FaHome size = {20} />
          </button>
          <button
            className="hover:border-b-4 border-red"
            onClick={() => navigate("/projects")}
          >
            <GoProjectSymlink size = {20}  />
          </button>
          <button
            className="hover:border-b-4 border-red"
            onClick={() => navigate("/contacts")}
          >
            <MdContactMail size = {20}  />
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
