import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

export const EventRecommendation = () => {
  const recommendedEvents = [
    {
      id: 1,
      title: "Morning Yoga",
      location: "Community Center",
      distance: "0.5 miles",
      accessibility: "Fully accessible",
      transport: "Bus route 42, Handicap parking available",
      interests: ["Exercise", "Wellness"],
      mobility: "Low impact",
      date: "Tomorrow, 10:00 AM"
    },
    {
      id: 2,
      title: "Book Club Meeting",
      location: "Local Library",
      distance: "1.2 miles",
      accessibility: "Ground floor, ramp access",
      transport: "Shuttle service available",
      interests: ["Reading", "Social"],
      mobility: "Seated activity",
      date: "Friday, 2:00 PM"
    }
  ];

  return (
    <div className="space-y-6">
      {recommendedEvents.map(event => (
        <div key={event.id} className="bg-white rounded-xl p-6 shadow-md">
          <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="text-lg mb-2">
                <strong>Location:</strong> {event.location}
              </p>
              <p className="text-lg mb-2">
                <strong>Distance:</strong> {event.distance}
              </p>
              <p className="text-lg mb-2">
                <strong>Date:</strong> {event.date}
              </p>
              <p className="text-lg mb-2">
                <strong>Accessibility:</strong> {event.accessibility}
              </p>
            </div>
            <div>
              <p className="text-lg mb-2">
                <strong>Transport:</strong> {event.transport}
              </p>
              <p className="text-lg mb-2">
                <strong>Mobility Level:</strong> {event.mobility}
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {event.interests.map(interest => (
                  <span key={interest} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};