import React from 'react';
import { Camera, UserPlus, Calendar, Star } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-blue-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Connect, Share, and Enjoy Together
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Join our community of active seniors and discover new friendships
          </p>
          <button className="bg-blue-600 text-white text-xl px-8 py-4 rounded-lg">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;