import React from 'react';

const FoundersSection = () => {
  return (
    <section className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white py-20">
      <div className="container mx-auto text-center">
        <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64df240c8d5e1c29b06d3a95_Founders%20Photo-p-800.webp" alt="Founders" className="mx-auto mb-4 rounded-full w-32 h-32 object-cover"/>
        <h2 className="text-3xl font-bold mb-2">From the founders</h2>
        <p className="text-lg mb-4">We are a young company solving an age-old problem: Supply Chain. Our goal is simple: to eradicate stock outs for businesses that want to grow faster. Our background, tech expertise, and empathy allow us to do just that.</p>
        <p className="text-lg mb-8">Thank you for checking out Crest, and we hope to help you always be in stock!</p>
        <a href="#learn-more" className="bg-white text-purple-700 py-3 px-6 rounded-lg shadow-lg hover:bg-gray-200">Learn more</a>
      </div>
    </section>
  );
};

export default FoundersSection;
