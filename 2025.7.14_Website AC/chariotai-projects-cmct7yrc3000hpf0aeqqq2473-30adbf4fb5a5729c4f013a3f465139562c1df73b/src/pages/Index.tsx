          import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

interface Artwork {
  id: string;
  number: string;
  title: string;
  year: string;
  medium: string;
  description: string;
  imageUrl?: string;
}

// Sample artwork data - replace with actual portfolio pieces
const artworks: Artwork[] = [
  {
    id: "8",
    number: "08",
    title: "Latest Project",
    year: "2024",
    medium: "Mixed media",
    description: "Your most recent artwork description goes here. This will be the first item visitors see."
  },
  {
    id: "7",
    number: "07",
    title: "Recent Work",
    year: "2024",
    medium: "Installation",
    description: "Description of your second most recent work."
  },
  {
    id: "6",
    number: "06",
    title: "Project Six",
    year: "2023",
    medium: "Video",
    description: "Description of project six."
  },
  {
    id: "5",
    number: "05",
    title: "Project Five",
    year: "2023",
    medium: "Sculpture",
    description: "Description of project five."
  },
  {
    id: "4",
    number: "04",
    title: "Project Four",
    year: "2023",
    medium: "Mixed media",
    description: "Description of project four."
  },
  {
    id: "3",
    number: "03",
    title: "Project Three",
    year: "2022",
    medium: "Installation",
    description: "Description of project three."
  },
  {
    id: "2",
    number: "02",
    title: "Project Two",
    year: "2022",
    medium: "Photography",
    description: "Description of project two."
  },
  {
    id: "1",
    number: "01",
    title: "Project One",
    year: "2021",
    medium: "Painting",
    description: "Description of project one."
  },
  {
    id: "0",
    number: "00",
    title: "First Project",
    year: "2021",
    medium: "Drawing",
    description: "Your oldest project description goes here. This appears at the bottom of the list."
  }
];

function Index() {
  const [expandedWork, setExpandedWork] = useState<string | null>(null);

  const toggleExpanded = (id: string) => {
    setExpandedWork(expandedWork === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white font-mono text-black">
      {/* Header section with constrained width */}
      <div className="max-w-2xl px-6 py-8">
        {/* Artist name and email */}
        <div className="space-y-6">
          <h1 className="text-base font-normal">Adam Cutts</h1>
          <p className="text-base">adamcutts . a @ gmail.com</p>
        </div>

        {/* Navigation links */}
        <nav className="mt-8">
          <ul className="space-y-3 text-base">
            <li>
              <span className="text-base">Works</span>
            </li>
            <li>
              <Link 
                to="/studio" 
                className="hover:underline text-blue-600 visited:text-purple-600"
              >
                Studio
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Full-width table section */}
      <div className="space-y-0">
        {artworks.map((work) => (
          <div key={work.id}>
            {/* Table row */}
            <div className="flex border-b border-gray-200 px-6">
              {/* Project number column */}
              <div className="w-16 py-3 pr-6 text-gray-600 font-mono">
                {work.number}
              </div>
              
              {/* Title column - clickable */}
              <div className="flex-1 py-3 pr-6">
                <button
                  onClick={() => toggleExpanded(work.id)}
                  className="text-left w-full hover:underline text-blue-600 visited:text-purple-600 text-base"
                >
                  {work.title}
                </button>
              </div>

              {/* Year column */}
              <div className="w-20 py-3 pr-6 text-gray-600">
                {work.year}
              </div>

              {/* Plus sign indicator */}
              <div className="w-8 py-3 text-gray-400 text-base">
                {expandedWork === work.id ? '−' : '+'}
              </div>
            </div>

            {/* Expanded content */}
            {expandedWork === work.id && (
              <div className="pl-16 py-6 border-b border-gray-200 px-6">
                <div className="space-y-4 text-gray-700">
                  <p className="text-base font-medium">{work.medium}</p>
                  <p className="leading-relaxed">{work.description}</p>
                  
                  {/* Placeholder for artwork images - stacked vertically, full width */}
                  <div className="space-y-6 mt-6">
                    <div className="w-full bg-gray-200 border border-gray-300 flex items-center justify-center text-gray-500 min-h-[400px]">
                      [Image 1]
                    </div>
                    <div className="w-full bg-gray-200 border border-gray-300 flex items-center justify-center text-gray-500 min-h-[400px]">
                      [Image 2]
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer with constrained width */}
      <div className="max-w-2xl px-6">
        <footer className="mt-16 pt-8 border-t border-gray-300">
          <p className="text-sm text-gray-600">
            © 2024 Adam Cutts
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Index;