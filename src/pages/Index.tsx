import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { artworks, type Artwork } from "../lib/works";
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
import studio61 from '../assets/studio/studio61.jpg';
import studio62 from '../assets/studio/studio62.jpg';
import studio63 from '../assets/studio/studio63.jpg';
import studio64 from '../assets/studio/studio64.jpg';
import studio65 from '../assets/studio/studio65.jpg';
import studio66 from '../assets/studio/studio66.jpg';
import studio67 from '../assets/studio/studio67.jpg';
import studio68 from '../assets/studio/studio68.jpg';
import studio69 from '../assets/studio/studio69.jpg';
import studio70 from '../assets/studio/studio70.jpg';
import studio71 from '../assets/studio/studio71.jpg';
import studio72 from '../assets/studio/studio72.jpg';
import studio73 from '../assets/studio/studio73.jpg';
import studio74 from '../assets/studio/studio74.jpg';
import studio75 from '../assets/studio/studio75.jpg';
import studio76 from '../assets/studio/studio76.jpg';
import studio77 from '../assets/studio/studio77.jpg';
import studio78 from '../assets/studio/studio78.jpg';
import studio79 from '../assets/studio/studio79.jpg';
import studio80 from '../assets/studio/studio80.jpg';
import studio81 from '../assets/studio/studio81.jpg';
import studio82 from '../assets/studio/studio82.jpg';
import studio83 from '../assets/studio/studio83.jpg';
import studio84 from '../assets/studio/studio84.jpg';
import studio85 from '../assets/studio/studio85.jpg';
import studio86 from '../assets/studio/studio86.jpg';
import studio87 from '../assets/studio/studio87.jpg';
import studio88 from '../assets/studio/studio88.jpg';
import studio89 from '../assets/studio/studio89.jpg';
import studio90 from '../assets/studio/studio90.jpg';
import studio91 from '../assets/studio/studio91.jpg';
import studio92 from '../assets/studio/studio92.jpg';
import studio93 from '../assets/studio/studio93.jpg';
import studio94 from '../assets/studio/studio94.jpg';
import studio95 from '../assets/studio/studio95.jpg';
import studio96 from '../assets/studio/studio96.jpg';
import studio97 from '../assets/studio/studio97.jpg';
import studio98 from '../assets/studio/studio98.jpg';
import studio99 from '../assets/studio/studio99.jpg';
import studio100 from '../assets/studio/studio100.jpg';


// ============================================
// PASTE YOUR STUDIO IMAGES ARRAY HERE
const studioImages = [studio1, studio2, studio3, studio4, studio5, studio6, studio7, studio8, studio9, studio10, studio11, studio12, studio13, studio14, studio15, studio16, studio17, studio18, studio19, studio20, studio21, studio22, studio23, studio26, studio27, studio28, studio29, studio30, studio31, studio32, studio33, studio34, studio35, studio36, studio37, studio38, studio39, studio40, studio41, studio42, studio43, studio44, studio45, studio46, studio47, studio48, studio49, studio50, studio51, studio52, studio53, studio54, studio55, studio56, studio57, studio58, studio59, studio60, studio61, studio62, studio63, studio64, studio65, studio66, studio67, studio68, studio69, studio70, studio71, studio72, studio73, studio74, studio75, studio76, studio77, studio78, studio79, studio80, studio81, studio82, studio83, studio84, studio85, studio86, studio87, studio88, studio89, studio90, studio91, studio92, studio93, studio94, studio95, studio96, studio97, studio98, studio99, studio100];
// ============================================

function pickRandomStudioImages(count = 3) {
  return [...studioImages].sort(() => 0.5 - Math.random()).slice(0, count);
}

function StudioThumbStrip({
  images,
  gapClassName = "gap-4",
  className = "",
  heightPx,
}: {
  images: string[];
  gapClassName?: string;
  className?: string;
  /** When set, every thumbnail uses this exact height (works page index band). */
  heightPx?: number;
}) {
  const imageClassName =
    heightPx && heightPx > 0
      ? "block w-auto object-contain shrink-0"
      : "block h-[110px] w-auto object-contain shrink-0";
  const resolvedHeight = heightPx && heightPx > 0 ? heightPx : undefined;

  return (
    <div
      className={`flex items-end justify-center min-w-0 ${gapClassName} ${className}`.trim()}
      style={resolvedHeight ? { height: resolvedHeight } : undefined}
    >
      {images.map((img, idx) => (
        <img
          key={`${img}-${idx}`}
          src={img}
          alt={`Studio photo ${idx + 1}`}
          className={imageClassName}
          style={resolvedHeight ? { height: resolvedHeight } : undefined}
        />
      ))}
    </div>
  );
}

type IndexProps = { showWorksTable?: boolean };

