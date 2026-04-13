import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function FreeTrial() {
  return (
    <section className="w-full bg-white text-gray-900 py-16 md:py-24 px-4 md:px-12 lg:px-16">

      {/* Top Center Main Header */}
      <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-[64px] font-medium tracking-tight leading-[1.1] text-gray-900"
        >
          Teste 14 dias grátis na<br />
          prática. Sem compromisso.
        </motion.h2>
      </div>

      {/* 2-Column Structure */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">

        {/* Left Col: Text & CTA */}
        <div className="w-full lg:w-[45%] flex flex-col items-start text-left shrink-0">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="bg-[#EAECE9] text-[#2F3A30] text-sm font-semibold px-3 py-1 rounded-md">
              Inova Society
            </div>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-[42px] font-medium tracking-tight leading-[1.1] mb-6"
          >
            Você testa antes<br />
            de pagar
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 font-medium text-[17px] leading-relaxed mb-8 max-w-lg"
          >
            Você testa uma solução feita para o seu negócio e só paga se gostar.
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            href="#"
            className="group flex items-center text-[15px] font-semibold text-gray-900 hover:text-gray-600 transition-colors"
          >
            Quero testar grátis por 14 dias
            <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </motion.a>
        </div>

        {/* Right Col: Image Mockup Grid */}
        <div className="w-full lg:w-[55%] grid grid-cols-2 gap-4">

          {/* Top Main Image (Spans 2 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="col-span-2 rounded-2xl md:rounded-3xl overflow-hidden bg-gray-100 aspect-[16/9] shadow-sm relative group"
          >
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
              alt="Painel de dados"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Subtle overlay gradient like original has */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </motion.div>

          {/* Bottom Left Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl overflow-hidden bg-[#F0F2ED] aspect-square shadow-sm flex items-center justify-center p-4"
          >
            <img
              src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop"
              alt="Interface de aplicativo"
              className="w-full h-full object-cover rounded-xl"
            />
          </motion.div>

          {/* Bottom Right Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-2xl overflow-hidden bg-[#0A41E1] aspect-square shadow-sm flex items-center justify-center"
          >
            <img
              src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2070&auto=format&fit=crop"
              alt="Visual abstrato de tecnologia"
              className="w-full h-full object-cover mix-blend-overlay opacity-50"
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
}
