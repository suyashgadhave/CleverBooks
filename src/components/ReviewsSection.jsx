import React from 'react';

const ReviewsSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <p>"CleverBooks has revolutionized our inventory management!"</p>
            <p className="mt-4 font-bold">- John Doe</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <p>"We never run out of stock thanks to CleverBooks."</p>
            <p className="mt-4 font-bold">- Jane Smith</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <p>"Our sales have increased by 30% since we started using CleverBooks."</p>
            <p className="mt-4 font-bold">- Sarah Lee</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
