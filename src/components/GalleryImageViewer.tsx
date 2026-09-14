import { useEffect, useRef, useState } from "react";

function clampGalleryZoom(scale: number) {
  return Math.min(4, Math.max(1, scale));
}

type GalleryImageViewerProps = {
  src: string;
  alt: string;
  /** Tailwind height utility for the image viewport, e.g. h-[min(78vh,880px)] */
  viewportClassName?: string;
};

export default function GalleryImageViewer({
  src,
  alt,
  viewportClassName = "h-[min(78vh,880px)]",
}: GalleryImageViewerProps) {
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef<{
    startX: number;
    startY: number;
    ox: number;
    oy: number;
  } | null>(null);

  useEffect(() => {
    setScale(1);
    setOffset({ x: 0, y: 0 });
  }, [src]);

  const resetZoom = () => {
    setScale(1);
    setOffset({ x: 0, y: 0 });
  };

  const applyZoom = (next: number) => {
    const clamped = clampGalleryZoom(next);
    setScale(clamped);
    if (clamped === 1) setOffset({ x: 0, y: 0 });
  };

  return (
    <div className="space-y-2">
      <div
        className={`relative flex items-center justify-center overflow-hidden bg-gray-50 border border-gray-100 rounded-sm w-full ${viewportClassName}`}
        onWheel={(e) => {
          e.preventDefault();
          e.stopPropagation();
          applyZoom(scale + (e.deltaY > 0 ? -0.2 : 0.2));
        }}
      >
        <img
          src={src}
          alt={alt}
          draggable={false}
          className="max-h-full max-w-full object-contain select-none touch-none will-change-transform"
          style={{
            transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})`,
            transformOrigin: "center center",
            cursor:
              scale > 1 ? (isDragging ? "grabbing" : "grab") : "zoom-in",
          }}
          onDoubleClick={() => {
            if (scale > 1) resetZoom();
            else applyZoom(2);
          }}
          onPointerDown={(e) => {
            if (scale <= 1) return;
            setIsDragging(true);
            dragRef.current = {
              startX: e.clientX,
              startY: e.clientY,
              ox: offset.x,
              oy: offset.y,
            };
            (e.currentTarget as HTMLImageElement).setPointerCapture(e.pointerId);
          }}
          onPointerMove={(e) => {
            if (!dragRef.current) return;
            setOffset({
              x: dragRef.current.ox + (e.clientX - dragRef.current.startX),
              y: dragRef.current.oy + (e.clientY - dragRef.current.startY),
            });
          }}
          onPointerUp={(e) => {
            dragRef.current = null;
            setIsDragging(false);
            try {
              (e.currentTarget as HTMLImageElement).releasePointerCapture(
                e.pointerId
              );
            } catch {
              /* already released */
            }
          }}
          onPointerCancel={() => {
            dragRef.current = null;
            setIsDragging(false);
          }}
        />
      </div>
      <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-gray-600">
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            className="px-2 py-0.5 border border-gray-300 rounded-sm hover:bg-gray-50 text-blue-600"
            onClick={() => applyZoom(scale - 0.25)}
            aria-label="Zoom out"
          >
            −
          </button>
          <span className="tabular-nums min-w-[3rem] text-center">
            {Math.round(scale * 100)}%
          </span>
          <button
            type="button"
            className="px-2 py-0.5 border border-gray-300 rounded-sm hover:bg-gray-50 text-blue-600"
            onClick={() => applyZoom(scale + 0.25)}
            aria-label="Zoom in"
          >
            +
          </button>
          <button
            type="button"
            className="px-2 py-0.5 border border-gray-300 rounded-sm hover:bg-gray-50 text-blue-600 disabled:opacity-40"
            onClick={resetZoom}
            disabled={scale === 1 && offset.x === 0 && offset.y === 0}
          >
            Reset
          </button>
        </div>
        <span className="text-gray-500">
          Scroll to zoom · double-click · drag when zoomed
        </span>
      </div>
    </div>
  );
}
