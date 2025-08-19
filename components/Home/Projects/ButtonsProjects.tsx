import React from "react";
import { FaGithub } from "react-icons/fa6";
import { LuSquareArrowUpRight } from "react-icons/lu";

type Props = {
  linkGithub: string;
  linkSite: string;
};

const ButtonsProjects = ({ linkGithub, linkSite }: Props) => {
  return (
    <div className="flex justify-evenly items-center mt-4">
      <button
        className="border-2 border-white rounded-4xl text-white w-[45%] p-1 flex items-center justify-center hover:cursor-pointer hover:border-gray-600 hover:text-gray-600 transition-all duration-400"
        onClick={() => window.open(linkGithub, "_blank")}
      >
        <span>Github</span>
        <FaGithub className="w-5 h-5 ml-2 inline-block" />
      </button>
      <button
        className="border-2 border-white rounded-4xl text-white w-[45%] p-1 flex items-center justify-center hover:cursor-pointer hover:border-gray-600 hover:text-gray-600 transition-all duration-400"
        onClick={() => window.open(linkSite, "_blank")}
      >
        <span>Acessar</span>
        <LuSquareArrowUpRight className="w-5 h-5 ml-2 inline-block" />
      </button>
    </div>
  );
};

export default ButtonsProjects;
