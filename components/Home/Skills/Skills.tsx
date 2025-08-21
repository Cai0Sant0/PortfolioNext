"use client";
import React from "react";
import { FaJava } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import Tilt from "react-parallax-tilt";

const skills = [
  {
    name: "Javascript",
    icon: <SiJavascript />,
    percent: 89,
  },
  {
    name: "Typescript",
    icon: <SiTypescript />,
    percent: 70,
  },
  {
    name: "React.Js",
    icon: <SiReact />,
    percent: 80,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    percent: 80,
  },
  {
    name: "Java",
    icon: <FaJava />,
    percent: 70,
  },
  {
    name: "MySQL",
    icon: <GrMysql />,
    percent: 70,
  },
];

const Skills = () => {
  return (
    <div>
      <h1 id="Habilidades" className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        Minhas <span className="text-cyan-300">Habilidades</span>
      </h1>
      <div className="flex flex-wrap justify-center gap-6 mt-16">
        {skills.map((skill, i) => {
          return (
            <Tilt key={skill.name} scale={1.5} transitionSpeed={400}>
              <div
                data-aos="flip-right"
                data-aos-delay={i*100}
                className="bg-[#14134145] text-center w-40 h-48 rounded-3xl flex flex-col items-center justify-center shadow-lg transition hover:scale-105"
              >
                <div className="text-5xl mb-4 text-gray-300">{skill.icon}</div>
                <p className="text-2xl font-semibold text-gray-300">
                  {skill.percent}%
                </p>
                <p className="text-purple-400 mt-1">{skill.name}</p>
              </div>
            </Tilt>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
