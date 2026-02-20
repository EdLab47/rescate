import React from 'react';
import { Cpu, BookOpen } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 text-white overflow-hidden rounded-b-[3rem] shadow-xl">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-32 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-white/30">
          <Cpu className="w-5 h-5 text-yellow-300" />
          <span className="text-sm md:text-base font-semibold tracking-wide uppercase">Actividad Escolar - Técnica 47</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
          INFORME TÉCNICO: <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-400">
            EL RESCATE DE LA TÉCNICA 47
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-blue-100 font-light max-w-3xl mx-auto mb-10">
          Manual de Procedimiento de Alta Precisión
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a href="#rules" className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-full shadow-lg transition transform hover:scale-105 flex items-center gap-2">
            <BookOpen className="w-5 h-5" />
            Comenzar Instrucciones
          </a>
        </div>
      </div>
    </div>
  );
};