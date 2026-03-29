import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// Import studio images for random display
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

import project0Image1 from '../assets/works/P00/8102.300_1.jpg';
import project0Image2 from '../assets/works/P00/8102.300_2.jpg';
import project0Image3 from '../assets/works/P00/8102.300_3.jpg';
import project0Image4 from '../assets/works/P00/8102.300_4.jpg';
import project0Image5 from '../assets/works/P00/8102.300_5.jpg';
import project0Image6 from '../assets/works/P00/8102.300_6.jpg';
import project0Image7 from '../assets/works/P00/8102.300_7.jpg';
import project0Image8 from '../assets/works/P00/8102.300_8.jpg';
import project0Image9 from '../assets/works/P00/8102.300_9.jpg';
import project0Image10 from '../assets/works/P00/8102.300_10.jpg';
import project0Image11 from '../assets/works/P00/8102.300_11.jpg';
import project0Image12 from '../assets/works/P00/8102.300_12.jpg';
import project0Image13 from '../assets/works/P00/8102.300_13.jpg';
import project1Image1 from '../assets/works/P01/3202.602_1.jpg';
import project2Image1 from '../assets/works/P02/3202.1002_1.jpg';
import project2Image2 from '../assets/works/P02/3202.1002_2.jpg';
import project3Image1 from '../assets/works/P03/3202.1101_1.jpg';
import project3Image2 from '../assets/works/P03/3202.1101_2.jpg';
import project3Image3 from '../assets/works/P03/3202.1101_3.jpg';
import project4Image1 from '../assets/works/P04/3202.1201_1.jpg';
import project4Image2 from '../assets/works/P04/3202.1201_2.jpg';
import project5Image1 from '../assets/works/P05/4202.301_1.jpg';
import project6Image1 from '../assets/works/P06/4202.0201_1.jpg';
import project6Image2 from '../assets/works/P06/4202.0201_2.jpg';
import project6Image3 from '../assets/works/P06/4202.0201_3.jpg';
import project7Image1 from '../assets/works/P07/4202.601_1.jpg';
import project7Image2 from '../assets/works/P07/4202.601_2.jpg';
import project7Image3 from '../assets/works/P07/4202.601_3.jpg';
import project7Image4 from '../assets/works/P07/4202.601_4.jpg';
import project7Image5 from '../assets/works/P07/4202.601_5.jpg';
import project8Image1 from '../assets/works/P08/4202.901_1.jpg';
import project8Image2 from '../assets/works/P08/4202.901_2.jpg';
import project9Image1 from '../assets/works/P09/5202.501_1.jpg';
import project9Image2 from '../assets/works/P09/5202.501_2.jpg';


interface Artwork {
  id: string;
  number: string;
  title: string;
  year: string;
  medium: string;
  description: string;
  images?: string[];
}

// ============================================
// Sample artwork data - replace with actual portfolio pieces
const artworks: Artwork[] = [
  {
    id: "9",
    number: "09",
    title: "Vented Storage with Sign",
    year: "2025",
    medium: "stoneware, soda ash",
    description: "",
    images: [project9Image1, project9Image2]
  },
  {
    id: "8",
    number: "08",
    title: "Lacrymatory",
    year: "2025",
    medium: "earthenware, glaze",
    description: "",
    images: [project8Image1, project8Image2]
  },
  {
    id: "7",
    number: "07",
    title: "Storage with Earmark and Three-Part Lid",
    year: "2024",
    medium: "earthenware, terra sigillata, soda ash based laundry detergent",
    description: "container with a three part lid, made entirely from 2mm clay sheets",
    images: [project7Image1, project7Image2, project7Image5, project7Image4,]
  },
  {
    id: "6",
    number: "06",
    title: "Enshrining a Tree",
    year: "2023",
    medium: "earthenware, terra sigillata",
    description: "Description of project six.",
    images: [project6Image1, project6Image2, project6Image3]
  },
  {
    id: "5",
    number: "05",
    title: "Altar/Split Jar with Fat Hat",
    year: "2023",
    medium: "wood, ceramic, mirror-polished aluminum, remote operated candles",
    description: "with Jenna Graziano",
    images: [project5Image1]
  },
  {
    id: "4",
    number: "04",
    title: "Land Boat",
    year: "2023",
    medium: "earthenware",
    description: "",
    images: [project4Image1, project4Image2]
  },
  {
    id: "3",
    number: "03",
    title: "Stack",
    year: "2023",
    medium: "earthenware, glaze",
    description: "",
    images: [project3Image1, project3Image2, project3Image3]
  },
  {
    id: "2",
    number: "02",
    title: "Lintel Model",
    year: "2023",
    medium: "earthenware",
    description: "",
    images: [project2Image1, project2Image2]

  },
  {
    id: "1",
    number: "01",
    title: "Dancing Jug",
    year: "2018",
    medium: "stoneware and terra sigillata",
    description: "",
    images: [project1Image1]
  },
  {
    id: "0",
    number: "00",
    title: "Amoeba Wrestling",
    year: "2018",
    medium: "stoneware, oxides, glaze",
    description: "with Noah Tavlin",
    images: [project0Image1, project0Image2, project0Image3, project0Image4, project0Image5, project0Image6, project0Image7, project0Image8, project0Image9, project0Image10, project0Image11, project0Image12, project0Image13]
  }
];


