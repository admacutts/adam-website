import { useState } from "react";
import { Link } from "react-router-dom";
import studio1 from '../assets/studio/studio1.jpg';
import studio2 from '../assets/studio/studio2.jpg';
import studio3 from '../assets/studio/studio3.jpg';
import studio4 from '../assets/studio/studio4.jpg';
import studio5 from '../assets/studio/studio5.jpg';
import studio6 from '../assets/studio/studio6.jpg';
import studio7 from '../assets/studio/studio7.jpg';
import studio8 from '../assets/studio/studio8.jpg';
import studio9 from '../assets/studio/studio9.jpg';
import studio10 from '../assets/studio/studio10.jpg';
import studio11 from '../assets/studio/studio11.jpg';
import studio12 from '../assets/studio/studio12.jpg';
import studio13 from '../assets/studio/studio13.jpg';
import studio14 from '../assets/studio/studio14.jpg';
import studio15 from '../assets/studio/studio15.jpg';
import studio16 from '../assets/studio/studio16.jpg';
import studio17 from '../assets/studio/studio17.jpg';
import studio18 from '../assets/studio/studio18.jpg';
import studio19 from '../assets/studio/studio19.jpg';
import studio20 from '../assets/studio/studio20.jpg';
import studio21 from '../assets/studio/studio21.jpg';
import studio22 from '../assets/studio/studio22.jpg';
import studio23 from '../assets/studio/studio23.jpg';
import studio26 from '../assets/studio/studio26.jpg';
import studio27 from '../assets/studio/studio27.jpg';
import studio28 from '../assets/studio/studio28.jpg';
import studio29 from '../assets/studio/studio29.jpg';
import studio30 from '../assets/studio/studio30.jpg';
import studio31 from '../assets/studio/studio31.jpg';
import studio32 from '../assets/studio/studio32.jpg';
import studio33 from '../assets/studio/studio33.jpg';
import studio34 from '../assets/studio/studio34.jpg';
import studio35 from '../assets/studio/studio35.jpg';
import studio36 from '../assets/studio/studio36.jpg';
import studio37 from '../assets/studio/studio37.jpg';
import studio38 from '../assets/studio/studio38.jpg';
import studio39 from '../assets/studio/studio39.jpg';
import studio40 from '../assets/studio/studio40.jpg';
import studio41 from '../assets/studio/studio41.jpg';
import studio42 from '../assets/studio/studio42.jpg';
import studio43 from '../assets/studio/studio43.jpg';
import studio44 from '../assets/studio/studio44.jpg';
import studio45 from '../assets/studio/studio45.jpg';
import studio46 from '../assets/studio/studio46.jpg';
import studio47 from '../assets/studio/studio47.jpg';
import studio48 from '../assets/studio/studio48.jpg';
import studio49 from '../assets/studio/studio49.jpg';
import studio50 from '../assets/studio/studio50.jpg';
import studio51 from '../assets/studio/studio51.jpg';
import studio52 from '../assets/studio/studio52.jpg';
import studio53 from '../assets/studio/studio53.jpg';
import studio54 from '../assets/studio/studio54.jpg';
import studio55 from '../assets/studio/studio55.jpg';
import studio56 from '../assets/studio/studio56.jpg';
import studio57 from '../assets/studio/studio57.jpg';
import studio58 from '../assets/studio/studio58.jpg';
import studio59 from '../assets/studio/studio59.jpg';
import studio60 from '../assets/studio/studio60.jpg';
import studio61 from '../assets/studio/studio61.jpg';
import studio62 from '../assets/studio/studio62.jpg';
import studio63 from '../assets/studio/studio63.jpg';
import studio64 from '../assets/studio/studio64.jpg';
import studio65 from '../assets/studio/studio65.jpg';
import studio66 from '../assets/studio/studio66.jpg';
import studio67 from '../assets/studio/studio67.jpg';
import studio68 from '../assets/studio/studio68.jpg';


const studioItems = [
  {
    id: "about",
    letter: "A",
    title: "About",
    content: {
      type: "bio",
      bio: "Adam Cutts is a Canadian artist and living in New York and practicing sculpture.",
      statement: 
        <div className="artist-statement space-y-4">
          <p>Reinventing the wheel over and over again.</p>
        </div>
    }
  },
  {
    id: "marginalia",
    letter: "M",
    title: "Marginalia",
    content: {
      type: "photos",
      description: "",
      images: [studio68, studio67, studio66, studio65, studio64, studio63, studio62, studio61, studio60, studio59, studio58, studio57, studio56, studio55, studio54, studio53, studio52, studio51, studio50, studio49, studio48, studio47, studio46, studio45, studio44, studio43, studio42, studio41, studio40, studio39, studio38, studio37, studio36, studio35, studio34, studio33, studio32, studio31, studio30, studio29, studio28, studio26, studio27, studio23, studio22, studio21, studio20, studio19, studio18, studio17, studio16, studio15, studio14, studio13, studio12, studio11, studio10, studio9, studio8, studio7, studio6, studio5, studio4, studio3, studio2, studio1]
    }
  },
  {
    id: "cv",
    letter: "C",
    title: "CV",
    content: {
      type: "download",
      description: "",
      filename: "Adam_Cutts_CV.pdf"
    }
  }
];

