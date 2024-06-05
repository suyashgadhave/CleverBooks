import React from 'react';

const ProblemTargetSection = () => {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">Feature 1</h3>
            <p>Description of feature 1.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">Feature 2</h3>
            <p>Description of feature 2.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">Feature 3</h3>
            <p>Description of feature 3.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">Feature 4</h3>
            <p>Description of feature 4.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemTargetSection;
