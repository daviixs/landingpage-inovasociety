import React from 'react';
import { motion } from 'framer-motion';

const mapPins = [
  { name: 'Canada', flag: '🇨🇦', top: '15%', left: '20%' },
  { name: 'United States', flag: '🇺🇸', top: '25%', left: '15%' },
  { name: 'Brazil', flag: '🇧🇷', top: '58%', left: '30%' },
  { name: 'France', flag: '🇫🇷', top: '-5%', left: '49%' },
  { name: 'Ivory Coast', flag: '🇨🇮', top: '75%', left: '44%' },
  { name: 'Italy', flag: '🇮🇹', top: '22%', left: '52%' },
  { name: 'India', flag: '🇮🇳', top: '40%', left: '72%' },
  { name: 'Australia', flag: '🇦🇺', top: '70%', left: '86%' },
];

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
          GLOBAL
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-medium text-gray-900 tracking-tight mb-6"
        >
          Aja globalmente com a VEX
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-[15px] text-gray-500 leading-relaxed max-w-2xl mx-auto mb-8"
        >
          Nossa força: coletar dados do mundo inteiro, combiná-los a análises avançadas em tempo real e transformá-los em puro conhecimento aplicado para a sua empresa.
        </motion.p>
        <motion.button 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-[#121B27] text-white px-6 py-3 rounded-full text-[14px] font-medium hover:bg-black transition-colors"
        >
          Agendar Demonstração
        </motion.button>
      </div>

      {/* Map/Globe Horizon Area */}
      {/* Fully responsive wrapper dropping the forced horizontal min-width so it scales nicely padding to phone sizes */}
      <div className="w-full relative px-4 pb-12 overflow-hidden">
        <div className="w-full max-w-[1200px] mx-auto h-[350px] relative mt-16 flex justify-center">
          
          {/* The Curved "Earth Horizon" Dome using border-radius */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[160%] md:w-[130%] lg:w-[120%] h-[1200px] rounded-[100%] bg-gradient-to-br from-[#4A6BF5] via-[#859BFF] to-[#CAD6FF] border-t-2 border-white/50 shadow-[inset_0_20px_60px_-15px_rgba(74,107,245,0.4)]" />
          
          {/* Faint Abstract Map Image overlay to match reference feeling */}
          <div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[160%] md:w-[130%] lg:w-[120%] h-[1200px] rounded-[100%] opacity-[0.35] pointer-events-none mix-blend-multiply"
            style={{ 
              backgroundImage: 'url("https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000&auto=format&fit=crop")',
              backgroundSize: '800px',
              backgroundPosition: 'top center'
            }}
          />

          {/* Absolute Country Pins */}
          <div className="absolute top-0 left-0 w-full h-[350px]">
            {mapPins.map((pin, index) => (
              <motion.div
                key={pin.name}
                initial={{ opacity: 0, scale: 0.5, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.04 + 0.3,
                  type: "spring", stiffness: 200, damping: 15
                }}
                className="absolute flex items-center bg-white/90 backdrop-blur-sm rounded-full shadow-sm border border-gray-100 py-1.5 px-3 pr-4 group cursor-default hover:shadow-md hover:bg-white transition-all z-10"
                style={{ top: pin.top, left: pin.left }}
              >
                <span className="text-sm mr-2 leading-none group-hover:scale-110 transition-transform origin-center">
                  {pin.flag}
                </span>
                <span className="text-[12px] font-semibold text-gray-700 tracking-tight">
                  {pin.name}
                </span>
              </motion.div>
            ))}
          </div>
          
          {/* Fade out bottom to blend with white background naturally */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent pointer-events-none z-20" />
        </div>
      </div>
      
    </section>
  );
}
