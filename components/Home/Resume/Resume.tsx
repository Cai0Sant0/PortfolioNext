import React from "react";
import ResumeCard from "./ResumeCard";
import { FaCodepen, FaGraduationCap, FaReact } from "react-icons/fa";
import { BsDatabase } from "react-icons/bs";
import { BiBadge } from "react-icons/bi";
import { CiHeadphones } from "react-icons/ci";
import { SiWebmoney } from "react-icons/si";
import { FaSailboat } from "react-icons/fa6";
import { RiGraduationCapLine } from "react-icons/ri";

const Resume = () => {
  return (
    <div className="pt-20 pb-16">
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/* WORK PART */}
        <div>
          <h1 className="text-3xl text-center sm:text-4xl font-bold text-white">
            Meus <span className="text-cyan-200">Trabalhos</span>
          </h1>
          <div className="mt-10">
            <ResumeCard
              Icon={CiHeadphones}
              role="Analista de Atendimento"
              desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ex maxime doloremque nihil quaerat consequatur porro numquam impedit, est minima! Quod rerum vitae libero laborum officiis."
            />
            <ResumeCard
              Icon={SiWebmoney}
              role="Auxiliar de cobrança"
              desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ex maxime doloremque nihil quaerat consequatur porro numquam impedit."
            />
            <ResumeCard
              Icon={BsDatabase}
              role="Auxiliar de TI"
              desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ex maxime doloremque nihil quaerat consequatur porro numquam impedit."
            />
          </div>
        </div>
        {/* Education */}
        <div>
          <h1 className="text-3xl text-center sm:text-4xl font-bold text-white">
            Meu <span className="text-cyan-200">Ensino</span>
          </h1>
          <div className="mt-8">
            <ResumeCard
              Icon={BiBadge}
              role="Prof.Camargo Aranha"
              desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ex maxime doloremque nihil quaerat consequatur porro numquam impedit."
              date="Jan 2022 - Dez 2024"
            />
            <ResumeCard
              Icon={RiGraduationCapLine}
              role="São Judas Tadeu"
              desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ex maxime doloremque nihil quaerat consequatur porro numquam impedit."
              date="Jan 2025 - Jun 2027"
            />
            <ResumeCard
              Icon={FaSailboat}
              role="Instituto Proa"
              desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ex maxime doloremque nihil quaerat consequatur porro numquam impedit."
              date="Jun 2024 - Dez 2024"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
