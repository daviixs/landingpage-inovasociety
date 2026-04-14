import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, CheckCircle2 } from 'lucide-react';

const dataPoints = [
  { day: 'Seg', value: 35, tooltip: { titulo: 'Início da operação', economia: '18h poupadas', custo: '-R$1.200' } },
  { day: 'Ter', value: 55, tooltip: { titulo: 'Sistema adaptado', economia: '22h poupadas', custo: '-R$1.800' } },
  { day: 'Qua', value: 80, tooltip: { titulo: 'Retrabalho caindo', economia: '31h poupadas', custo: '-R$3.100' } },
  { day: 'Qui', value: 110, tooltip: { titulo: 'Equipe produtiva', economia: '40h poupadas', custo: '-R$4.500' } },
  { day: 'Sex', value: 145, tooltip: { titulo: 'Resultado escalando', economia: '52h poupadas', custo: '-R$5.800' } },
  { day: 'Sáb', value: 185, tooltip: { titulo: 'Operação no controle', economia: '68h poupadas', custo: '-R$7.200' } },
];

const genericPoints = [20, 25, 30, 35, 38, 42];

export function ClientGrowth() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const width = 800;
  const height = 320;
  const paddingX = 50;
  const paddingY = 40;
  const maxVal = 200;

  const getX = (i: number) =>
    paddingX + (i * ((width - paddingX * 2) / (dataPoints.length - 1)));
  const getY = (val: number) =>
    height - paddingY - (val / maxVal) * (height - paddingY * 2);

  const inovaPath = dataPoints
    .map((d, i) => `${i === 0 ? 'M' : 'L'} ${getX(i)} ${getY(d.value)}`)
    .join(' ');

  const genericPath = genericPoints
    .map((v, i) => `${i === 0 ? 'M' : 'L'} ${getX(i)} ${getY(v)}`)
    .join(' ');

  const active = activeIndex !== null ? dataPoints[activeIndex] : null;

  return (
    <section className="w-full bg-white text-gray-900 py-16 md:py-24 px-4 md:px-12 lg:px-16 overflow-hidden">

      {/* Header */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start justify-between mb-12 gap-6">
        <div>
          <p className="text-xs tracking-widest text-gray-400 font-semibold uppercase mb-4">
            DIFERENCIAL INOVA
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-[54px] font-medium tracking-tight leading-tight text-gray-900">
            O mercado vende pacote pronto.<br />
            <span className="text-gray-400">Você recebe algo feito para a sua operação.</span>
          </h2>
        </div>
        <div className="flex flex-col items-start lg:items-end w-full lg:w-1/3">
          <p className="text-sm md:text-base text-gray-500 lg:text-right mb-6">
            Enquanto muita empresa cobra caro por tecnologia genérica e suporte distante,
            a Inova Society cria a solução do seu jeito — e só faz sentido se funcionar para você.
          </p>
        </div>
      </div>

      {/* Chart Card */}
      <div className="max-w-6xl mx-auto relative rounded-3xl overflow-hidden p-4 md:p-8 lg:p-12 min-h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 bg-[#E5F1F6]" />
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#214F5C]/80 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[70%] bg-[#FDF0A8]/80 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-[20%] right-[10%] w-[40%] h-[50%] bg-[#478EA2]/60 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative w-full max-w-[850px] bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-6 md:p-8 z-20">

          {/* Breadcrumb */}
          <div className="flex items-center text-sm text-gray-500 font-medium border-b border-gray-100 pb-4 mb-6">
            <BarChart3 className="w-4 h-4 mr-2 text-gray-400" />
            <span>Inova Society</span>
            <span className="mx-2 text-gray-300">/</span>
            <span className="text-gray-400">Crescimento de resultado</span>
          </div>

          {/* Chart header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-6 border-b border-gray-100 mb-6">
            <div>
              <h3 className="text-[20px] font-semibold text-gray-900 mb-1">
                Cliente Inova Society vs. mercado genérico
              </h3>
              <p className="text-[14px] text-gray-400">
                Passe o mouse na linha laranja para ver o que muda na prática
              </p>
            </div>
            <div className="flex flex-col gap-2 mt-4 sm:mt-0 text-[13px] font-medium text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-8 h-[2px] bg-gray-300" style={{ borderTop: '2px dashed #D1D5DB' }} />
                Mercado genérico
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-[2px] bg-[#F59E0B]" />
                Solução Inova Society
              </div>
            </div>
          </div>

          {/* SVG Chart */}
          <div className="relative w-full overflow-x-auto pb-2">
            <div className="min-w-[600px] relative">
              <svg viewBox={`0 0 ${width} ${height}`} className="w-full overflow-visible">

                {/* Grid lines */}
                {[1, 2, 3, 4].map((n) => (
                  <line
                    key={n}
                    x1={paddingX} y1={getY(n * (maxVal / 4))}
                    x2={width - paddingX} y2={getY(n * (maxVal / 4))}
                    stroke="#F3F4F6" strokeWidth="1"
                  />
                ))}

                {/* Active vertical line */}
                {activeIndex !== null && (
                  <line
                    x1={getX(activeIndex)} y1={paddingY}
                    x2={getX(activeIndex)} y2={height - paddingY}
                    stroke="#FCD34D" strokeWidth="1" strokeDasharray="4 4"
                  />
                )}

                {/* Linha genérica — cinza tracejada, fina, discreta */}
                <motion.path
                  d={genericPath}
                  fill="none"
                  stroke="#D1D5DB"
                  strokeWidth="2"
                  strokeDasharray="6 4"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: 'easeInOut' }}
                />

                {/* Label "Mercado genérico" ao lado da linha */}
                <text
                  x={getX(5) + 8}
                  y={getY(genericPoints[5]) + 4}
                  fill="#9CA3AF"
                  fontSize="11"
                  textAnchor="start"
                >
                  Genérico
                </text>

                {/* Linha Inova — laranja, principal */}
                <motion.path
                  d={inovaPath}
                  fill="none"
                  stroke="#F59E0B"
                  strokeWidth="3"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.6, ease: 'easeInOut' }}
                />

                {/* Label "Inova Society" ao lado da linha */}
                <text
                  x={getX(5) + 8}
                  y={getY(dataPoints[5].value) + 4}
                  fill="#D97706"
                  fontSize="11"
                  fontWeight="600"
                  textAnchor="start"
                >
                  Inova
                </text>

                {/* Nodes + hit areas */}
                {dataPoints.map((d, i) => (
                  <g key={i}>
                    <text
                      x={getX(i)} y={height - 4}
                      fill="#9CA3AF" fontSize="12" textAnchor="middle"
                    >
                      {d.day}
                    </text>

                    {/* Nó Inova */}
                    <motion.circle
                      cx={getX(i)}
                      cy={getY(d.value)}
                      r={activeIndex === i ? 9 : 6}
                      fill={activeIndex === i ? '#F59E0B' : '#FCD34D'}
                      stroke="#F59E0B"
                      strokeWidth="2"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.4 + i * 0.08 }}
                      style={{ cursor: 'pointer' }}
                    />

                    {/* Hit area */}
                    <rect
                      x={getX(i) - 35} y={paddingY}
                      width={70} height={height - paddingY * 2}
                      fill="transparent"
                      onMouseEnter={() => setActiveIndex(i)}
                      onMouseLeave={() => setActiveIndex(null)}
                      style={{ cursor: 'pointer' }}
                    />
                  </g>
                ))}
              </svg>

              {/* Tooltip dinâmico */}
              {active && activeIndex !== null && (
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.15 }}
                  className="absolute pointer-events-none bg-white border border-amber-100 rounded-lg shadow-lg p-3 w-[210px] z-30"
                  style={{
                    left: `${(getX(activeIndex) / width) * 100}%`,
                    top: `${(getY(active.value) / height) * 100}%`,
                    transform: 'translate(-50%, -120%)',
                  }}
                >
                  <p className="text-[12px] font-semibold text-gray-900 border-b border-gray-100 pb-1.5 mb-2">
                    {active.day} — {active.tooltip.titulo}
                  </p>
                  <div className="flex flex-col gap-1.5 text-[11px] text-gray-500">
                    <span>⏱ {active.tooltip.economia}</span>
                    <span>💰 Custo reduzido: <strong className="text-green-600">{active.tooltip.custo}</strong></span>
                    <span className="text-[10px] text-amber-500 font-medium pt-1">
                      vs. sistema genérico que não acompanha seu crescimento
                    </span>
                  </div>
                  <div className="absolute left-1/2 -bottom-1.5 -translate-x-1/2 w-3 h-3 bg-white border-b border-r border-amber-100 rotate-45" />
                </motion.div>
              )}
            </div>
          </div>

          {/* Suporte badge */}
          <div className="flex items-start gap-2 mt-6 bg-gray-50 rounded-lg p-3 border border-gray-100">
            <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
            <p className="text-[12px] text-gray-500 leading-snug">
              <span className="font-semibold text-gray-800">Suporte humano incluído.</span>{' '}
              A solução evolui junto com o seu negócio — sem custo extra, sem fila de atendimento.
            </p>
          </div>
        </div>
      </div>

      {/* CTA pós-gráfico */}
      <div className="max-w-6xl mx-auto mt-10 flex flex-col items-center text-center gap-4">
        <p className="text-lg md:text-xl font-medium text-gray-700">
          É isso que acontece quando a tecnologia é feita pra você.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors">
          Começar meu projeto grátis
        </button>
        <p className="text-xs text-gray-400">
          Sem cartão de crédito · Sem compromisso · Cancele quando quiser
        </p>
      </div>

    </section>
  );
}