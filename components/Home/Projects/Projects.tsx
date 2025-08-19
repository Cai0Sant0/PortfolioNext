"use client";
import Image from 'next/image'
import React from 'react'
import ButtonsProjects from './ButtonsProjects'


const Projects = () => {
    return (
        <div className="pt-16 pb-16">
            <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
                Uma pequena seleção de <span className="text-cyan-300">projetos</span> recentes
            </h1>
            <div className="w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-19 mt-16">

                {/* Primeiro projeto */}
                <div>
                    <Image src={"/images/projeto01.png"} alt="imagem projeto github" height={650} width={800} className="rounded-lg" />

                    <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">Projeto Casa de Couro Romeu</h1>

                    <h1 className="pt-2 font-medium text-white/80">React, Tailwind CSS</h1>
                    <ButtonsProjects linkGithub= "https://github.com/Cai0Sant0/ProjetoPessoal" linkSite= "projeto-pessoal-caio-barbosa.vercel.app" />
                </div>

                {/* Segundo projeto */}

                <div>
                    <Image src={"/images/projeto02.png"} alt="imagem projeto github" height={650} width={800} className="rounded-lg" />

                    <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">Projeto Hamburgueria Caioba</h1>

                    <h1 className="pt-2 font-medium text-white/80">React, Tailwind CSS, Typescript</h1>
                    <ButtonsProjects linkGithub= "https://github.com/Cai0Sant0/Projeto-Hamburgueria" linkSite= "https://projeto-hamburgueria-ebon.vercel.app/" />
                </div>

                {/* Terceiro projeto */}

                <div>
                    <Image src={"/images/projeto03.png"} alt="imagem projeto github" height={650} width={800} className="rounded-lg" />

                    <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">Projeto Mapa de Carreira</h1>

                    <h1 className="pt-2 font-medium text-white/80">HTML5, CSS3, Javascript, Bootstrap</h1>
                   <ButtonsProjects linkGithub= "https://github.com/Cai0Sant0/MapaDeCarreira" linkSite= "https://cai0sant0.github.io/MapaDeCarreira/" />
                </div>

                {/* Quarto projeto */}

                <div>
                    <Image src={"/images/projeto04.png"} alt="imagem projeto github" height={650} width={800} className="rounded-lg" />

                    <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">Projeto Casa de Couro Romeu</h1>

                    <h1 className="pt-2 font-medium text-white/80">React, Javascript, IA</h1>
                    <ButtonsProjects linkGithub ="https://github.com/Te-Vejo/Front-End-TeVejo" linkSite= "https://tevejo.com.br/" />
                </div>
            </div>
        </div>
    )
}

export default Projects