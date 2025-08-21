"use client";
import React from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="pt-16 pb-16" id="Contato">
      <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Text content */}
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200">
            Agende uma conversa comigo!
          </h1>
          <p className="text-gray-400 mt-6 text-base sm:text-lg">
            Agende uma reunião ou mande uma mensagem para saber como posso te
            ajudar!
          </p>
          <div className="mt-7">
            <div className="flex items-center space-x-3 mb-4">
              <BiPhone className="w-8 h-8 text-cyan-300" />
              <p className="text-sm font-bold text-gray-400">
                +55 11 93227-6446
              </p>
            </div>
            <div className="flex items-center space-x-3 mb-4">
              <BiEnvelope className="w-8 h-8 text-cyan-300" />
              <p className="text-sm font-bold text-gray-400">
                caiosantobarbosa104@outlook.com
              </p>
            </div>
            <div className="flex items-center space-x-3 mb-4">
              <BiMap className="w-8 h-8 text-cyan-300" />
              <p className="text-sm font-bold text-gray-400">
                São Paulo, Brasil
              </p>
            </div>
          </div>
          {/* icones redes sociais */}
          <div className="flex items-center mt-8 space-x-3">
            <div
              className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer flex-col hover:bg-[#e1306c] transition-all duration-300"
              onClick={() => {
                window.open("https://www.instagram.com/cai0.sant0/"), "_blank";
              }}
            >
              <FaInstagram className="text-white w-6 h-6" />
            </div>
            <div
              className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer flex-col hover:bg-[#171515] transition-all duration-300"
              onClick={() => {
                window.open("https://github.com/Cai0Sant0"), "_blank";
              }}
            >
              <FaGithub className="text-white w-6 h-6" />
            </div>
            <div
              className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer flex-col hover:bg-[#0e76a8] transition-all duration-300"
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/caio-barbosa-104santo/"
                ),
                  "_blank";
              }}
            >
              <FaLinkedin className="text-white w-6 h-6" />
            </div>
          </div>
        </div>
        {/* form */}
        <div
          className="md:p-10 p-5 bg-[#131332] rounded-lg"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <input
            type="text"
            placeholder="Nome"
            className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/50"
          />
          <input
            type="email"
            placeholder="Endereço de e-mail"
            className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md  w-full placeholder:text-white/50"
          />
          <input
            type="text"
            placeholder="Número do celular"
            className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/50"
          />
          <textarea
            placeholder="Sua Mensagem"
            className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/50 h-[10rem]"
          ></textarea>
          <button className="mt-8 px-12 py-4 bg-blue-950 hover:bg-blue-900 transition-all duration-300 cursor-pointer text-white rounded-full">
            Enviar mensagem
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
