import React from 'react';
import { Search, Users, Clock, Briefcase } from 'lucide-react';

export function Teams() {
  const teams = [
    {
      id: 1,
      name: "AI Learning Assistant",
      description: "Building an intelligent tutoring system using ML to provide personalized learning experiences.",
      members: 4,
      maxSize: 6,
      skills: ["Python", "Machine Learning", "React"],
      commitment: "10-15 hours/week",
      duration: "3 months",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      name: "Educational Game Dev",
      description: "Creating engaging educational games to teach programming concepts through interactive gameplay.",
      members: 3,
      maxSize: 5,
      skills: ["Unity", "C#", "Game Design"],
      commitment: "8-12 hours/week",
      duration: "4 months",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      name: "Learning Analytics",
      description: "Developing a dashboard for tracking and visualizing learning progress and outcomes.",
      members: 2,
      maxSize: 4,
      skills: ["Data Analysis", "Vue.js", "D3.js"],
      commitment: "12-15 hours/week",
      duration: "2 months",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Join a Team</h1>
          <p className="mt-4 text-lg text-gray-500">Find the perfect team to collaborate with on exciting projects</p>
        </div>

        <div className="mt-8">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Search teams by name, skills, or description..."
            />
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teams.map((team) => (
            <div key={team.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={team.image} alt={team.name} />
              </div>
              <div className="flex-1 p-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{team.name}</h3>
                  <p className="mt-3 text-base text-gray-500">{team.description}</p>
                </div>
                <div className="mt-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{team.members}/{team.maxSize} members</span>
                  </div>
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{team.commitment}</span>
                  </div>
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    <Briefcase className="h-4 w-4 mr-1" />
                    <span>{team.duration}</span>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex flex-wrap gap-2">
                    {team.skills.map((skill) => (
                      <span key={skill} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-6">
                  <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700">
                    Apply to Join
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