function Index({ showWorksTable = false }: IndexProps) {
  const [detailWork, setDetailWork] = useState<Artwork | null>(null);
  const [detailImageIndex, setDetailImageIndex] = useState(0);
  const [visitedWorks, setVisitedWorks] = useState<Set<string>>(new Set());
  const [homeStudioImages] = useState(() => pickRandomStudioImages());
  const [worksStudioImages, setWorksStudioImages] = useState(() =>
    pickRandomStudioImages()
  );
  const worksIndexBandRef = useRef<HTMLDivElement>(null);
  const [worksIndexBandHeight, setWorksIndexBandHeight] = useState(0);
  const currentYear = new Date().getFullYear();

  const openDetail = (work: Artwork, imageIndex = 0) => {
    setDetailWork(work);
    const imgs = work.images ?? [];
    setDetailImageIndex(
      imgs.length ? Math.min(Math.max(0, imageIndex), imgs.length - 1) : 0
    );
    setVisitedWorks((prev) => new Set(prev).add(work.id));
    if (showWorksTable) {
      setWorksStudioImages(pickRandomStudioImages());
    }
  };

  const closeDetail = () => {
    setDetailWork(null);
  };

  useEffect(() => {
    if (!showWorksTable) return;
    const el = worksIndexBandRef.current;
    if (!el) return;

    const update = () => setWorksIndexBandHeight(el.offsetHeight);
    update();

    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, [showWorksTable, worksStudioImages]);

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

      {/* Header — home: centered block; works: index + photos aligned to index height */}
      {showWorksTable ? (
        <div className="px-4 sm:px-6 pt-6 pb-4 overflow-x-clip">
          <h1 className="text-sm font-normal mb-4">Adam Cutts</h1>
          <div className="grid grid-cols-[auto_1fr] gap-3 sm:gap-8 items-start min-w-0">
            <div className="shrink-0">
              <div ref={worksIndexBandRef}>
                <div className="space-y-4">
                  <Link
                    to="/"
                    className="hover:underline text-blue-600 visited:text-purple-600 text-sm"
                  >
                    Home
                  </Link>
                  <p className="text-sm">adamcutts . a @ gmail.com</p>
                </div>
                <nav className="mt-6">
                  <ul className="space-y-2 text-sm">
                    <li><span>Works</span></li>
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
            <StudioThumbStrip
              images={worksStudioImages}
              gapClassName="gap-1.5 sm:gap-3"
              heightPx={worksIndexBandHeight}
            />
          </div>
        </div>
      ) : (
        <main className="flex-1 flex items-center justify-center px-4 sm:px-6">
          <div className="max-w-[420px] w-full text-center">
            <div className="flex flex-col items-center gap-3 text-sm">
              <h1 className="text-sm font-normal">Adam Cutts</h1>
              <Link
                to="/"
                className="hover:underline text-blue-600 visited:text-purple-600"
              >
                Home
              </Link>
              <p>adamcutts . a @ gmail.com</p>
            </div>
            <div className="mt-8">
              <StudioThumbStrip images={homeStudioImages} />
              <nav className="mt-6">
                <ul className="space-y-2 text-sm text-center">
                  <li>
                    <Link
                      to="/works"
                      className="hover:underline text-blue-600 visited:text-purple-600"
                    >
                      Works
                    </Link>
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
        </main>
      )}

      {/* Works — W4 + W4f hybrid: year + title left, single uncropped image */}
      {showWorksTable && (
        <div className="px-4 sm:px-6 pb-8 mt-14 sm:mt-16 overflow-x-clip">
          <div className="grid grid-cols-2 sm:grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-2 sm:gap-2.5">
            {artworks.map((work) => {
              const heroImage = work.images?.[0];
              return (
                <div
                  key={work.id}
                  className="border border-gray-300 bg-white flex flex-col min-h-[140px]"
                >
                  <div className="text-[11px] px-2 py-1.5 border-b border-gray-200 bg-gray-50 text-gray-600 text-left">
                    {work.year}
                  </div>
                  <div className="flex flex-1 items-center justify-center p-2 min-h-[104px]">
                    {heroImage ? (
                      <button
                        type="button"
                        onClick={() => openDetail(work, 0)}
                        className="p-0 bg-transparent border-0 outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                        aria-label={`Open ${work.title}`}
                      >
                        <img
                          src={heroImage}
                          alt=""
                          className="h-24 w-auto max-w-full object-contain block select-none"
                          draggable={false}
                        />
                      </button>
                    ) : (
                      <div className="h-24 w-full flex items-center justify-center text-[10px] text-gray-400">
                        —
                      </div>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => openDetail(work, 0)}
                    className={`text-[11px] px-2 py-1.5 border-t border-gray-200 bg-white text-left w-full hover:underline leading-snug ${
                      visitedWorks.has(work.id) ? "text-purple-600" : "text-blue-600"
                    }`}
                  >
                    {work.title}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Footer with constrained width */}
      <div
        className={
          showWorksTable
            ? "max-w-2xl px-4 sm:px-6 pb-6 mt-auto"
            : "max-w-[420px] mx-auto px-4 sm:px-6 pb-6 text-center shrink-0"
        }
      >
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
