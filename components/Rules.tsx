import React from 'react';
import { AlertTriangle, Edit3, Layout, Type, Sparkles } from 'lucide-react';
import { Section } from './Section';
import { Rule } from '../types';

const rules: Rule[] = [
  {
    title: "PARÁFRASIS OBLIGATORIA",
    description: "Tu respuesta debe ser escrita con tus propias palabras. No copies el texto del PDF; si es idéntico, el trabajo no tendrá validez.",
    iconType: 'alert'
  },
  {
    title: "¿Qué es paráfrasis?",
    description: "Es leer, entender y escribir lo que comprendiste sin copiarlo igual.",
    iconType: 'edit'
  },
  {
    title: "DISEÑO PROFESIONAL",
    description: "Fondo blanco, sin adornos ni elementos decorativos.",
    iconType: 'layout'
  },
  {
    title: "FORMATO OBLIGATORIO",
    description: "Utiliza exclusivamente el tipo de letra Arial y color de fuente Negro para todo el texto.",
    iconType: 'info'
  },
  {
    title: "COHERENCIA Y LIMPIEZA",
    description: "La carátula debe estar perfectamente organizada y alineada.",
    iconType: 'check'
  }
];

const getIcon = (type: string) => {
  switch (type) {
    case 'alert': return <AlertTriangle className="w-8 h-8 text-amber-500" />;
    case 'edit': return <Edit3 className="w-8 h-8 text-blue-500" />;
    case 'layout': return <Layout className="w-8 h-8 text-indigo-500" />;
    case 'info': return <Type className="w-8 h-8 text-slate-700" />;
    case 'check': return <Sparkles className="w-8 h-8 text-emerald-500" />;
    default: return <Sparkles className="w-8 h-8 text-blue-500" />;
  }
};

export const Rules: React.FC = () => {
  return (
    <Section id="rules" title="1. Reglas de Oro" subtitle="Sin excepciones. Lee con atención antes de comenzar.">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rules.map((rule, index) => (
          <div key={index} className={`bg-white rounded-2xl p-6 shadow-md border-l-4 hover:shadow-xl transition-all duration-300 ${rule.iconType === 'alert' ? 'border-amber-500' : 'border-blue-500'}`}>
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-slate-50 rounded-xl">
                {getIcon(rule.iconType)}
              </div>
              <h3 className="text-xl font-bold text-slate-800 leading-tight pt-1">{rule.title}</h3>
            </div>
            <p className="text-slate-600 leading-relaxed">
              {rule.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};