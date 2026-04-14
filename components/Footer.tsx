import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle } from 'lucide-react';
import { MdPhoneAndroid } from 'react-icons/md';

export function Footer() {
  return (
    <footer className="w-full relative bg-black text-white pt-24 pb-12 px-6 md:px-12 lg:px-16 overflow-hidden border-t border-white/5">
      
      {/* Subtle Grid Background replacing the green harmonic grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col">
        
        {/* Top Section: CTA & Email */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-24 gap-12">
          <div>
            <h2 className="text-3xl md:text-[42px] text-gray-300 font-medium mb-2 tracking-tight">
              Comece sem risco
            </h2>
            <p className="text-4xl md:text-[52px] font-semibold tracking-tight text-white leading-tight">
              Teste grátis por 14 dias
            </p>
          </div>
          
          <div className="w-full max-w-md">
            <div className="flex items-center w-full bg-white rounded-full p-1.5 focus-within:ring-2 focus-within:ring-gray-400 transition-all shadow-xl">
              <input 
                type="email" 
                placeholder="Seu melhor e-mail" 
                className="flex-1 bg-transparent border-none outline-none text-gray-900 px-6 py-3 text-[15px] rounded-l-full placeholder:text-gray-500"
              />
              <button className="bg-black hover:bg-gray-900 text-white px-8 py-3.5 rounded-full text-[15px] font-medium transition-colors whitespace-nowrap">
                Quero testar grátis
              </button>
            </div>
          </div>
        </div>

        {/* Middle Section: Links & Logo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 border-t border-white/10 pt-16 mb-24">
          
          {/* Logo & Certifications Area */}
          <div className="col-span-1 lg:col-span-4 flex flex-col items-start">
             <div className="flex items-center gap-2 text-2xl font-semibold tracking-tight mb-8">
               Inova Society
               <MdPhoneAndroid />
             </div>
             
             <div className="flex items-center gap-6 mt-2">
                <div className="flex items-center gap-3">
                   <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shrink-0 relative overflow-hidden">
                      <ShieldCheck className="w-6 h-6 z-10" />
                   </div>
                   <div className="leading-tight">
                     <p className="text-xs text-gray-400 font-medium">SUPORTE HUMANO</p>
                     <p className="text-[13px] font-medium text-white">Resposta rápida</p>
                   </div>
                </div>

                <div className="flex items-center gap-3">
                   <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white shrink-0">
                      <CheckCircle className="w-6 h-6" />
                   </div>
                   <div className="leading-tight">
                     <p className="text-xs text-gray-400 font-medium whitespace-nowrap">SEM RISCO</p>
                     <p className="text-[13px] font-medium text-white">Cancele quando quiser</p>
                   </div>
                </div>
             </div>
          </div>

          {/* Links Area */}
          <div className="col-span-1 lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-12 lg:gap-8">
            
            <div className="flex flex-col gap-5">
              <h4 className="text-[11px] font-bold tracking-[0.2em] text-[#9F8FEF] uppercase mb-2">Soluções</h4>
              <a href="#" className="text-[14px] text-gray-400 hover:text-white transition-colors">Automação de processos</a>
              <a href="#" className="text-[14px] text-gray-400 hover:text-white transition-colors">Apps sob medida</a>
              <a href="#" className="text-[14px] text-gray-400 hover:text-white transition-colors">Sistemas personalizados</a>
              <a href="#" className="text-[14px] text-gray-400 hover:text-white transition-colors">Suporte humano</a>
            </div>

            <div className="flex flex-col gap-5">
              <h4 className="text-[11px] font-bold tracking-[0.2em] text-[#9F8FEF] uppercase mb-2">Teste grátis</h4>
              <a href="#" className="text-[14px] text-gray-400 hover:text-white transition-colors">14 dias sem pagar</a>
              <a href="#" className="text-[14px] text-gray-400 hover:text-white transition-colors">Sem cartão de crédito</a>
              <a href="#" className="text-[14px] text-gray-400 hover:text-white transition-colors">Sem compromisso</a>
              <a href="#" className="text-[14px] text-gray-400 hover:text-white transition-colors">Sem multa</a>
            </div>

            <div className="flex flex-col gap-5">
              <h4 className="text-[11px] font-bold tracking-[0.2em] text-[#9F8FEF] uppercase mb-2">Depoimentos</h4>
              <a href="#" className="text-[14px] text-gray-400 hover:text-white transition-colors">Loja: "Ficou do nosso jeito"</a>
              <a href="#" className="text-[14px] text-gray-400 hover:text-white transition-colors">Clínica: "Atendimento mais ágil"</a>
              <a href="#" className="text-[14px] text-gray-400 hover:text-white transition-colors">Serviços: "Menos retrabalho"</a>
              <a href="#" className="text-[14px] text-gray-400 hover:text-white transition-colors">Indústria: "Suporte de verdade"</a>
              <a href="#" className="group flex items-center text-[14px] text-gray-400 hover:text-white transition-colors mt-2">
                Quero testar grátis <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

          </div>
        </div>

        {/* Bottom Bar Area */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-6 border-t border-white/5">
          <p className="text-[13px] text-gray-500">
            Todos os direitos reservados © 2026 Inova Society
          </p>
          <div className="flex items-center gap-8">
            <a href="#" className="text-[13px] text-gray-500 hover:text-gray-300 transition-colors">Política de Privacidade</a>
            <a href="#" className="text-[13px] text-gray-500 hover:text-gray-300 transition-colors">Termos de Uso</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
