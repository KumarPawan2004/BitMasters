import React from 'react';
import { Search } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      id: 1,
      title: "AI-Powered Learning Assistant",
      description: "Building an intelligent tutoring system using machine learning to provide personalized learning experiences.",
      skills: ["Python", "Machine Learning", "React", "Node.js"],
      teamSize: "4-6",
      difficulty: "Advanced",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      title: "Interactive Learning Platform",
      description: "Creating an engaging platform for interactive coding tutorials and real-time collaboration.",
      skills: ["JavaScript", "WebRTC", "React", "Firebase"],
      teamSize: "3-5",
      difficulty: "Intermediate",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      title: "Educational Game Development",
      description: "Developing educational games to teach programming concepts through interactive gameplay.",
      skills: ["Unity", "C#", "Game Design", "UI/UX"],
      teamSize: "2-4",
      difficulty: "Intermediate",
      image: "https://images.unsplash.com/photo-1553481187-be93c21490a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Browse Projects</h1>
          <p className="mt-4 text-lg text-gray-500">Find exciting projects to collaborate on or start your own</p>
        </div>

        <div className="mt-8">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Search projects..."
            />
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={project.image} alt={project.title} />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                  <p className="mt-3 text-base text-gray-500">{project.description}</p>
                  <div className="mt-4">
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill) => (
                        <span key={skill} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="text-sm text-gray-500">
                      Team Size: {project.teamSize}
                    </div>
                  </div>
                  <div className="text-sm font-medium text-indigo-600">
                    {project.difficulty}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}