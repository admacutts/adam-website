import { useState } from "react";
import { Link } from "react-router-dom";

const studioItems = [
  {
    id: "about",
    letter: "A",
    title: "About",
    content: {
      type: "bio",
      bio: "Adam Cutts is a contemporary artist working primarily in mixed media and installation. His work explores themes of memory, place, and the intersection of digital and physical spaces. Based in [Location], his practice encompasses sculpture, video, and site-specific interventions.",
      statement: "My artistic practice investigates the liminal spaces between the digital and physical worlds, examining how technology mediates our understanding of place and memory. Through a combination of traditional materials and digital processes, I create works that question the boundaries between virtual and tangible experience."
    }
  },
  {
    id: "marginalia",
    letter: "M",
    title: "Marginalia and misc. photos",
    content: {
      type: "photos",
      description: "Studio process, work in progress, and miscellaneous documentation"
    }
  },
  {
    id: "cv",
    letter: "C",
    title: "CV",
    content: {
      type: "download",
      description: "Download curriculum vitae",
      filename: "Adam_Cutts_CV.pdf"
    }
  }
];

function Studio() {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const toggleExpanded = (id: string) => {
    setExpandedItem(expandedItem === id ? null : id);
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
              <Link 
                to="/" 
                className="hover:underline text-blue-600 visited:text-purple-600"
              >
                Works
              </Link>
            </li>
            <li>
              <span className="text-base">Studio</span>
            </li>
          </ul>
        </nav>
      </div>

      {/* Full-width table section */}
      <div className="space-y-0">
        {studioItems.map((item) => (
          <div key={item.id}>
            {/* Table row */}
            <div className="flex border-b border-gray-200 px-6">
              {/* Letter column */}
              <div className="w-16 py-3 pr-6 text-gray-600 font-mono">
                {item.letter}
              </div>
              
              {/* Title column - clickable */}
              <div className="flex-1 py-3 pr-6">
                <button
                  onClick={() => toggleExpanded(item.id)}
                  className="text-left w-full hover:underline text-blue-600 visited:text-purple-600 text-base"
                >
                  {item.title}
                </button>
              </div>

              {/* Plus sign indicator */}
              <div className="w-8 py-3 text-gray-400 text-base">
                {expandedItem === item.id ? '−' : '+'}
              </div>
            </div>

            {/* Expanded content */}
            {expandedItem === item.id && (
              <div className="pl-16 py-6 border-b border-gray-200 px-6">
                <div className="space-y-4 text-gray-700">
                  {item.content.type === 'bio' && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-base font-medium mb-3">Biography</h3>
                        <p className="leading-relaxed">{item.content.bio}</p>
                      </div>
                      <div>
                        <h3 className="text-base font-medium mb-3">Artist Statement</h3>
                        <p className="leading-relaxed">{item.content.statement}</p>
                      </div>
                    </div>
                  )}
                  
                  {item.content.type === 'photos' && (
                    <div className="space-y-4">
                      <p className="text-base font-medium">{item.content.description}</p>
                      
                      {/* Horizontal scrolling photo gallery - newest first */}
                      <div className="mt-6 overflow-x-auto">
                        <div className="flex space-x-4 pb-4" style={{ width: 'max-content' }}>
                          <div className="bg-gray-200 border border-gray-300 flex items-center justify-center text-gray-500 flex-shrink-0" style={{ width: '400px', height: '400px' }}>
                            [Newest Photo]
                          </div>
                          <div className="bg-gray-200 border border-gray-300 flex items-center justify-center text-gray-500 flex-shrink-0" style={{ width: '400px', height: '400px' }}>
                            [Recent Photo]
                          </div>
                          <div className="bg-gray-200 border border-gray-300 flex items-center justify-center text-gray-500 flex-shrink-0" style={{ width: '400px', height: '400px' }}>
                            [Studio Photo 1]
                          </div>
                          <div className="bg-gray-200 border border-gray-300 flex items-center justify-center text-gray-500 flex-shrink-0" style={{ width: '400px', height: '400px' }}>
                            [Studio Photo 2]
                          </div>
                          <div className="bg-gray-200 border border-gray-300 flex items-center justify-center text-gray-500 flex-shrink-0" style={{ width: '400px', height: '400px' }}>
                            [Process Photo 1]
                          </div>
                          <div className="bg-gray-200 border border-gray-300 flex items-center justify-center text-gray-500 flex-shrink-0" style={{ width: '400px', height: '400px' }}>
                            [Oldest Photo]
                          </div>
                        </div>
                      </div>
                      
                      {/* Scroll hint */}
                      <p className="text-sm text-gray-500 italic">Scroll horizontally to view older photos →</p>
                    </div>
                  )}
                  
                  {item.content.type === 'download' && (
                    <div className="space-y-4">
                      <p className="text-base font-medium">{item.content.description}</p>
                      <a 
                        href="#" 
                        className="inline-block text-blue-600 hover:underline text-base"
                      >
                        Download {item.content.filename}
                      </a>
                    </div>
                  )}
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

export default Studio;