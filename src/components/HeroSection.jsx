// src/components/HeroSection.tsx
import video from "../assets/hero-bg.mp4";
import image from "../assets/hero-bg-fallback.jpeg";
import { MessageCircle } from "lucide-react";

const HeroSection = () => {
  const phone = "00351936099589"; 
  
  return (
    <section className="relative w-full overflow-hidden">
      <video className="absolute inset-0 aspect-3/2 md:aspect-video w-full object-cover" autoPlay loop muted playsInline > 
        <source src={video} type="video/mp4" /> 
        <img src={image} alt="" />
      </video>
      <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex h-full items-center justify-center aspect-16/9 object-cover text-[#f1efe7]">
          <div className="px-4 md:text-center w-full">
            <h1 className="text-2xl sm:text-6xl lg:text-9xl font-bold sm:mb-4 md:mb-0 text-shadow-lg">Elias Gardens</h1>
            <p className="text-xs sm:text-base lg:text-2xl uppercase font-medium">Dedicação que se nota em cada detalhe</p>
            <button className="mt-2 sm:mt-3 md:mt-5 rounded-full bg-[#323a2f] sm:bg-[#323a2f]/95 py-2 px-2 sm:px-4 w-fit hover:shadow-lg hover:bg-[#252c22] transform transition duration-200 hover:-translate-y-0.5">
            <a href={`https://wa.me/${phone}`} target="_blank" rel="noopener noreferrer" className='text-[#f1efe7] flex flex-row items-center justify-center gap-2' >
              <MessageCircle className='w-3 h-3 md:w-4 md:h-4'/>
              <span className='hidden sm:flex text-xs sm:text-base md:text-lg'>Pedir Orçamento</span>
            </a>
          </button>
        </div>
      </div>
    </section>);
  }

export default HeroSection;
