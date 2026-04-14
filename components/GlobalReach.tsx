import React from 'react';
import { motion } from 'framer-motion';
import globeImage from '../img/image.png';

export function GlobalReach() {
  return (
    <section className="w-full bg-white pt-24 pb-0 text-center overflow-hidden">

      {/* Header Content */}
      <div className="max-w-3xl mx-auto px-6 mb-16 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[11px] font-bold tracking-[0.2em] text-[#9F8FEF] uppercase mb-4"
        >
          PROVA SOCIAL
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-medium text-gray-900 tracking-tight mb-6"
        >
          +127 projetos entregues<br />
          em 16 segmentos diferentes
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-[15px] text-gray-500 leading-relaxed max-w-2xl mx-auto mb-8"
        >
          Hoje, 94% dos clientes seguem com a Inova Society depois do teste. "Foi a primeira vez que tivemos uma solução realmente feita para a nossa rotina."
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-[#121B27] text-white px-6 py-3 rounded-full text-[14px] font-medium hover:bg-black transition-colors"
        >
          Começar agora
        </motion.button>
      </div>

      {/* Map/Globe Horizon Area */}
      {/* Globe Image Section */}
      <div className="w-full relative px-4 md:px-8 pb-0 overflow-hidden flex justify-center items-center">
        <motion.div
          className="w-full max-w-5xl mx-auto mt-16 md:mt-24 flex justify-center"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src={globeImage}
            alt="Base de Usuários Globais da Inova Society"
            className="w-full max-w-4xl h-auto object-contain drop-shadow-2xl"
          />
        </motion.div>
      </div>

    </section>
  );
}
