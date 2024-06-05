import React from 'react';

const BlogSection = () => {
  return (
    <section className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Delivered: The Crest blog</h2>
        <p className="text-lg mb-8">Insights from years of working in various supply-chain roles (and an itch to write). We hope you find these posts interesting!</p>
        <a href="#blogs" className="bg-white text-purple-700 py-3 px-6 rounded-lg shadow-lg hover:bg-gray-200">View all blogs</a>
      </div>
    </section>
  );
};

export default BlogSection;
