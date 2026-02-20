import React from 'react';
import { Section } from './Section';
import { SlideContent } from '../types';

const slides: SlideContent[] = [
  { id: 1, title: "Diapositiva 1", content: "Carátula. Escuela Secundaria Técnica No. 47, Materia: Electrónica, Comunicaciones y Control, Nombre, Grado, Grupo y Fecha." },
  { id: 2, title: "Diapositiva 2", content: "¿A qué hora exacta comenzó el fallo masivo y por qué se dice que se detuvo el \"corazón\" de la metrópoli?" },
  { id: 3, title: "Diapositiva 3", content: "Si no hay internet o fibra óptica, ¿qué tecnología proponen usar los alumnos y por qué funciona en esta situación?" },
  { id: 4, title: "Diapositiva 4", content: "¿En qué mesa trabajan los alumnos y por qué deciden que necesitan construir un oscilador de Código Morse?" },
  { id: 5, title: "Diapositiva 5", content: "¿Qué componentes usa Ricardo y por qué los describe como un \"tanque de gasolina\" para el sistema?" },
  { id: 6, title: "Diapositiva 6", content: "¿Qué componente instala Sara y por qué es vital conectar correctamente su emisor, base y colector?" },
  { id: 7, title: "Diapositiva 7", content: "¿Qué componente se quemó en el \"Fallo crítico\" y por qué eso impedía que el sistema funcionara?" },
  { id: 8, title: "Diapositiva 8", content: "¿Por qué un LED puede utilizarse como sustituto de un diodo común para dirigir el tráfico de energía?" },
  { id: 9, title: "Diapositiva 9", content: "Después de usar el cautín, ¿por qué es importante que el multímetro marque 9 voltios estables?" },
  { id: 10, title: "Diapositiva 10", content: "¿Cuál es el mensaje enviado desde la azotea y por qué la escuela se convirtió en un \"faro\" para el barrio?" },
  { id: 11, title: "Diapositiva 11", content: "¿Qué objeto guarda Miguel en su bolsillo y por qué el conocimiento es el \"superpoder real\"?" },
];

export const SlideGuide: React.FC = () => {
  return (
    <Section id="slides" title="Contenido Obligatorio" subtitle="Debes crear 11 diapositivas respondiendo a los siguientes puntos.">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {slides.map((slide) => (
          <div key={slide.id} className="slide-card bg-white p-6 rounded-xl shadow-md border border-slate-200 flex flex-col h-full">
            <div className="flex items-center gap-3 mb-4">
               <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-lg">
                 {slide.id}
               </div>
               <h4 className="font-bold text-slate-800 text-lg">Diapositiva {slide.id}</h4>
            </div>
            <p className="text-slate-600 flex-grow leading-relaxed">
              {slide.content}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};