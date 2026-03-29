import { Fragment, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import incidentalProjectionVimeoThumb2 from "../assets/projects/2022_2_RESEARCH_Incidental Projection/THUMBNAIL FOR VIDEO LINK 2.jpg";

type ProjectVimeoClip = {
  /** `player.vimeo.com` embed URL (may include #t=… for start time). */
  embedSrc: string;
  /** Short label for accessibility / optional UI. */
  label: string;
  /**
   * Optional tile image (e.g. frame at a timestamp). Vimeo oEmbed only provides
   * one poster per video ID, so use this when a clip needs a different still.
   */
  posterSrc?: string;
};

type Project = {
  id: string; // folder name (e.g. "2022_1_ARCH_Site Seeing")
  title: string; // display title only (project type stripped)
  year: string; // "2022"
  projectNumber: number; // middle segment; used to sort within year (high = first)
  description: string;
  images: string[];
  vimeoClips: ProjectVimeoClip[];
};

/** Vimeo embeds keyed by project folder name under `src/assets/projects/`. */
const projectVimeoByFolderId: Record<string, ProjectVimeoClip[]> = {
  "2023_3_RESEARCH_LIC Site Study": [
    {
      embedSrc:
        "https://player.vimeo.com/video/744404732?autoplay=1&title=0&byline=0&portrait=0",
      label: "LIC site research video",
    },
  ],
  "2022_2_RESEARCH_Incidental Projection": [
    {
      embedSrc:
        "https://player.vimeo.com/video/749350967?autoplay=1&title=0&byline=0&portrait=0#t=12s",
      label: "Incidental projection — 0:12",
    },
    {
      embedSrc:
        "https://player.vimeo.com/video/749350967?autoplay=1&title=0&byline=0&portrait=0#t=1m33s",
      label: "Incidental projection — 1:33",
      posterSrc: incidentalProjectionVimeoThumb2,
    },
  ],
};

// Edit this map to add description text per project folder.
// Key = folder name inside `src/assets/projects/`.
// Use blank lines between paragraphs. Wrap a word in ~tilde~ for italics.
const projectDescriptions: Record<string, string> = {
  "2023_2_ARCH_Citygroup Stoop": `With Marta Elliot

Some sort of imprint has distorted the Stoop. The condensation from the A/C above is collected and sprayed around the area. Moss grows in the creases between steps, and there are frog sounds coming from somewhere nearby…

The Poots has been further imprinted by some ~being~. The condensation from the A/C above is collected and sprayed around the area. Moss grows all around to soften the landing, and there are frog sounds coming from somewhere nearby…`,
};

/** Paragraph breaks = blank lines; ~word~ → italic (for modal copy). */
function projectDescriptionBlocks(text: string) {
  const paragraphs = text.trim().split(/\n\n+/).map((block, i) => {
    const segments = block.split(/~([^~]+)~/g);
    return (
      <p
        key={i}
        className={`text-sm leading-relaxed ${i === 0 ? "mt-3" : "mt-2"}`}
      >
        {segments.map((seg, j) =>
          j % 2 === 1 ? (
            <em key={j}>{seg}</em>
          ) : (
            <Fragment key={j}>{seg}</Fragment>
          )
        )}
      </p>
    );
  });
  return <>{paragraphs}</>;
}

// Only include images directly inside each project folder (ignore nested folders + videos).
const projectImageUrls = import.meta.glob(
  "../assets/projects/*/*.{jpg,JPG,jpeg,JPEG,png,PNG,webp,WEBP,gif,GIF}",
  { eager: true, import: "default" }
) as Record<string, string>;

/** Sort image filenames so numeric parts order naturally (e.g. 2 before 10). */
function compareProjectImageFilenames(a: string, b: string): number {
  return a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" });
}

function vimeoVideoIdFromEmbedSrc(embedSrc: string): string | null {
  const m = embedSrc.match(/\/video\/(\d+)/);
  return m ? m[1] : null;
}

/** Files whose names start this way are custom Vimeo tiles only (not listed as project stills). */
function isVideoPosterAssetFile(fileName: string): boolean {
  return /^THUMBNAIL FOR VIDEO/i.test(fileName.trim());
}

function folderNameFromGlobPath(globPath: string) {
  // Example globPath: "../assets/projects/2022_1_ARCH_Site Seeing/Site Seeing1.jpg"
  const parts = globPath.split("/");
  return parts[parts.length - 2] ?? "";
}

function titleYearFromFolder(folderName: string) {
  // Expected folder format: year_project number_project type_project title...
  // Example: 2022_1_ARCH_Site Seeing -> year=2022, title="Site Seeing"
  const parts = folderName.split("_");
  if (parts.length < 4) {
    return {
      year: folderName.slice(0, 4),
      title: folderName.replace(/_/g, " ").trim(),
    };
  }

  const year = parts[0];
  // Ignore project number (parts[1]) and project type (parts[2]); keep the rest.
  const titleParts = parts.slice(3);
  const title = titleParts.join("_").replace(/_/g, " ").trim();

  return { year, title };
}

function projectNumberFromFolder(folderName: string): number {
  const parts = folderName.split("_");
  if (parts.length < 2) return 0;
  const n = Number(parts[1]);
  return Number.isFinite(n) ? n : 0;
}

function Projects() {
  const currentYear = new Date().getFullYear();
  const [vimeoPosterByVideoId, setVimeoPosterByVideoId] = useState<
    Record<string, string>
  >({});

  useEffect(() => {
    const ids = new Set<string>();
    for (const clips of Object.values(projectVimeoByFolderId)) {
      for (const clip of clips) {
        const id = vimeoVideoIdFromEmbedSrc(clip.embedSrc);
        if (id) ids.add(id);
      }
    }
    if (ids.size === 0) return;

    let cancelled = false;

    void (async () => {
      const updates: Record<string, string> = {};
      await Promise.all(
        [...ids].map(async (id) => {
          try {
            const oembedUrl = `https://vimeo.com/api/oembed.json?url=${encodeURIComponent(
              `https://vimeo.com/${id}`
            )}&width=640`;
            const res = await fetch(oembedUrl);
            if (!res.ok) return;
            const data = (await res.json()) as { thumbnail_url?: string };
            if (data.thumbnail_url) updates[id] = data.thumbnail_url;
          } catch {
            /* keep fallback UI */
          }
        })
      );
      if (!cancelled && Object.keys(updates).length > 0) {
        setVimeoPosterByVideoId((prev) => ({ ...prev, ...updates }));
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  const allProjects = useMemo(() => {
    // Group image URLs by project folder.
    const groups = new Map<
      string,
      {
        year: string;
        title: string;
        images: Array<{ src: string; fileName: string }>;
      }
    >();

    for (const [globPath, src] of Object.entries(projectImageUrls)) {
      const folderName = folderNameFromGlobPath(globPath);
      if (!folderName) continue;

      const { year, title } = titleYearFromFolder(folderName);
      const fileName = globPath.split("/").pop() ?? "";
      if (isVideoPosterAssetFile(fileName)) continue;

      const entry = groups.get(folderName);
      if (!entry) {
        groups.set(folderName, { year, title, images: [{ src, fileName }] });
      } else {
        entry.images.push({ src, fileName });
      }
    }

    const projects: Project[] = Array.from(groups.entries()).map(([id, g]) => {
      // Order follows filename (numeric segments sort in number order).
      const sorted = [...g.images].sort((a, b) =>
        compareProjectImageFilenames(a.fileName, b.fileName)
      );

      return {
        id,
        title: g.title || id,
        year: g.year || id.slice(0, 4),
        projectNumber: projectNumberFromFolder(id),
        description: projectDescriptions[id] ?? "",
        images: sorted.map((x) => x.src),
        vimeoClips: projectVimeoByFolderId[id] ?? [],
      };
    });

    return projects;
  }, []);

  const projectsByYear = useMemo(() => {
    const map = new Map<string, Project[]>();
    for (const p of allProjects) {
      const list = map.get(p.year) ?? [];
      list.push(p);
      map.set(p.year, list);
    }
    // Within each year: highest project # at top, project 1 at bottom.
    for (const [, list] of map) {
      list.sort((a, b) => {
        if (b.projectNumber !== a.projectNumber) {
          return b.projectNumber - a.projectNumber;
        }
        return a.id.localeCompare(b.id);
      });
    }
    return map;
  }, [allProjects]);

  const years = useMemo(() => {
    return Array.from(projectsByYear.keys()).sort(
      (a, b) => Number(b) - Number(a)
    );
  }, [projectsByYear]);

  type ModalState =
    | {
        kind: "gallery";
        project: Project;
        imageIndex: number;
      }
    | {
        kind: "vimeo";
        projectTitle: string;
        embedSrc: string;
      };

  const [modal, setModal] = useState<ModalState | null>(null);
  const [visitedProjects, setVisitedProjects] = useState<Set<string>>(
    () => new Set()
  );

  const closeModal = () => setModal(null);

  const openGallery = (project: Project, imageIndex = 0) => {
    setVisitedProjects((prev) => new Set(prev).add(project.id));
    const len = project.images.length;
    setModal({
      kind: "gallery",
      project,
      imageIndex: len ? Math.min(Math.max(0, imageIndex), len - 1) : 0,
    });
  };

  const openVimeoModal = (project: Project, embedSrc: string) => {
    setVisitedProjects((prev) => new Set(prev).add(project.id));
    setModal({
      kind: "vimeo",
      projectTitle: project.title,
      embedSrc,
    });
  };

  const openProjectFromTitle = (project: Project) => {
    if (project.images.length > 0) {
      openGallery(project, 0);
    } else if (project.vimeoClips.length > 0) {
      openVimeoModal(project, project.vimeoClips[0].embedSrc);
    } else {
      openGallery(project, 0);
    }
  };

  useEffect(() => {
    if (!modal) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
        return;
      }
      if (modal.kind !== "gallery") return;
      const images = modal.project.images ?? [];
      if (images.length <= 1) return;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        setModal((m) => {
          if (!m || m.kind !== "gallery") return m;
          const imgs = m.project.images;
          return {
            ...m,
            imageIndex: (m.imageIndex - 1 + imgs.length) % imgs.length,
          };
        });
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        setModal((m) => {
          if (!m || m.kind !== "gallery") return m;
          const imgs = m.project.images;
          return {
            ...m,
            imageIndex: (m.imageIndex + 1) % imgs.length,
          };
        });
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modal]);

  useEffect(() => {
    if (!modal) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [modal]);

  const galleryProject = modal?.kind === "gallery" ? modal.project : null;
  const galleryImageIndex =
    modal?.kind === "gallery" ? modal.imageIndex : 0;
  const detailImages = galleryProject?.images ?? [];
  const detailSrc = detailImages.length
    ? detailImages[galleryImageIndex]
    : null;

  return (
    <div className="min-h-screen bg-white font-mono text-black text-sm flex flex-col">
      {/* Project detail / Vimeo: floating panel */}
      {modal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/25"
          onClick={closeModal}
          role="presentation"
        >
          <div
            className={`relative w-full max-h-[90vh] overflow-y-auto rounded-sm border border-gray-200 bg-white shadow-lg text-left ${
              modal.kind === "vimeo" ? "max-w-3xl" : "max-w-xl"
            }`}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby={
              modal.kind === "gallery"
                ? "project-detail-title"
                : "vimeo-detail-title"
            }
          >
            <button
              type="button"
              className="absolute top-2 right-3 z-10 text-gray-500 hover:text-black text-2xl leading-none font-light"
              onClick={closeModal}
              aria-label="Close"
            >
              ×
            </button>

            {modal.kind === "gallery" && galleryProject ? (
              <div className="p-5 pr-10 space-y-4 text-gray-800">
                <div>
                  <p
                    id="project-detail-title"
                    className="text-sm font-medium text-black"
                  >
                    {galleryProject.title}
                  </p>
                  <p className="text-xs text-gray-600 mt-1">
                    {galleryProject.year}
                  </p>
                  {galleryProject.description.trim()
                    ? projectDescriptionBlocks(galleryProject.description)
                    : null}
                </div>

                {detailSrc ? (
                  <div className="space-y-3">
                    <div className="flex items-center justify-center min-h-[200px] bg-gray-50 border border-gray-100 rounded-sm p-2">
                      <img
                        src={detailSrc}
                        alt={`${galleryProject.title} — ${galleryImageIndex + 1} of ${detailImages.length}`}
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
                            setModal((m) => {
                              if (!m || m.kind !== "gallery") return m;
                              const imgs = m.project.images;
                              return {
                                ...m,
                                imageIndex:
                                  (m.imageIndex - 1 + imgs.length) % imgs.length,
                              };
                            })
                          }
                          aria-label="Previous image"
                        >
                          ←
                        </button>
                        <span className="text-gray-500 text-xs tabular-nums">
                          {galleryImageIndex + 1} / {detailImages.length}
                        </span>
                        <button
                          type="button"
                          className="px-2 py-1 text-blue-600 hover:underline disabled:opacity-40 disabled:no-underline"
                          disabled={detailImages.length <= 1}
                          onClick={() =>
                            setModal((m) => {
                              if (!m || m.kind !== "gallery") return m;
                              const imgs = m.project.images;
                              return {
                                ...m,
                                imageIndex: (m.imageIndex + 1) % imgs.length,
                              };
                            })
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
            ) : null}

            {modal.kind === "vimeo" ? (
              <div className="p-5 pr-10 space-y-4 text-gray-800">
                <p
                  id="vimeo-detail-title"
                  className="text-sm font-medium text-black"
                >
                  {modal.projectTitle}
                </p>
                <div className="w-full overflow-hidden rounded-sm border border-gray-100 bg-black">
                  <iframe
                    src={modal.embedSrc}
                    title={modal.projectTitle}
                    className="block w-full aspect-video max-h-[min(72vh,640px)]"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            ) : null}
          </div>
        </div>
      )}

      {/* Menu header */}
      <div className="max-w-2xl px-6 py-6">
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
              <Link
                to="/studio"
                className="hover:underline text-blue-600 visited:text-purple-600"
              >
                Studio
              </Link>
            </li>
            <li>
              <span>Projects</span>
            </li>
          </ul>
        </nav>
      </div>

      {/* Projects table grouped by year */}
      <div className="space-y-0 mt-6 flex-1">
        {years.map((year) => {
          const list = projectsByYear.get(year) ?? [];
          return (
            <div key={year}>
              <div className="flex border-b border-gray-200 px-6">
                <div className="flex-1 py-2 pr-6 pl-0">
                  <div className="text-left text-sm text-black">{year}</div>
                </div>
                <div className="w-8 py-2 text-gray-400 text-sm" />
              </div>

              {list.map((project) => (
                <div
                  key={project.id}
                  className="flex border-b border-gray-200 px-6 items-start gap-2 sm:gap-3"
                >
                  <div className="w-[min(46%,260px)] shrink-0 py-2 pr-2 min-w-0">
                    <button
                      type="button"
                      onClick={() => openProjectFromTitle(project)}
                      className={`text-left w-full hover:underline text-sm leading-snug ${
                        visitedProjects.has(project.id)
                          ? "text-purple-600"
                          : "text-blue-600"
                      }`}
                    >
                      {project.title}
                    </button>
                  </div>

                  <div className="flex-1 min-w-0 py-2 overflow-x-auto minimal-scrollbar">
                    {project.vimeoClips.length > 0 ||
                    project.images.length > 0 ? (
                      <div className="flex flex-nowrap gap-[6px] items-center justify-start">
                        {project.vimeoClips.map((clip, vi) => {
                          const vid = vimeoVideoIdFromEmbedSrc(clip.embedSrc);
                          const poster =
                            clip.posterSrc ??
                            (vid !== null ? vimeoPosterByVideoId[vid] : undefined);
                          return (
                            <button
                              key={`v-${vi}`}
                              type="button"
                              onClick={() =>
                                openVimeoModal(project, clip.embedSrc)
                              }
                              className="relative shrink-0 h-16 w-[88px] p-0 bg-gray-800 border-0 rounded-none shadow-none outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-inset overflow-hidden"
                              aria-label={`${project.title} — ${clip.label}`}
                            >
                              {poster ? (
                                <img
                                  src={poster}
                                  alt=""
                                  className="absolute inset-0 h-full w-full object-cover border-0 pointer-events-none select-none"
                                  draggable={false}
                                />
                              ) : (
                                <span className="absolute inset-0 bg-gray-800" />
                              )}
                              <span
                                className="absolute inset-0 flex items-center justify-center bg-black/35"
                                aria-hidden="true"
                              >
                                <svg
                                  className="h-7 w-7 text-white opacity-95 drop-shadow-sm"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                >
                                  <path d="M8 5v14l11-7z" />
                                </svg>
                              </span>
                            </button>
                          );
                        })}
                        {project.images.map((imageSrc, index) => (
                          <button
                            key={index}
                            type="button"
                            onClick={() => openGallery(project, index)}
                            className="shrink-0 h-16 w-[88px] flex items-center justify-center p-0 bg-transparent border-0 rounded-none shadow-none outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-inset overflow-hidden"
                            aria-label={`Open ${project.title} — image ${index + 1}`}
                          >
                            <img
                              src={imageSrc}
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
          );
        })}
      </div>

      {/* Footer */}
      <div className="max-w-2xl px-6 pb-6 mt-auto">
        <footer className="pt-6 border-t border-gray-300">
          <p className="text-xs text-gray-600">© {currentYear} Adam Cutts</p>
        </footer>
      </div>
    </div>
  );
}

export default Projects;

