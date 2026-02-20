import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-8 text-center border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        <p className="mb-2 font-semibold">Escuela Secundaria Técnica No. 47</p>
        <p className="text-sm opacity-60">Materia: Electrónica, Comunicaciones y Control</p>
        <p className="text-xs mt-4 opacity-40">Actividad educativa basada en manual de procedimiento interno.</p>
      </div>
    </footer>
  );
};