import React from 'react';
import { Search, Star, MessageSquare, Calendar } from 'lucide-react';

export function Mentorship() {
  const mentors = [
    {
      id: 1,
      name: "Sarah Chen",
      title: "Senior Software Engineer",
      expertise: ["React", "Node.js", "System Design"],
      rating: 4.9,
      reviews: 124,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      availability: "10 hours/week"
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      title: "Tech Lead",
      expertise: ["Python", "Machine Learning", "Cloud Architecture"],
      rating: 4.8,
      reviews: 98,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      availability: "5 hours/week"
    },
    {
      id: 3,
      name: "Emily Johnson",
      title: "Product Manager",
      expertise: ["Product Strategy", "UX Design", "Agile"],
      rating: 4.9,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      availability: "8 hours/week"
    }
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Find Your Mentor</h1>
          <p className="mt-4 text-lg text-gray-500">Connect with experienced professionals who can guide your learning journey</p>
        </div>

        <div className="mt-8">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Search by expertise, name, or keywords..."
            />
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {mentors.map((mentor) => (
            <div key={mentor.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white">
              <div className="p-6">
                <div className="flex items-center">
                  <img className="h-16 w-16 rounded-full" src={mentor.image} alt={mentor.name} />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{mentor.name}</h3>
                    <p className="text-sm text-gray-500">{mentor.title}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400" />
                    <span className="ml-1 text-sm text-gray-600">{mentor.rating}</span>
                    <span className="mx-1 text-gray-400">·</span>
                    <span className="text-sm text-gray-600">{mentor.reviews} reviews</span>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {mentor.expertise.map((skill) => (
                      <span key={skill} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Available {mentor.availability}</span>
                </div>
                <div className="mt-6 flex space-x-3">
                  <button className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700">
                    Schedule Session
                  </button>
                  <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                    <MessageSquare className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}