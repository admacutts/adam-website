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
    id: "project-1",
    number: "01",
    title: "Untitled Series #1",
    year: "2024",
    medium: "Mixed media on canvas",
    description: "A exploration of texture and form through layered materials and found objects."
  },
  {
    id: "project-2", 
    number: "02",
    title: "Digital Landscapes",
    year: "2023",
    medium: "Digital photography",
    description: "Documentation of urban spaces transformed through digital manipulation."
  },
  {
    id: "project-3",
    number: "03",
    title: "Sculptural Studies",
    year: "2023",
    medium: "Clay and metal",
    description: "Small-scale sculptures investigating the relationship between organic and industrial forms."
  },
  {
    id: "project-4",
    number: "04",
    title: "Color Field Experiments",
    year: "2022",
    medium: "Acrylic on paper",
    description: "A series of color studies exploring emotional responses to chromatic relationships."
  }
];

function Portfolio() {
  const [expandedWork, setExpandedWork] = useState<string | null>(null);

  const toggleExpanded = (id: string) => {
    setExpandedWork(expandedWork === id ? null : id);
  };

  return (
    <Layout>
      <div className="space-y-8">
        {/* Page title */}
        <div>
          <h1 className="text-base font-normal mb-4">Portfolio</h1>
          <Link to="/" className="text-blue-600 hover:underline text-base">
            ← Back to home
          </Link>
        </div>

        {/* Portfolio table */}
        <div className="space-y-0">
          {artworks.map((work) => (
            <div key={work.id}>
              {/* Table row */}
              <div className="flex border-b border-gray-300">
                {/* Project number column */}
                <div className="w-16 py-3 pr-6 text-gray-600 font-mono">
                  {work.number}
                </div>
                
                {/* Title column - clickable */}
                <div className="flex-1 py-3">
                  <button
                    onClick={() => toggleExpanded(work.id)}
                    className="text-left w-full hover:underline text-blue-600 visited:text-purple-600 text-base"
                  >
                    {work.title} ({work.year})
                  </button>
                </div>
              </div>

              {/* Expanded content */}
              {expandedWork === work.id && (
                <div className="pl-16 py-6 border-b border-gray-300">
                  <div className="space-y-4 text-gray-700">
                    <p className="text-base font-medium">{work.medium}</p>
                    <p className="leading-relaxed">{work.description}</p>
                    
                    {/* Placeholder for artwork images */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      <div className="aspect-square bg-gray-200 border border-gray-300 flex items-center justify-center text-gray-500">
                        [Image 1]
                      </div>
                      <div className="aspect-square bg-gray-200 border border-gray-300 flex items-center justify-center text-gray-500">
                        [Image 2]
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact note */}
        <div className="mt-12 pt-8 border-t border-gray-300">
          <p className="text-base text-gray-600">
            For inquiries about specific works or commissions, please contact via email.
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default Portfolio;