"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

type ImagePreviewProps = {
  src: string;
  alt: string;
  sizes?: string;
  className?: string;
  previewClassName?: string;
};

export function ImagePreview({ src, alt, sizes = "100vw", className = "", previewClassName = "" }: ImagePreviewProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <>
      <button type="button" className="group absolute inset-0 cursor-zoom-in text-left" onClick={() => setOpen(true)} aria-label={`Preview ${alt}`}>
        <Image src={src} alt={alt} fill sizes={sizes} className={className} />
        <span className="pointer-events-none absolute inset-0 bg-white/0 transition group-hover:bg-white/5" />
      </button>
      {open && typeof document !== "undefined" && createPortal(
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-md" role="dialog" aria-modal="true" aria-label={`Image preview: ${alt}`} onMouseDown={(event) => {
          if (event.target === event.currentTarget) setOpen(false);
        }}>
          <button type="button" onClick={() => setOpen(false)} aria-label="Close image preview" className="focus-ring absolute right-4 top-4 z-10 rounded-full border border-white/20 bg-panel p-3 text-paper transition hover:border-lime hover:text-lime">
            <X className="h-5 w-5" />
          </button>
          <div className="relative h-[min(90vh,900px)] w-full max-w-7xl" onMouseDown={(event) => event.stopPropagation()}>
            <Image src={src} alt={alt} fill sizes="100vw" className={`object-contain ${previewClassName}`} />
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
