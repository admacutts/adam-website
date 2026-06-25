export type Artwork = {
  id: string;
  number: string;
  title: string;
  year: string;
  medium: string;
  description: string;
  images?: string[];
};

const workImageUrls = import.meta.glob(
  "../assets/works/W*/*.{jpg,JPG,jpeg,JPEG,png,PNG,webp,WEBP,gif,GIF}",
  { eager: true, import: "default" }
) as Record<string, string>;

/** Optional description copy: add any `.txt` file to a work folder (e.g. `description.txt`). */
const workDescriptionTexts = import.meta.glob(
  "../assets/works/W*/*.txt",
  { eager: true, query: "?raw", import: "default" }
) as Record<string, string>;

/** Legacy works (W01–W11): title, year, medium, and optional description. */
const workMetadataOverrides: Record<
  string,
  Pick<Artwork, "title" | "year" | "medium" | "description">
> = {
  W01: {
    title: "Dancing Jug",
    year: "2018",
    medium: "stoneware and terra sigillata",
    description: "",
  },
  W02: {
    title: "Lintel Model",
    year: "2023",
    medium: "earthenware",
    description: "",
  },
  W03: {
    title: "Stack",
    year: "2023",
    medium: "earthenware, glaze",
    description: "",
  },
  W04: {
    title: "Land Boat",
    year: "2023",
    medium: "earthenware",
    description: "",
  },
  W05: {
    title: "Altar/Split Jar with Fat Hat",
    year: "2023",
    medium: "wood, ceramic, mirror-polished aluminum, remote operated candles",
    description: "with Jenna Graziano",
  },
  W06: {
    title: "Enshrining a Tree",
    year: "2023",
    medium: "earthenware, terra sigillata",
    description: "",
  },
  W07: {
    title: "Storage with Earmark and Three-Part Lid",
    year: "2024",
    medium: "earthenware, terra sigillata, soda ash based laundry detergent",
    description: "container with a three part lid, made entirely from 2mm clay sheets",
  },
  W08: {
    title: "Lacrymatory",
    year: "2025",
    medium: "earthenware, glaze",
    description: "",
  },
  W09: {
    title: "Vented Storage with Sign",
    year: "2025",
    medium: "stoneware, soda ash",
    description: "",
  },
  W10: {
    title: "Foothill Study Tile",
    year: "2025",
    medium: "stoneware and terra sigillata",
    description: "",
  },
  W11: {
    title: "Foot Bridge",
    year: "2026",
    medium: "earthenware",
    description: "",
  },
};

function compareImageFilenames(a: string, b: string): number {
  return a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" });
}

function folderNameFromGlobPath(globPath: string): string {
  const parts = globPath.split("/");
  return parts[parts.length - 2] ?? "";
}

function workNumberFromFolder(folderName: string): number {
  const match = folderName.match(/^W(\d+)$/i);
  if (!match) return 0;
  return Number.parseInt(match[1], 10);
}

function formatWorkNumber(workNumber: number): string {
  return workNumber.toString().padStart(2, "0");
}

function isDetailImage(fileName: string): boolean {
  const stem = fileName.replace(/\.[^.]+$/, "");
  return /_detail(\s|\d|$)/i.test(stem) || stem.endsWith("_detail");
}

/** Parse `{year}_{title}_{medium}.jpg` from the primary image filename. */
function parseWorkImageMetadata(fileName: string) {
  const stem = fileName.replace(/\.[^.]+$/, "");
  const firstUnderscore = stem.indexOf("_");
  const lastUnderscore = stem.lastIndexOf("_");

  if (firstUnderscore === -1 || firstUnderscore === lastUnderscore) {
    return null;
  }

  const year = stem.slice(0, firstUnderscore);
  const medium = stem.slice(lastUnderscore + 1).trim();
  const title = stem.slice(firstUnderscore + 1, lastUnderscore).trim();

  if (!/^\d{4}$/.test(year) || !title || !medium) {
    return null;
  }

  return { year, title, medium };
}

function sortWorkImages(
  images: Array<{ src: string; fileName: string }>
): string[] {
  const primary = images.filter((image) => !isDetailImage(image.fileName));
  const details = images.filter((image) => isDetailImage(image.fileName));

  primary.sort((a, b) => compareImageFilenames(a.fileName, b.fileName));
  details.sort((a, b) => compareImageFilenames(a.fileName, b.fileName));

  return [...primary, ...details].map((image) => image.src);
}

function descriptionFromFolder(folderId: string): string {
  const matches = Object.entries(workDescriptionTexts)
    .filter(([globPath]) => folderNameFromGlobPath(globPath) === folderId)
    .map(([globPath, text]) => ({
      fileName: globPath.split("/").pop() ?? "",
      text: text.trim(),
    }))
    .filter((entry) => entry.text);

  if (matches.length === 0) return "";

  const preferred = matches.find((entry) =>
    /^description\.txt$/i.test(entry.fileName)
  );
  if (preferred) return preferred.text;

  matches.sort((a, b) => compareImageFilenames(a.fileName, b.fileName));
  return matches[0]?.text ?? "";
}

function buildArtworks(): Artwork[] {
  const groups = new Map<
    string,
    Array<{ src: string; fileName: string }>
  >();

  for (const [globPath, src] of Object.entries(workImageUrls)) {
    const folderName = folderNameFromGlobPath(globPath);
    if (!folderName) continue;

    const fileName = globPath.split("/").pop() ?? "";
    const entry = groups.get(folderName);
    if (!entry) {
      groups.set(folderName, [{ src, fileName }]);
    } else {
      entry.push({ src, fileName });
    }
  }

  const artworks: Artwork[] = [];

  for (const [folderId, images] of groups.entries()) {
    const workNumber = workNumberFromFolder(folderId);
    if (workNumber === 0) continue;

    const sortedImages = sortWorkImages(images);
    const primaryFileName =
      images.find((image) => !isDetailImage(image.fileName))?.fileName ?? "";
    const parsed = primaryFileName
      ? parseWorkImageMetadata(primaryFileName)
      : null;
    const override = workMetadataOverrides[folderId];

    artworks.push({
      id: workNumber.toString(),
      number: formatWorkNumber(workNumber),
      title: parsed?.title ?? override?.title ?? folderId,
      year: parsed?.year ?? override?.year ?? "",
      medium: parsed?.medium ?? override?.medium ?? "",
      description: descriptionFromFolder(folderId) || override?.description || "",
      images: sortedImages,
    });
  }

  return artworks.sort((a, b) => Number(b.id) - Number(a.id));
}

export const artworks = buildArtworks();
