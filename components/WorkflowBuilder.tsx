import React from 'react';

const cases = [
  {
    title: "Inbound Sales",
    description: "From following up with & qualifying leads to running negotiations and autonomously generating revenue over phone and email.",
    metrics: "70% reduction in cost per lead\n10% margin increase"
  },
  {
    title: "Customer Service",
    description: "Over web chat, phone, or other channels, providing 24/7 access to updates and inquiries with ticket creation and follow-up.",
    metrics: "100% response rate; 0min FRT\n50%+ autonomously handled"
  },
  {
    title: "Recruiting & Staffing",
    description: "Handling candidate screening and shift confirmation to ensure proper staffing and accurate resource planning.",
    metrics: "20% more candidates captured\n60% shift confirmation increase"
  },
  {
    title: "Appointment scheduling",
    description: "Via conversation or through booking sites, our AI workers handle scheduling and rescheduling autonomously.",
    metrics: "1000x faster scheduling\n25% of the cost"
  },
  {
    title: "Payment collections",
    description: "Following up on unpaid invoices with intelligent escalations, phone-tree navigation, and document verification.",
    metrics: "119x ROI on cash collected vs cost to collect"
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
              Workflow Builder
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 tracking-tight leading-tight mb-6">
              Build AI workers for<br />
              <span className="text-gray-400">complexity and scale</span>
            </h3>
            <p className="text-gray-600 text-lg mb-8 max-w-md">
              AI workers are autonomous agents built to your unique ways of working — handling conversation, reasoning, and execution across systems.
            </p>
            <button className="bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors">
              Learn more about what AI workers can do
            </button>
          </div>

          {/* Right Side */}
          <div className="flex flex-col justify-center">
            <ul className="space-y-6">
              {[
                "Agentic reasoning for dynamic decisions and conversations",
                "Deterministic logic for precise execution that follows business rules",
                "Native tool use to take action across any system, channel, or API"
              ].map((text, i) => (
                <li key={i} className="flex justify-between items-center border-b border-gray-200 pb-4">
                  <span className="text-gray-900 font-medium">{text}</span>
                  <span className="text-sm font-semibold text-gray-400">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Use Cases Grid */}
        <div>
          <h4 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-8">
            Common Use Cases Our Customers Deploy
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
