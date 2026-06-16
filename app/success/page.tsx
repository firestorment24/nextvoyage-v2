// app/success/page.tsx  
import React from 'react';

const SuccessPage = () => {  
  const steps = [  
    {  
      title: "The Manifest Received",  
      description: "Your request has been successfully transmitted to the Lead Conductor's private terminal.",  
      status: "complete"  
    },  
    {  
      title: "Strategic Briefing",  
      description: "Daryl Clark will personally review your requirements and reach out via your preferred channel within 24 hours.",  
      status: "current"  
    },  
    {  
      title: "Conductance Commences",  
      description: "Upon alignment, we begin the orchestration of your itinerary and logistics.",  
      status: "upcoming"  
    }  
  ];

  return (  
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">  
      <div className="max-w-2xl w-full text-center">  
        <h1 className="text-4xl font-light tracking-widest mb-4 uppercase">Request Confirmed</h1>  
        <p className="text-gray-400 mb-12 italic">"Precision in orchestration, excellence in execution."</p>  
          
        <div className="relative">  
          {steps.map((step, index) => (  
            <div key={index} className="flex items-start mb-12 last:mb-0">  
              <div className="flex flex-col items-center mr-6">  
                <div className={`w-4 h-4 rounded-full border ${  
                  step.status === 'complete' ? 'bg-white border-white' :   
                  step.status === 'current' ? 'bg-transparent border-white animate-pulse' :   
                  'bg-transparent border-gray-700'  
                }`} />  
                {index !== steps.length - 1 && (  
                  <div className="w-px h-16 bg-gray-800 my-2" />  
                )}  
              </div>  
              <div className="text-left">  
                <h3 className={`text-lg font-medium ${step.status === 'upcoming' ? 'text-gray-600' : 'text-white'}`}>  
                  {step.title}  
                </h3>  
                <p className="text-gray-500 mt-1 text-sm leading-relaxed">  
                  {step.description}  
                </p>  
              </div>  
            </div>  
          ))}  
        </div>

        <div className="mt-16 border-t border-gray-900 pt-8">  
          <p className="text-xs tracking-widest uppercase text-gray-600">Lead Conductor: Daryl Clark</p>  
        </div>  
      </div>  
    </div>  
  );  
};

export default SuccessPage;  
