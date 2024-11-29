import React from 'react';
import { Award } from 'lucide-react';

export const RewardsSystem = () => {
  const rewards = [
    {
      id: 1,
      name: 'Social Butterfly',
      description: 'Made 10 new friends',
      points: 100,
      achieved: true
    },
    {
      id: 2,
      name: 'Event Explorer',
      description: 'Attended 5 different types of events',
      points: 150,
      achieved: false
    }
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <Award />
        Your Rewards
      </h2>
      <div className="space-y-4">
        {rewards.map(reward => (
          <div key={reward.id} 
               className={`p-4 rounded-lg border ${reward.achieved ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'}`}>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold">{reward.name}</h3>
                <p className="text-gray-600">{reward.description}</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-blue-600">{reward.points} pts</p>
                <span className={`inline-block px-3 py-1 rounded-full text-sm ${reward.achieved ? 'bg-green-200 text-green-800' : 'bg-gray-200 text-gray-800'}`}>
                  {reward.achieved ? 'Achieved' : 'In Progress'}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};