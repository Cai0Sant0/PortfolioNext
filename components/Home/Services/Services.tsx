import React from 'react'
import ServiceCards from './ServiceCards';

const Services = () => {
  return (
    <div className=" pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">colaborando com marcas <br /> e agências para criar <br />resultados impactantes</h1>
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-20 items-center">
        <ServiceCards icon="/images/s1.png" name="UI e Ux" description="Desenvolvendo interfaces intuitivas, eficientes e agradáveis para se usar." />
        <ServiceCards icon="/images/s2.png" name="Web e Mobile" description="Desenvolvendo interfaces intuitivas, eficientes e agradáveis para se usar." />
        <ServiceCards icon="/images/s3.png" name="Design e Criatividade" description="Desenvolvendo interfaces intuitivas, eficientes e agradáveis para se usar." />
        <ServiceCards icon="/images/s4.png" name="Desenvolvimento" description="Desenvolvendo interfaces intuitivas, eficientes e agradáveis para se usar." />
      </div>
    </div>
  );
}

export default Services;