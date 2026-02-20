import React from 'react';
import { Download, FolderOpen, BookOpen, Scissors, Monitor, Image, FileText } from 'lucide-react';
import { Section } from './Section';

export const Steps: React.FC = () => {
  return (
    <div className="bg-slate-50">
      <Section id="steps" title="Procedimiento" subtitle="Sigue estos pasos en orden para configurar tu trabajo.">
        
        {/* Paso 1 */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <span className="bg-blue-600 text-white font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center shadow-lg">1</span>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800">PASO 1: Abastecimiento de Recursos</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex gap-4 items-start">
              <Download className="w-6 h-6 text-blue-500 shrink-0 mt-1" />
              <div className="w-full">
                <h4 className="font-bold text-lg text-slate-800 mb-2">1. Descarga y Organiza</h4>
                <p className="text-slate-600 mb-4">Antes de empezar, descarga los archivos necesarios haciendo clic en los botones:</p>
                <div className="flex flex-col gap-3">
                  <a 
                    href="https://drive.google.com/file/d/134lCSmZtH7Y4uSd84G20pOZYkkPosELt/view?usp=drive_link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 hover:shadow-md transition-all duration-200 text-sm font-bold border border-blue-100 group"
                  >
                    <div className="bg-blue-200 p-1.5 rounded-md group-hover:bg-blue-300 transition-colors">
                      <FileText className="w-4 h-4" />
                    </div>
                    <span>Descargar "Frecuencia CDMX.pdf"</span>
                  </a>
                  <a 
                    href="https://drive.google.com/file/d/1XKb8gsV-tLFnyM6MrALisaFpRl6DuCdO/view?usp=drive_link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-indigo-50 text-indigo-700 rounded-lg hover:bg-indigo-100 hover:shadow-md transition-all duration-200 text-sm font-bold border border-indigo-100 group"
                  >
                    <div className="bg-indigo-200 p-1.5 rounded-md group-hover:bg-indigo-300 transition-colors">
                      <Image className="w-4 h-4" />
                    </div>
                    <span>Descargar "Frecuencia_CDMX IMAGENES 1.pdf"</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex gap-4 items-start">
              <FolderOpen className="w-6 h-6 text-blue-500 shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-lg text-slate-800 mb-2">2. Ubicación Técnica</h4>
                <p className="text-slate-600">Guárdalos directamente en tu carpeta <span className="font-semibold">TAREAS</span>, la cual debe estar dentro de tu carpeta principal identificada con tu <span className="font-semibold">Nombre, Grado y Grupo</span>.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex gap-4 items-start">
              <BookOpen className="w-6 h-6 text-blue-500 shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-lg text-slate-800 mb-2">3. Lee la Historia</h4>
                <p className="text-slate-600">Abre el archivo de texto. Analiza cómo tres estudiantes de la Técnica 47 usaron la electrónica para conectar a la ciudad tras el fallo de las 18:30 horas.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex gap-4 items-start">
              <Scissors className="w-6 h-6 text-blue-500 shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-lg text-slate-800 mb-2">4. Prepara tus Imágenes</h4>
                <p className="text-slate-600">Abre <span className="font-semibold text-blue-600">"Frecuencia_CDMX IMAGENES 1.pdf"</span> y tenlo listo "detrás" de PowerPoint para realizar los recortes.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Paso 2 */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <span className="bg-blue-600 text-white font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center shadow-lg">2</span>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800">PASO 2: Especificaciones de Diseño (Construcción)</h3>
          </div>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
            <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
              
              {/* Parte A */}
              <div className="p-8 hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-3 mb-4 text-blue-600">
                  <Monitor className="w-6 h-6" />
                  <span className="font-bold text-sm tracking-wider uppercase">Parte A</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">Encabezado (Título)</h4>
                <ol className="space-y-3 text-slate-600 list-decimal list-inside marker:text-blue-500 marker:font-bold">
                  <li>Cuadro de texto de orilla a orilla.</li>
                  <li>Pregunta completa en <strong>Arial, 28, Negrita, Negro</strong>.</li>
                  <li>Alineación Centrada (Control + T).</li>
                </ol>
              </div>

              {/* Parte B */}
              <div className="p-8 hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-3 mb-4 text-purple-600">
                  <Image className="w-6 h-6" />
                  <span className="font-bold text-sm tracking-wider uppercase">Parte B</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">Evidencia Visual (Imagen)</h4>
                <ol className="space-y-3 text-slate-600 list-decimal list-inside marker:text-purple-500 marker:font-bold">
                  <li>Busca la imagen en el archivo de IMAGENES.</li>
                  <li>Deja el PDF abierto "detrás".</li>
                  <li>Ve a <strong>INSERTAR &gt; Captura &gt; Recorte de pantalla</strong>.</li>
                  <li>Colócala al lado <strong>IZQUIERDO</strong>.</li>
                </ol>
              </div>

              {/* Parte C */}
              <div className="p-8 hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-3 mb-4 text-emerald-600">
                  <FileText className="w-6 h-6" />
                  <span className="font-bold text-sm tracking-wider uppercase">Parte C</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">Reporte de Análisis (Respuesta)</h4>
                <ol className="space-y-3 text-slate-600 list-decimal list-inside marker:text-emerald-500 marker:font-bold">
                  <li>Cuadro al lado <strong>DERECHO</strong>.</li>
                  <li>Respuesta en paráfrasis (mínimo 4 renglones).</li>
                  <li><strong>Arial, 20, Negro</strong>.</li>
                  <li>Alineación Justificada (Control + J).</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};