// ============================================
// PASTE YOUR STUDIO IMAGES ARRAY HERE
const studioImages = [studio1, studio2, studio3, studio4, studio5, studio6, studio7, studio8, studio9, studio10, studio11, studio12, studio13, studio14, studio15, studio16, studio17, studio18, studio19, studio20, studio21, studio22, studio23, studio26, studio27, studio28, studio29, studio30, studio31, studio32, studio33, studio34, studio35, studio36, studio37, studio38, studio39, studio40, studio41, studio42, studio43, studio44, studio45, studio46, studio47, studio48, studio49, studio50, studio51, studio52, studio53, studio54, studio55, studio56, studio57, studio58, studio59, studio60];
// ============================================


type IndexProps = { showWorksTable?: boolean };

function Index({ showWorksTable = false }: IndexProps) {
  const [detailWork, setDetailWork] = useState<Artwork | null>(null);
  const [detailImageIndex, setDetailImageIndex] = useState(0);
  const [visitedWorks, setVisitedWorks] = useState<Set<string>>(new Set());
  const currentYear = new Date().getFullYear();

  const openDetail = (work: Artwork, imageIndex = 0) => {
    setDetailWork(work);
    const imgs = work.images ?? [];
    setDetailImageIndex(
      imgs.length ? Math.min(Math.max(0, imageIndex), imgs.length - 1) : 0
    );
    setVisitedWorks((prev) => new Set(prev).add(work.id));
  };

  const closeDetail = () => {
    setDetailWork(null);
  };

  // Group artworks by year
  const worksByYear = artworks.reduce((acc, work) => {
    if (!acc[work.year]) {
      acc[work.year] = [];
    }
    acc[work.year].push(work);
    return acc;
  }, {} as Record<string, typeof artworks>);

  // Sort years in descending order
  const sortedYears = Object.keys(worksByYear).sort((a, b) => parseInt(b) - parseInt(a));

  // Get 3 random studio images
  const getRandomStudioImages = () => {
    const shuffled = [...studioImages].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  };

  const randomStudioImages = getRandomStudioImages();

  useEffect(() => {
    if (!detailWork) return;
    const images = detailWork.images ?? [];
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDetailWork(null);
      if (images.length <= 1) return;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        setDetailImageIndex((i) => (i - 1 + images.length) % images.length);
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        setDetailImageIndex((i) => (i + 1) % images.length);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [detailWork]);

  useEffect(() => {
    if (!detailWork) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [detailWork]);

  const detailImages = detailWork?.images ?? [];
  const detailSrc =
    detailImages.length > 0 ? detailImages[detailImageIndex] : null;

  return (
    <div className="min-h-screen bg-white font-mono text-black text-sm flex flex-col">
      {/* Project detail: white floating panel */}
      {detailWork && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/25"
          onClick={closeDetail}
          role="presentation"
        >
          <div
            className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-sm border border-gray-200 bg-white shadow-lg text-left"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="work-detail-title"
          >
            <button
              type="button"
              className="absolute top-2 right-3 z-10 text-gray-500 hover:text-black text-2xl leading-none font-light"
              onClick={closeDetail}
              aria-label="Close"
            >
              ×
            </button>
            <div className="p-5 pr-10 space-y-4 text-gray-800">
              <div>
                <p id="work-detail-title" className="text-sm font-medium text-black">
                  {detailWork.title}
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  {detailWork.number} · {detailWork.year}
                </p>
                <p className="text-sm mt-3 leading-relaxed">{detailWork.medium}</p>
                {detailWork.description ? (
                  <p className="text-sm mt-2 leading-relaxed">{detailWork.description}</p>
                ) : null}
              </div>

              {detailSrc ? (
                <div className="space-y-3">
                  <div className="flex items-center justify-center min-h-[200px] bg-gray-50 border border-gray-100 rounded-sm p-2">
                    <img
                      src={detailSrc}
                      alt={`${detailWork.title} — ${detailImageIndex + 1} of ${detailImages.length}`}
                      className="max-h-[min(52vh,520px)] w-full object-contain"
                    />
                  </div>
                  {detailImages.length > 1 ? (
                    <div className="flex items-center justify-center gap-4 text-sm">
                      <button
                        type="button"
                        className="px-2 py-1 text-blue-600 hover:underline disabled:opacity-40 disabled:no-underline"
                        disabled={detailImages.length <= 1}
                        onClick={() =>
                          setDetailImageIndex(
                            (i) => (i - 1 + detailImages.length) % detailImages.length
                          )
                        }
                        aria-label="Previous image"
                      >
                        ←
                      </button>
                      <span className="text-gray-500 text-xs tabular-nums">
                        {detailImageIndex + 1} / {detailImages.length}
                      </span>
                      <button
                        type="button"
                        className="px-2 py-1 text-blue-600 hover:underline disabled:opacity-40 disabled:no-underline"
                        disabled={detailImages.length <= 1}
                        onClick={() =>
                          setDetailImageIndex((i) => (i + 1) % detailImages.length)
                        }
                        aria-label="Next image"
                      >
                        →
                      </button>
                    </div>
                  ) : null}
                </div>
              ) : (
                <div className="h-40 border border-dashed border-gray-300 flex items-center justify-center text-xs text-gray-500">
                  No images
                </div>
              )}
            </div>
          </div>
        </div>
      )}

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

        {/* Three random studio images */}
        <div className="mt-8">
          <div className="flex gap-4 items-start">
            {randomStudioImages.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Studio photo ${idx + 1}`}
                className="h-[110px] object-contain"
              />
            ))}
          </div>
          
        {/* Navigation links */}
        <nav className="mt-6">
          <ul className="space-y-2 text-sm">
            <li>
              {showWorksTable ? (
                <span>Works</span>
              ) : (
                <Link
                  to="/works"
                  className="hover:underline text-blue-600 visited:text-purple-600"
                >
                  Works
                </Link>
              )}
            </li>
            <li>
              <Link
                to="/studio"
                className="hover:underline text-blue-600 visited:text-purple-600"
              >
                Studio
              </Link>
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
      </div>

      {/* Full-width table section grouped by year */}
      {showWorksTable && (
        <div className="space-y-0 mt-8">
          {sortedYears.map((year) => (
            <div key={year}>
              {/* Year header row */}
              <div className="flex border-b border-gray-200 px-6">
                {/* Year as clickable link - indented like navigation */}
                <div className="flex-1 py-2 pr-6 pl-0">
                  <div className="text-left text-sm text-black">{year}</div>
                </div>

                {/* Plus/minus sign on the right */}
                <div className="w-8 py-2 text-gray-400 text-sm" />
              </div>

              {/* Projects for this year */}
              {worksByYear[year].map((work) => (
                <div
                  key={work.id}
                  className="flex border-b border-gray-200 px-6 items-start gap-2 sm:gap-3"
                >
                  <div className="w-[min(46%,260px)] shrink-0 py-2 pr-2 min-w-0">
                    <button
                      type="button"
                      onClick={() => openDetail(work, 0)}
                      className={`text-left w-full hover:underline text-sm leading-snug ${
                        visitedWorks.has(work.id) ? "text-purple-600" : "text-blue-600"
                      }`}
                    >
                      {work.title}
                    </button>
                  </div>

                  <div className="flex-1 min-w-0 py-2 overflow-x-auto minimal-scrollbar">
                    {work.images && work.images.length > 0 ? (
                      <div className="flex flex-nowrap gap-[6px] items-center justify-start">
                        {work.images.map((image, index) => (
                          <button
                            key={index}
                            type="button"
                            onClick={() => openDetail(work, index)}
                            className="shrink-0 h-16 w-[88px] flex items-center justify-center p-0 bg-transparent border-0 rounded-none shadow-none outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-inset overflow-hidden"
                            aria-label={`Open ${work.title} — image ${index + 1}`}
                          >
                            <img
                              src={image}
                              alt=""
                            className="h-full w-full object-cover object-center block border-0 select-none pointer-events-none"
                              draggable={false}
                            />
                          </button>
                        ))}
                      </div>
                    ) : (
                      <div className="flex flex-nowrap gap-[6px] justify-start items-center">
                        <div className="h-16 w-[88px] shrink-0 bg-gray-100 flex items-center justify-center text-[10px] text-gray-400">
                          —
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}

      {/* Footer with constrained width */}
      <div className="max-w-2xl px-6 pb-6 mt-auto">
        <footer className="pt-6 border-t border-gray-300">
          <p className="text-xs text-gray-600">
            © {currentYear} Adam Cutts
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Index;
