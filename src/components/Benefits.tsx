import React from 'react';
        
const benefits: string[] = [
  'Sync your dictionary across your entire enterprise',
  'Instant acronym lookup and definition',
  'Save time onboarding new employees',
  'Quickly grasp new concepts',
];
        
const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="mb-16">
      <h2 className="text-3xl font-semibold mb-6 text-center">Why Choose Acro-ally?</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-center bg-gray-800 p-4 rounded-lg shadow">
            <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            {benefit}
          </li>
        ))}
      </ul>
    </section>
  );
};
        
export default Benefits;