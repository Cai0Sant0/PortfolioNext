"use client";
import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { BsArrowRight } from "react-icons/bs";
import ParticlesHero from "./ParticleBackground";

const Hero = () => {
  return (
    <div className=" relative h-screen flex items-center justify-center text-white overflow-hidden flex-col">
      <ParticlesHero />

      <div className="relative z-10 flex flex-col items-center w-full">
        <Image
          src="/images/fotoPerfil.jpg"
          alt="HeroImage"
          width={150}
          height={150}
          className="rounded-full border-8 border-[#0c0c48aa]"
        />
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl mt-6 text-center font-bold tracking-wider">
          Criando Web Produtos, <br /> Inovações
          <span className="text-cyan-200"> e Experiências.</span>
        </h1>
        <h2
          className="mt-5 text-sm px-2 text-center sm:text-2xl font-medium flex items-center flex-col
        "
        >
          Olá! Meu nome é Caio - Um Apaixonado por
          <span className="text-cyan-200 font-bold">
            <Typewriter
              options={{
                strings: [
                  "Desenvolvimento Web",
                  "Tecnologia",
                  "Inovação",
                  "Programação",
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
                wrapperClassName: "pl-2",
              }}
            />
          </span>
        </h2>
        <button className="mt-6 px-10 py-4 bg-blue-500 hover:bg-blue-900 transition-all duration-300 cursor-pointer rounded-full text-lg font-medium">
          <span>Veja meu trabalho</span>
          <BsArrowRight className="w-5 h-5 ml-2 inline-block" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
