import React from 'react';

interface SectionProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({ title, subtitle, children, className = "", id }) => {
  return (
    <section id={id} className={`py-12 px-4 md:px-8 max-w-7xl mx-auto ${className}`}>
      {(title || subtitle) && (
        <div className="mb-10 text-center">
          {title && <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-3">{title}</h2>}
          {subtitle && <p className="text-lg text-slate-600 max-w-2xl mx-auto">{subtitle}</p>}
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-6 rounded-full"></div>
        </div>
      )}
      {children}
    </section>
  );
};