import React, { useState } from 'react';
import { Section } from './Section';
import { ChecklistItem } from '../types';
import { Check, Circle } from 'lucide-react';

const checklistItems: ChecklistItem[] = [
  { id: 1, text: "¿Mis archivos PDF están guardados en la carpeta TAREAS dentro de mi carpeta personal?" },
  { id: 2, text: "¿Utilicé Arial Negro para todos los textos?" },
  { id: 3, text: "¿Todos mis títulos están centrados (Ctrl+T) y mis respuestas justificadas (Ctrl+J)?" },
  { id: 4, text: "¿Expliqué el \"por qué\" en cada respuesta con al menos 4 renglones de mi propia autoría?" },
  { id: 5, text: "¿Configuré las animaciones \"Después de la anterior\" en todos los objetos?" },
  { id: 6, text: "¿La transición está en 12 segundos y seleccioné \"Aplicar a todas\"?" },
  { id: 7, text: "¿Probé mi presentación con F5 y avanza sola permitiendo leer todo el contenido?" },
];

export const Checklist: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setCheckedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const progress = Math.round((checkedItems.length / checklistItems.length) * 100);

  return (
    <div className="bg-slate-900 text-white pb-20 pt-10">
      <Section id="checklist" title="Checklist de Autocontrol" subtitle="Antes de entregar, verifica que cumplas con todos los requisitos.">
        
        {/* Progress Bar */}
        <div className="mb-10 bg-slate-800 rounded-full h-6 w-full max-w-2xl mx-auto overflow-hidden relative border border-slate-700">
          <div 
            className="h-full bg-gradient-to-r from-green-400 to-emerald-500 transition-all duration-500 ease-out flex items-center justify-end px-2"
            style={{ width: `${progress}%` }}
          >
          </div>
          <div className="absolute inset-0 flex items-center justify-center text-xs font-bold tracking-widest text-white drop-shadow-md">
            {progress}% COMPLETADO
          </div>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {checklistItems.map((item) => {
            const isChecked = checkedItems.includes(item.id);
            return (
              <div 
                key={item.id} 
                onClick={() => toggleItem(item.id)}
                className={`cursor-pointer p-4 rounded-xl border transition-all duration-200 flex items-center gap-4 ${
                  isChecked 
                    ? 'bg-emerald-900/30 border-emerald-500/50' 
                    : 'bg-slate-800 border-slate-700 hover:bg-slate-750'
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                  isChecked ? 'bg-emerald-500 text-white' : 'bg-slate-700 text-slate-400'
                }`}>
                  {isChecked ? <Check className="w-5 h-5" /> : <Circle className="w-5 h-5" />}
                </div>
                <span className={`text-lg ${isChecked ? 'text-emerald-100 line-through decoration-emerald-500/50' : 'text-slate-200'}`}>
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>
        
        {progress === 100 && (
          <div className="mt-8 text-center animate-bounce">
            <span className="inline-block bg-white text-slate-900 px-6 py-2 rounded-full font-bold shadow-lg shadow-white/20">
              ¡Excelente! Estás listo para entregar.
            </span>
          </div>
        )}

      </Section>
    </div>
  );
};