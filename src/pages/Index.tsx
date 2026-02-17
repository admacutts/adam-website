import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
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
  imageUrl?: string;
}

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
    description: "container with a three part lid, made entirely from 2mm clay sheets.",
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
    description: "Description of project four.",
    images: [project4Image1, project4Image2]
  },
  {
    id: "3",
    number: "03",
    title: "Stack",
    year: "2023",
    medium: "earthenware, glaze",
    description: "Description of project three.",
    images: [project3Image1, project3Image2, project3Image3]
  },
  {
    id: "2",
    number: "02",
    title: "Lintel Model",
    year: "2023",
    medium: "earthenware",
    description: "Description of project two.",
    images: [project2Image1, project2Image2]

  },
  {
    id: "1",
    number: "01",
    title: "Dancing Jug",
    year: "2018",
    medium: "various stoneware and glaze works",
    description: "with Noah Tavlin",
    images: [project1Image1]
  },
  {
    id: "0",
    number: "00",
    title: "Amoeba Wrestling",
    year: "2018",
    medium: "Stoneware, oxides, glaze",
    description: "Your oldest project description goes here. This appears at the bottom of the list.",
    images: [project0Image1, project0Image2, project0Image3, project0Image4, project0Image5, project0Image6, project0Image7, project0Image8, project0Image9, project0Image10, project0Image11, project0Image12, project0Image13]
  }
];
const studioImages = [studio1, studio2, studio3, studio4, studio5, studio6, studio7, studio8, studio9, studio10, studio11, studio12, studio13, studio14, studio15, studio16, studio17, studio18, studio19, studio20, studio21, studio22];
function Index() {
  const [expandedWork, setExpandedWork] = useState<string | null>(null);
  // Random studio image selection
  const [randomStudioImage] = useState(() => {
    const randomIndex = Math.floor(Math.random() * studioImages.length);
    return studioImages[randomIndex];
  });
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

        {/* Random studio image - only show when no work is expanded */}
        {!expandedWork && (
          <div className="mt-6">
            <img
              src={randomStudioImage}
              alt="Studio image"
              className="h-[200px] object-contain"
            />
          </div>
        )}

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
              <div className="py-6 border-b border-none">
                <div className="pl-16 px-6 space-y-4 text-gray-700">
                  <p className="text-base font-medium">{work.medium}</p>
                  <p className="leading-relaxed">{work.description}</p>
                </div>

                {/* Images centered on full screen width */}
                <div className="flex flex-col items-center space-y-6 mt-6">


                  <div className="space-y-6 mt-6">
                    {work.images ? (
                      // If project has images, show them
                      work.images.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`${work.title} - Image ${index + 1}`}
                          className="w-full max-w-2xl h-[500px] object-contain border border-none"
                        />
                      ))
                    ) : (
                      // If no images, show placeholder boxes
                      <>
                        <div className="w-full bg-gray-200 border border-none flex items-center justify-center text-gray-500 min-h-[400px]">
                          No images available
                        </div>
                      </>
                    )}
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
              © 2025 Adam Cutts
            </p>
          </footer>
        </div>    
      </div>    
  ); 
} 
export default Index;
