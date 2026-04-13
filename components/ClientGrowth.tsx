import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart3, CheckCircle2 } from 'lucide-react';

const dataPointsV1 = [
  { day: 'Seg', value: 25 },
  { day: 'Ter', value: 30 },
  { day: 'Qua', value: 45 },
  { day: 'Qui', value: 65 },
  { day: 'Sex', value: 80 },
  { day: 'Sáb', value: 110 },
];

const dataPointsV2 = [
  { day: 'Seg', value: 35 },
  { day: 'Ter', value: 40 },
  { day: 'Qua', value: 70, tooltip: true },
  { day: 'Qui', value: 95 },
  { day: 'Sex', value: 130 },
  { day: 'Sáb', value: 180 },
];

export function ClientGrowth() {
  const [hoveredNode, setHoveredNode] = useState<{ x: number, y: number } | null>(null);

  // SVG Chart dimensions
  const width = 800; // Increased base width for better proportions
  const height = 350;
  const paddingX = 40;
  const paddingY = 40;
  const maxVal = 200;

  const getX = (index: number) => paddingX + (index * ((width - paddingX * 2) / (dataPointsV2.length - 1)));
  const getY = (val: number) => height - paddingY - (val / maxVal) * (height - paddingY * 2);

  const v1Path = dataPointsV1.map((d, i) => `${i === 0 ? 'M' : 'L'} ${getX(i)} ${getY(d.value)}`).join(' ');
  const v2Path = dataPointsV2.map((d, i) => `${i === 0 ? 'M' : 'L'} ${getX(i)} ${getY(d.value)}`).join(' ');

  return (
    <section className="w-full bg-white text-gray-900 py-16 md:py-24 px-4 md:px-12 lg:px-16 overflow-hidden">
      
      {/* Header Container */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start justify-between mb-12 gap-6 relative z-10">
        <div>
          <h2 className="text-xs tracking-widest text-gray-500 font-semibold uppercase mb-4">
            DIFERENCIAL INOVA
          </h2>
          <h3 className="text-3xl md:text-5xl lg:text-[54px] font-medium tracking-tight leading-tight mb-4 text-gray-900">
            O mercado vende pacote pronto.<br />
            <span className="text-gray-400">Você recebe algo feito para a sua operação.</span>
          </h3>
        </div>
        
        <div className="flex flex-col items-start lg:items-end w-full lg:w-1/3">
          <p className="text-sm md:text-base text-gray-500 lg:text-right mb-6">
            Enquanto muita empresa cobra caro por tecnologia genérica e suporte distante, a Inova Society cria a solução do seu jeito, acompanha de perto e só faz sentido se funcionar para o seu negócio.
          </p>
          <button className="bg-black text-white px-5 py-2.5 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors">
            Quero testar grátis por 14 dias
          </button>
        </div>
      </div>

      {/* Presentation Wrapper with Dynamic Backgrounds */}
      <div className="max-w-6xl mx-auto relative rounded-3xl overflow-hidden bg-gray-50/50 p-4 md:p-8 lg:p-12 min-h-[500px] flex items-center justify-center">
        
        {/* Colorful Blurred Backgrounds */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#E5F1F6]" />
        {/* Dark Teal/Blue Blur top left */}
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#214F5C]/80 rounded-full blur-[100px] pointer-events-none" />
        {/* Yellow Blur bottom right */}
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[70%] bg-[#FDF0A8]/80 rounded-full blur-[100px] pointer-events-none" />
        {/* Soft Blue middle right */}
        <div className="absolute top-[20%] right-[10%] w-[40%] h-[50%] bg-[#478EA2]/60 rounded-full blur-[120px] pointer-events-none" />

        {/* White Dashboard Card */}
        <div className="relative w-full max-w-[850px] bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-6 md:p-8 flex flex-col z-20">
          
          {/* Top Breadcrumb */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-100 pb-4 mb-6">
            <div className="flex items-center text-sm text-gray-500 font-medium">
              <BarChart3 className="w-4 h-4 mr-2 text-gray-400" />
              <span>Inova Society</span>
              <span className="mx-2">&gt;</span>
              <span className="text-gray-400">Comparativo</span>
            </div>
          </div>

          {/* Chart Headers */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-8 border-b border-gray-100 relative">
            <div className="mb-4 sm:mb-0">
               <h4 className="text-[22px] font-semibold tracking-tight text-gray-900 mb-1">Genérico vs. sob medida</h4>
               <p className="text-[15px] text-gray-500">A diferença aparece no dia a dia da operação</p>
            </div>
            <div className="flex flex-col gap-2 text-[13px] font-medium text-gray-500">
               <div className="flex items-center">
                 <div className="w-2.5 h-2.5 rounded-full bg-[#3B82F6] mr-2" /> Solução genérica
               </div>
               <div className="flex items-center">
                 <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B] mr-2" /> Solução sob medida
               </div>
            </div>
            
            {/* Dashed vertical lines from header down to graph overlay to exactly match reference */}
            <div className="absolute bottom-0 left-[38%] h-8 border-l border-dashed border-gray-200" />
            <div className="absolute bottom-0 left-[75%] h-8 border-l border-dashed border-gray-200" />
          </div>

          {/* Chart Area wrapper strictly mobile-first container */}
          <div className="relative w-full overflow-x-auto overflow-y-hidden pb-4 mt-6 custom-scrollbar">
            <div className="min-w-[650px] w-full relative flex items-center justify-center">
              
              <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full overflow-visible">
                {/* Horizontal Grid lines */}
                {[4, 3, 2, 1].map((lineObj) => {
                  const yPos = getY(lineObj * (maxVal/4));
                  return (
                    <line 
                      key={lineObj} 
                      x1={paddingX} 
                      y1={yPos} 
                      x2={width - paddingX} 
                      y2={yPos} 
                      stroke="#E5E7EB" 
                      strokeWidth="1" 
                    />
                  );
                })}

                {/* Vertical Dashed lines behind nodes to match image */}
                <line x1={getX(2)} y1={paddingY} x2={getX(2)} y2={height - paddingY} stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4 4" />
                
                {/* V1 Path (Blue) */}
                <motion.path
                  d={v1Path}
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth="2.5"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />

                {/* V2 Path (Orange) */}
                <motion.path
                  d={v2Path}
                  fill="none"
                  stroke="#F59E0B"
                  strokeWidth="2.5"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />

                {/* Nodes & Labels */}
                {dataPointsV2.map((d, i) => {
                  const cxV1 = getX(i);
                  const cyV1 = getY(dataPointsV1[i].value);
                  const cyV2 = getY(d.value);

                  return (
                    <g key={i}>
                      <text 
                        x={cxV1} 
                        y={height - 5} 
                        fill="#6B7280" 
                        fontSize="13" 
                        textAnchor="middle"
                      >
                        {d.day}
                      </text>

                      {/* V1 Node */}
                      <motion.circle
                        cx={cxV1}
                        cy={cyV1}
                        r="6"
                        fill="#3B82F6"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1.2 + (i * 0.1) }}
                      />

                      {/* V2 Node */}
                      <motion.circle
                        cx={cxV1}
                        cy={cyV2}
                        r="6"
                        fill="#F59E0B"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1.2 + (i * 0.1) }}
                      />
                    </g>
                  );
                })}
              </svg>

              {/* Exact Tooltip matching the image - Hardcoded for Wednesday for accuracy */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.8 }}
                className="absolute shadow-lg border border-gray-200 rounded-md bg-white p-3 z-10 pointer-events-none w-[180px]"
                style={{
                  left: `${(getX(2) / width) * 100}%`,
                  top: `${(getY(dataPointsV2[2].value) / height) * 100}%`,
                  transform: 'translate(-50%, -120%)'
                }}
              >
                <div className="font-semibold text-gray-900 border-b border-gray-100 pb-1 mb-1 text-[13px]">Qua</div>
                <div className="text-[12px] text-gray-500 leading-tight">
                  Tempo poupado: 62%<br />
                  Retrabalho: -12,5%
                </div>
                {/* Arrow */}
                <div className="absolute left-1/2 -bottom-1.5 -translate-x-1/2 w-3 h-3 bg-white border-b border-r border-gray-200 rotate-45" />
              </motion.div>

              {/* Bottom Right Module Tooltip (Version 2's negotiation logic) */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 2 }}
                className="absolute shadow-lg border border-gray-200 rounded-md bg-white p-3 z-10 pointer-events-none w-[200px]"
                style={{
                  right: '5%',
                  bottom: '10%',
                }}
              >
                <div className="flex items-center mb-1 text-gray-900 font-semibold text-[13px]">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mr-1.5" />
                  Suporte humano
                </div>
                <div className="text-[11px] text-gray-500 leading-snug">
                  Com ajustes próximos da sua rotina, a solução evolui melhor e entrega mais resultado.
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </div>
      
      {/* Scrollbar styling specifically for mobile custom scroll */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          height: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1; 
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #d1d5db; 
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #9ca3af; 
        }
      `}} />
    </section>
  );
}
