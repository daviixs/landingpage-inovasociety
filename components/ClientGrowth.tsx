import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { BarChart2, MousePointer2 } from 'lucide-react';

const dataPointsBaseline = [
  { day: 'Mon', value: 20 },
  { day: 'Tue', value: 25 },
  { day: 'Wed', value: 35 },
  { day: 'Thu', value: 45 },
  { day: 'Fri', value: 60 },
  { day: 'Sat', value: 85 },
];

const dataPointsVex = [
  { day: 'Mon', value: 25 },
  { day: 'Tue', value: 38 },
  { day: 'Wed', value: 65, tooltip: 'VEX logic deployment shows exponential jump in margin.' },
  { day: 'Thu', value: 110 },
  { day: 'Fri', value: 175 },
  { day: 'Sat', value: 250 },
];

export function ClientGrowth() {
  const [hoveredNode, setHoveredNode] = useState<{ x: number, y: number, text?: string } | null>(null);

  // Chart dimensions
  const width = 600;
  const height = 300;
  const paddingX = 40;
  const paddingY = 40;
  
  const maxVal = 250;
  
  // Helpers
  const getX = (index: number) => paddingX + (index * ((width - paddingX * 2) / (dataPointsVex.length - 1)));
  const getY = (val: number) => height - paddingY - (val / maxVal) * (height - paddingY * 2);

  // Line paths
  const baselinePath = dataPointsBaseline.map((d, i) => `${i === 0 ? 'M' : 'L'} ${getX(i)} ${getY(d.value)}`).join(' ');
  const vexPath = dataPointsVex.map((d, i) => `${i === 0 ? 'M' : 'L'} ${getX(i)} ${getY(d.value)}`).join(' ');

  return (
    <section className="w-full bg-black py-24 px-6 md:px-12 lg:px-16 text-white relative overflow-hidden">
      
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between mb-16 gap-8">
        <div className="max-w-2xl">
          <h2 className="text-sm font-semibold tracking-widest text-emerald-400 uppercase mb-4">
            Governance & Evaluations
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight mb-6" style={{ letterSpacing: "-0.04em" }}>
            Continuously test and<br />
            <span className="text-gray-500">improve performance</span>
          </h3>
          <p className="text-gray-400 text-lg sm:text-xl">
            With full visibility across your digital team, we audit technical and behavioral performance and proactively improve operating procedures over time.
          </p>
        </div>
        <button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors whitespace-nowrap">
          Learn more about evaluations
        </button>
      </div>

      <div className="relative max-w-5xl mx-auto h-[450px] md:h-[550px] lg:h-[650px] flex items-center justify-center -mt-8">
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-emerald-500/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[50%] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none" />

        {/* Dashboard Card */}
        <div className="relative w-full max-w-3xl liquid-glass border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col shadow-2xl">
          
          {/* Card Header */}
          <div className="flex items-center text-sm text-gray-400 mb-6 font-medium">
            <BarChart2 className="w-4 h-4 mr-2" />
            <span>VEX Workspace</span>
            <span className="mx-2">&gt;</span>
            <span className="text-gray-300">Analytics</span>
          </div>

          <div className="flex justify-between items-end border-b border-white/5 pb-4 mb-6">
            <div>
              <h4 className="text-xl font-semibold text-white">Key Performance Indicators</h4>
              <p className="text-sm text-gray-400 mt-1">January - June 2026</p>
            </div>
            <div className="flex flex-col gap-2 text-sm">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-emerald-400 mr-2" />
                <span className="text-gray-300">VEX Platform</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-blue-500 mr-2" />
                <span className="text-gray-500">Industry Baseline</span>
              </div>
            </div>
          </div>

          {/* Chart Area */}
          <div className="relative flex-1 w-full flex items-center justify-center">
            
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
                    stroke="rgba(255,255,255,0.05)" 
                    strokeWidth="1" 
                  />
                );
              })}

              {/* Baseline Path */}
              <motion.path
                d={baselinePath}
                fill="none"
                stroke="#3B82F6"
                strokeWidth="3"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />

              {/* VEX Path */}
              <motion.path
                d={vexPath}
                fill="none"
                stroke="#34D399"
                strokeWidth="3"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
              />

              {/* Nodes and X-Axis Labels */}
              {dataPointsVex.map((d, i) => {
                const cxVex = getX(i);
                const cyVex = getY(d.value);
                const cyBase = getY(dataPointsBaseline[i].value);

                return (
                  <g key={i}>
                    {/* X-Axis text */}
                    <text 
                      x={cxVex} 
                      y={height - 10} 
                      fill="#9CA3AF" 
                      fontSize="12" 
                      textAnchor="middle"
                    >
                      {d.day}
                    </text>

                    {/* Baseline Node */}
                    <motion.circle
                      cx={cxVex}
                      cy={cyBase}
                      r="5"
                      fill="#1e1e1e"
                      stroke="#3B82F6"
                      strokeWidth="2"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.5 + (i * 0.1) }}
                    />

                    {/* VEX Node */}
                    <motion.circle
                      cx={cxVex}
                      cy={cyVex}
                      r="6"
                      fill="#34D399"
                      className="cursor-pointer transition-colors hover:fill-emerald-300"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.8 + (i * 0.1) }}
                      onMouseEnter={() => d.tooltip && setHoveredNode({ x: cxVex, y: cyVex, text: d.tooltip })}
                      onMouseLeave={() => setHoveredNode(null)}
                    />
                  </g>
                );
              })}
            </svg>

            {/* Tooltip HTML Overlay */}
            <AnimatePresence>
              {hoveredNode && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="absolute pointer-events-none z-10"
                  style={{
                    left: `${(hoveredNode.x / width) * 100}%`,
                    top: `${(hoveredNode.y / height) * 100}%`,
                    transform: 'translate(-50%, -100%) translateY(-15px)'
                  }}
                >
                  <div className="bg-white text-gray-900 rounded-lg p-4 shadow-xl border border-gray-100 w-56 relative">
                    <div className="flex items-center mb-2">
                       <MousePointer2 className="w-4 h-4 text-emerald-500 mr-2" />
                       <span className="font-semibold text-sm">Tooltip</span>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {hoveredNode.text}
                    </p>
                    {/* Arrow */}
                    <div className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-4 h-4 bg-white border-b border-r border-gray-100 rotate-45" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>
      </div>
    </section>
  );
}
