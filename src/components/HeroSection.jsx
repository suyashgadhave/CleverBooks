import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4 h-40 mt-10">Every order fulfilled, <br/> <span className="text-pink-500">on time</span>.</h1>
        <p className="text-xl mb-8 h-40">Eliminate overstocking and under-stocking with CleverBooks. Built by supply-chain experts, it brings the same technology used by large global brands to power fast-growing startups.</p>
        <a href="#get-started" className="bg-pink-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-pink-600">Get started with CleverBooks</a>
      </div>
    </section>
  );
};

export default HeroSection;
