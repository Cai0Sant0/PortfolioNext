import React from "react";
import ResumeCard from "./ResumeCard";
import { FaCodepen, FaReact } from "react-icons/fa";
import { BsDatabase } from "react-icons/bs";
import { BiBadge } from "react-icons/bi";

const Resume = () => {
    return <div className="pt-20 pb-16">
        <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">
            {/* WORK PART */}
            <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-white">Minha experiência de <span className="text-cyan-200">Trabalho</span></h1>
                <div className="mt-10">
                    <ResumeCard Icon={FaCodepen} role="Full-Stack Developer" desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ex maxime doloremque nihil quaerat consequatur porro numquam impedit, est minima! Quod rerum vitae libero laborum officiis." />
                    <ResumeCard Icon={FaReact} role="Front-end" desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ex maxime doloremque nihil quaerat consequatur porro numquam impedit." />
                    <ResumeCard Icon={BsDatabase} role="Back-end" desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ex maxime doloremque nihil quaerat consequatur porro numquam impedit." />
                </div>
            </div>
            {/* Education */}
            <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-white">Minha <span className="text-cyan-200">Formação</span>
                </h1>
                <ResumeCard Icon={BiBadge} role="Prof. Camargo Aranha" desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ex maxime doloremque nihil quaerat consequatur porro numquam impedit, est minima! Quod rerum vitae libero laborum officiis." />
                <ResumeCard Icon={FaReact} role="São Judas Tadeu" desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ex maxime doloremque nihil quaerat consequatur porro numquam impedit." />
                <ResumeCard Icon={BsDatabase} role="Instituto Proa" desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ex maxime doloremque nihil quaerat consequatur porro numquam impedit." />
            </div>
        </div>
    </div>
}

export default Resume;