function Studio() {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const currentYear = new Date().getFullYear();
  // Find the marginalia item for default display
  const marginaliaItem = studioItems.find(item => item.id === "marginalia");

  const toggleExpanded = (id: string) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white font-mono text-black text-sm">
      {/* Header section with constrained width */}
      <div className="max-w-2xl px-6 py-6">
        {/* Artist name and email */}
        <div className="space-y-4">
          <h1 className="text-sm font-normal">Adam Cutts</h1>
          <Link
            to="/"
            className="hover:underline text-blue-600 visited:text-purple-600"
          >
            Home
          </Link>
          <p className="text-sm">adamcutts . a @ gmail.com</p>
        </div>

        {/* Navigation links */}
        <nav className="mt-6">
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/works"
                className="hover:underline text-blue-600 visited:text-purple-600"
              >
                Works
              </Link>
            </li>
            <li>
              <span>Studio</span>
            </li>
            <li>
              <Link
                to="/projects"
                className="hover:underline text-blue-600 visited:text-purple-600"
              >
                Projects
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Full-width table section */}
      <div className="space-y-0">
        {studioItems.filter(item => item.id !== "marginalia").map((item) => (
          <div key={item.id}>
            {/* Table row */}
            <div className="flex border-b border-gray-200 px-6">
              {/* Title column - clickable */}
              <div className="flex-1 py-2 pr-4 min-w-0">
                <button
                  onClick={() => toggleExpanded(item.id)}
                  className="text-left w-full hover:underline text-blue-600 visited:text-purple-600 text-sm"
                >
                  {item.title}
                </button>
              </div>

              {/* Plus sign indicator */}
              <div className="w-8 py-2 text-gray-400 text-sm shrink-0">
                {expandedItem === item.id ? '−' : '+'}
              </div>
            </div>

            {/* Expanded content */}
            {expandedItem === item.id && (
              <div className="py-4 border-b border-gray-200 px-6">
                <div className="space-y-3 text-gray-700 text-sm">
                  {item.content.type === 'bio' && (
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-sm font-medium mb-2">bio</h3>
                        <p className="leading-relaxed">{item.content.bio}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium mb-2">statement</h3>
                        <p className="leading-relaxed">{item.content.statement}</p>

                      </div>
                    </div>
                  )}

                  {item.content.type === 'photos' && (
                    <div className="space-y-3">
                      {item.content.description ? (
                        <p className="font-medium">{item.content.description}</p>
                      ) : null}

                      {/* Horizontal scrolling photo gallery - newest first */}
                      <div className="mt-4 overflow-x-auto minimal-scrollbar">
                        <div className="flex space-x-3 pb-2" style={{ width: 'max-content' }}>
                          {(item.content.images ?? []).map((imgSrc, idx) => (
                            <img
                              key={idx}
                              src={imgSrc}
                              alt={`Studio photo ${idx + 1}`}
                              className="h-[280px] w-auto max-w-[min(90vw,420px)] object-contain shrink-0"
                            />
                          ))}
                        </div>
                      </div>

                      {/* Scroll hint */}
                      <p className="text-xs text-gray-500 italic">Scroll horizontally to view older photos →</p>
                    </div>
                  )}

                  {item.content.type === 'download' && (
                    <div className="space-y-3">
                      {item.content.description ? (
                        <p className="font-medium">{item.content.description}</p>
                      ) : null}
                      <a
                        href="#"
                        className="inline-block text-blue-600 hover:underline text-sm"
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

      {/* Default Marginalia Gallery - always visible */}
      {marginaliaItem && marginaliaItem.content.type === 'photos' && (
        <div className="py-4 border-b border-gray-200">
          <div className="mt-2 overflow-x-auto minimal-scrollbar">
            <div className="flex space-x-3 pb-2 px-6" style={{ width: 'max-content' }}>
              {(marginaliaItem.content.images ?? []).map((imgSrc, idx) => (
                <img
                  key={idx}
                  src={imgSrc}
                  alt={`Studio photo ${idx + 1}`}
                  className="h-[280px] w-auto max-w-[min(90vw,420px)] object-contain shrink-0"
                />
              ))}
            </div>
          </div>

          {/* Scroll hint */}
          <div className="px-6">
            <p className="text-xs text-gray-500 italic">Scroll horizontally →</p>
          </div>
        </div>
      )}

      
      {/* Footer with constrained width */}
      <div className="max-w-2xl px-6">
        <footer className="mt-12 pt-6 border-t border-gray-300">
          <p className="text-xs text-gray-600">
            © {currentYear} Adam Cutts
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Studio;