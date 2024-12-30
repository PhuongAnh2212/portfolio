import React from 'react';

const Homepage = () => (
  <section id="hero" className="bg-blue-500 text-white py-20">
    <div className="container mx-auto text-center">
      <h1 className="text-5xl font-bold">Welcome to YourAppName</h1>
      <p className="text-lg mt-4">Your one-stop solution for [problem domain].</p>
      <button className="mt-6 px-6 py-3 bg-white text-blue-500 rounded-lg font-semibold">
        Get Started
      </button>
    </div>
  </section>
);

export default Homepage;
