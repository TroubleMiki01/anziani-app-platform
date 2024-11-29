import React from 'react';
import { Activity } from 'lucide-react';

export const ActivityTracker = () => {
  const activities = {
    eventsJoined: 5,
    friendsMade: 8,
    challengesCompleted: 3,
    messagesExchanged: 25
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <Activity />
        Activity Overview
      </h2>
      <div className="grid grid-cols-2 gap-4">
        {Object.entries(activities).map(([key, value]) => (
          <div key={key} className="bg-blue-50 p-4 rounded-lg">
            <p className="text-lg capitalize">{key.replace(/([A-Z])/g, ' $1')}</p>
            <p className="text-3xl font-bold text-blue-600">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};