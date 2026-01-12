"use client";
import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * PreviewBrochure
 *
 * Props:
 * - src (string): URL to the PDF file to preview (e.g. "/downloads/study-abroad-brochure.pdf")
 * - isOpen (boolean): whether the modal is open
 * - onClose (function): callback to close the modal
 * - title (string): accessible title for the modal
 *
 * Usage:
 * <PreviewBrochure
 *   src="/downloads/study-abroad-brochure.pdf"
 *   isOpen={isPreviewOpen}
 *   onClose={() => setIsPreviewOpen(false)}
 *   title="Study Abroad Brochure"
 * />
 */
export default function PreviewBrochure({
  src,
  isOpen,
  onClose,
  title = "Brochure Preview",
}) {
  const closeButtonRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab" && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen && closeButtonRef.current) {
      setTimeout(() => closeButtonRef.current.focus(), 60);
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
          aria-hidden={!isOpen}
        >
          <motion.button
            type="button"
            aria-label="Close preview"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/55 backdrop-blur-sm border-0 p-0 m-0"
            style={{ cursor: "pointer" }}
          />

          <motion.div
            initial={{ y: 18, scale: 0.985, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 10, scale: 0.985, opacity: 0 }}
            transition={{ duration: 0.18 }}
            role="dialog"
            aria-modal="true"
            aria-label={title}
            ref={modalRef}
            className="relative z-10 w-[92%] max-w-5xl h-[86vh] bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col"
          >
            <div className="flex items-center justify-between px-4 md:px-6 py-3 border-b">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {title}
                </h3>
                <p className="text-sm text-slate-500">
                  Preview the brochure (PDF)
                </p>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm px-3 py-2 rounded-md border border-slate-200 hover:bg-slate-50"
                >
                  Open in new tab
                </a>

                <a
                  href={src}
                  download
                  className="text-sm px-3 py-2 rounded-md bg-gradient-to-r from-[#0066A6] to-[#0099CC] text-white shadow"
                >
                  Download
                </a>

                <button
                  ref={closeButtonRef}
                  onClick={onClose}
                  aria-label="Close preview"
                  className="ml-2 text-slate-600 hover:text-slate-900 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0066A6]/30"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Content area */}
            <div className="flex-1 bg-slate-50">
              <iframe
                title="Brochure preview"
                src={src}
                className="w-full h-full border-0"
                sandbox="allow-forms allow-scripts allow-same-origin allow-popups"
              />

              <div className="hidden">
                <object
                  data={src}
                  type="application/pdf"
                  width="100%"
                  height="100%"
                >
                  <p className="p-6 text-sm text-slate-700">
                    Your browser does not support inline PDFs. You can{" "}
                    <a
                      href={src}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline text-[#0066A6]"
                    >
                      open the brochure in a new tab
                    </a>{" "}
                    or{" "}
                    <a href={src} download className="underline text-[#0066A6]">
                      download it
                    </a>
                    .
                  </p>
                </object>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
