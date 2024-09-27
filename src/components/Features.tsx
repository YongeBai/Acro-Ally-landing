import React from 'react';

interface Feature {
  title: string;
  description: string;
}

const features: Feature[] = [
  { title: 'Acronym Definition', description: 'Highlight and define acronyms with a simple keyboard shortcut.' },
  { title: 'Acronym Lookup', description: 'Quickly access definitions from your organization\'s shared dictionary.' },
  { title: 'Dictionary Management', description: 'Easily view, edit, and organize your organization\'s acronym collection.' },
  { title: 'Sync Across Your Entire Enterprise', description: 'Sync your dictionary across your entire enterprise.' },
];

const Features: React.FC = () => {
  return (
    <section id="features">
      <h2 className="text-3xl font-semibold mb-6 text-center">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;