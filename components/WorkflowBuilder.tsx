import React from 'react';
import mockupImg from '../apple-iphone-15-black-mockup/WhatsApp Image 2026-04-13 at 16.32.18-left.png';

const cases = [
  {
    title: "Automação de atendimento",
    description: "Organize mensagens, respostas e repasses sem perder tempo nem cliente no caminho.",
    metrics: "Mais agilidade no atendimento\nMenos gargalo na operação"
  },
  {
    title: "App para equipe",
    description: "Centralize pedidos, tarefas ou checklists em um app feito para a rotina da sua operação.",
    metrics: "Processo mais claro\nEquipe mais produtiva"
  },
  {
    title: "Sistema personalizado",
    description: "Conecte vendas, financeiro e operação em um fluxo mais simples e sem retrabalho diário.",
    metrics: "Tudo no seu fluxo\nMais controle no dia a dia"
  },
  {
    title: "Agendamentos",
    description: "Automatize horários, confirmações e lembretes sem depender de planilhas ou processos manuais.",
    metrics: "Menos faltas\nAgenda mais organizada"
  },
  {
    title: "Cobrança e follow-up",
    description: "Acompanhe pagamentos, lembretes e retornos sem precisar fazer tudo no manual.",
    metrics: "Cobrança mais rápida\nMais previsibilidade"
  }
];

export function WorkflowBuilder() {
  return (
    <section className="w-full bg-[#FAFAFA] text-black py-20 px-6 md:px-12 lg:px-16" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          
          {/* Left Side */}
          <div>
            <h2 className="text-sm font-medium tracking-widest text-gray-500 uppercase mb-8">
              O QUE A INOVA FAZ
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 tracking-tight leading-tight mb-6">
              Automações, apps e sistemas<br />
              <span className="text-gray-400">feitos para o seu negócio</span>
            </h3>
            <p className="text-gray-600 text-lg mb-8 max-w-md">
              Automatizamos processos, criamos apps sob medida, desenvolvemos sistemas personalizados e entregamos qualquer solução que envolva tecnologia sem complicar sua rotina.
            </p>
            <button className="bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors">
              Quero testar grátis por 14 dias
            </button>
          </div>

          {/* Right Side */}
          <div className="flex flex-col justify-center items-center lg:items-end">
             <div className="relative group">
                {/* Decorative background blur for the phone mockup */}
                <div className="absolute inset-0 bg-black/5 rounded-[3rem] blur-2xl transform group-hover:scale-105 transition-transform duration-500"></div>
                <img 
                  src={mockupImg} 
                  alt="App interface mockup" 
                  className="relative w-full max-w-xs md:max-w-sm rounded-[3rem] shadow-2xl z-10 transition-transform duration-500 hover:-translate-y-2"
                />
             </div>
          </div>
        </div>

        {/* Use Cases Grid */}
        <div>
          <h4 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-8">
            EXEMPLOS DO QUE PODEMOS CRIAR
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {cases.map((useCase, index) => (
              <div key={index} className="bg-[#F3EFE9] rounded-sm p-6 flex flex-col justify-between min-h-[320px]">
                <div>
                  <h5 className="text-lg font-medium text-gray-900 mb-3">{useCase.title}</h5>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
                <div className="mt-8 pt-6">
                  {useCase.metrics.split('\n').map((metric, mIndex) => (
                    <p key={mIndex} className="text-xs font-medium text-gray-800 mb-1">
                      {metric}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
