import React from "react";
import ResumeCard from "./ResumeCard";
import { BsDatabase } from "react-icons/bs";
import { BiBadge } from "react-icons/bi";
import { CiHeadphones } from "react-icons/ci";
import { SiWebmoney } from "react-icons/si";
import { FaSailboat } from "react-icons/fa6";
import { RiGraduationCapLine } from "react-icons/ri";

const Resume = () => {
  return (
    <div className="pt-20 pb-16" id="Resumo">
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/* WORK PART */}
        <div>
          <h1 className="text-3xl text-center sm:text-4xl font-bold text-white">
            Meus <span className="text-cyan-200">Trabalhos</span>
          </h1>
          <div className="mt-10" data-aos = "zoom-in" data-aos-anchor-placement = "top-ceneter">
            <ResumeCard
              Icon={CiHeadphones}
              role="Analista de Atendimento"
              desc="Experiências em atender as necessidades dos clientes na plataforma PayPal."
            />
            <ResumeCard
              Icon={SiWebmoney}
              role="Auxiliar de cobrança"
              desc="Aprendi a lidar com os correios, demandas de logística reversa e criar relatórios em excel para facilitar a administração dos prazos."
            />
            <ResumeCard
              Icon={BsDatabase}
              role="Auxiliar de TI"
              desc="Desenvolvi experiêncais relevantes na área da tecnologia como análise de dados, gerenciamento de Banco de Dados, SQL e implementação de plataformas ERP."
            />
          </div>
        </div>
        {/* Education */}
        <div>
          <h1 className="text-3xl text-center sm:text-4xl font-bold text-white">
            Meu <span className="text-cyan-200">Ensino</span>
          </h1>
          <div className="mt-8"  data-aos = "zoom-out" data-aos-delay = "300">
            <ResumeCard
              Icon={BiBadge}
              role="Prof.Camargo Aranha"
              desc="Me formei no ensino médio integrado ao técnico do Desenvolvimento de Sistemas, obtive diversos conhecimentos na área da tecnologia por meio desse curso técnico."
              date="Jan 2022 - Dez 2024"
            />
            <ResumeCard
              Icon={RiGraduationCapLine}
              role="São Judas Tadeu"
              desc="Atualmente estudo para me formar no ensino superior na área de Análise e Desenvolvimento de Sistemas."
              date="Jan 2025 - Jun 2027"
            />
            <ResumeCard
              Icon={FaSailboat}
              role="Instituto Proa"
              desc="Curso de aprendizagem voltado a área da programação, foram 6 meses de intensos aprendizados sobre Java, MySQL, javascript e React."
              date="Jun 2024 - Dez 2024"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
