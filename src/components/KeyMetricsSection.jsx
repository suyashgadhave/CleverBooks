import React from 'react';

const KeyMetricsSection = () => {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Key Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="hover:text-slate-400">
            <h3 className="text-5xl font-bold mb-4">85%</h3>
            <p>Reduction in out-of-stock</p>
          </div>
          <div className="hover:text-slate-400">
            <h3 className="text-5xl font-bold mb-4">50%</h3>
            <p>Faster cash recovery cycle</p>
          </div>
          <div className="hover:text-slate-400">
            <h3 className="text-5xl font-bold mb-4">30%</h3>
            <p>Increase in revenue</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyMetricsSection;
