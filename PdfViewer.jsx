import React, { useState, useEffect, useRef } from 'react';
import './PdfViewer.css';

/**
 * PdfViewer Component
 * A production-grade, premium PDF viewer for academic journals.
 * 
 * Supports two rendering strategies:
 * 1. 'native' (Default & Recommended): Uses high-fidelity browser-native PDF embedding.
 *    Guarantees pixel-perfect representation of spacing, fonts, and charts.
 * 2. 'canvas' (react-pdf): Canvas-based drawing with disabled text/annotation overlays 
 *    to prevent layout and character alignment overlaps.
 */
export default function PdfViewer({
  pdfUrl,
  title = "Document Viewer",
  initialPage = 1,
  renderMode = 'native', // 'native' | 'canvas'
  onBackClick = () => window.history.back(),
}) {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [numPages, setNumPages] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [scale, setScale] = useState(1.0);
  const containerRef = useRef(null);

  // Handle URL page updates
  useEffect(() => {
    setCurrentPage(initialPage);
  }, [initialPage, pdfUrl]);

  // Load react-pdf dynamically if canvas mode is chosen to save bundle size
  const [reactPdfLib, setReactPdfLib] = useState(null);
  useEffect(() => {
    if (renderMode === 'canvas') {
      import('react-pdf')
        .then((module) => {
          const { pdfjs } = module;
          // Clean worker configuration from CDN corresponding exactly to react-pdf internal version
          pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
          setReactPdfLib(module);
        })
        .catch((err) => {
          console.error("Failed to load react-pdf dependency dynamically:", err);
          setError("Failed to load PDF rendering module. Please check dependencies.");
        });
    }
  }, [renderMode]);

  // Handle document loading success in canvas mode
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setLoading(false);
    setError(null);
  };

  const onDocumentLoadError = (err) => {
    console.error("react-pdf loading error:", err);
    setError("Failed to load PDF document.");
    setLoading(false);
  };

  // Navigations
  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, numPages || 1));
  };

  const handlePageInputChange = (e) => {
    const val = parseInt(e.target.value, 10);
    if (!isNaN(val) && val >= 1 && val <= (numPages || 9999)) {
      setCurrentPage(val);
    }
  };

  const handleZoomIn = () => setScale((prev) => Math.min(prev + 0.1, 2.0));
  const handleZoomOut = () => setScale((prev) => Math.max(prev - 0.1, 0.6));
  const handleResetZoom = () => setScale(1.0);

  const handleCopyLink = () => {
    const currentUrl = `${window.location.origin}${window.location.pathname}?pdf=${encodeURIComponent(pdfUrl)}&page=${currentPage}`;
    navigator.clipboard.writeText(currentUrl)
      .then(() => alert("Link to current page copied to clipboard!"))
      .catch(() => alert("Failed to copy link."));
  };

  if (!pdfUrl) {
    return (
      <div className="pdf-viewer-container error-state">
        <div className="pdf-error-card">
          <i className="bx bx-file-find error-icon"></i>
          <h3>No PDF Document Specified</h3>
          <p>Please provide a valid local or remote PDF URL.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pdf-viewer-container" ref={containerRef}>
      {/* Top Header Navigation */}
      <header className="pdf-viewer-header">
        <div className="header-left">
          <button className="back-btn" onClick={onBackClick}>
            <i className="bx bx-left-arrow-alt"></i>
            <span>Back</span>
          </button>
          <span className="pdf-title" title={title}>{title}</span>
        </div>

        <div className="header-right">
          {renderMode === 'canvas' && numPages && (
            <div className="canvas-zoom-controls">
              <button className="icon-btn" onClick={handleZoomOut} title="Zoom Out">
                <i className="bx bx-minus"></i>
              </button>
              <span className="zoom-text">{Math.round(scale * 100)}%</span>
              <button className="icon-btn" onClick={handleZoomIn} title="Zoom In">
                <i className="bx bx-plus"></i>
              </button>
              <button className="icon-btn text-btn" onClick={handleResetZoom} title="Reset Zoom">
                Reset
              </button>
            </div>
          )}
          <a href={pdfUrl} download className="action-btn download-btn" title="Download Original PDF">
            <i className="bx bx-download"></i>
            <span>Download</span>
          </a>
          <button className="action-btn primary-btn share-btn" onClick={handleCopyLink} title="Copy Link to Current Page">
            <i className="bx bx-link"></i>
            <span>Copy Link</span>
          </button>
        </div>
      </header>

      {/* Main Rendering Canvas Panel */}
      <main className="pdf-viewer-content">
        {renderMode === 'native' ? (
          /* NATIVE BROWSER EMBED MODE */
          <div className="native-pdf-wrapper">
            <iframe
              src={`${pdfUrl}#page=${currentPage}`}
              className="native-iframe"
              title={title}
              onLoad={() => setLoading(false)}
            />
          </div>
        ) : (
          /* REACT-PDF CANVAS RENDERING MODE */
          <div className="canvas-pdf-wrapper">
            {error && (
              <div className="pdf-error-card">
                <i className="bx bx-error-circle error-icon text-red"></i>
                <h3>Error Loading Document</h3>
                <p>{error}</p>
              </div>
            )}

            {loading && !error && (
              <div className="pdf-loading-overlay">
                <div className="pdf-spinner"></div>
                <span>Parsing publication data...</span>
              </div>
            )}

            {reactPdfLib && (
              <reactPdfLib.Document
                file={pdfUrl}
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={onDocumentLoadError}
                loading={null}
              >
                <div className="canvas-pages-scrollbox">
                  <reactPdfLib.Page
                    pageNumber={currentPage}
                    scale={scale}
                    renderTextLayer={false}        {/* Disables text overlay entirely to prevent line overlapping */}
                    renderAnnotationLayer={false}  {/* Disables annotation overlay entirely to keep styling clean */}
                    loading={<div className="page-loading">Rendering page...</div>}
                    className="react-pdf-page-custom"
                  />
                </div>
              </reactPdfLib.Document>
            )}
          </div>
        )}
      </main>

      {/* Bottom Control Bar */}
      <footer className="pdf-viewer-footer">
        <div className="footer-controls">
          <button 
            className="nav-btn" 
            onClick={handlePrevPage} 
            disabled={currentPage <= 1 || loading}
          >
            <i className="bx bx-chevron-left"></i>
            <span>Prev</span>
          </button>

          <span className="page-indicator">
            Page 
            <input 
              type="number" 
              className="page-input"
              value={currentPage}
              onChange={handlePageInputChange}
              min={1}
              max={numPages || 9999}
              disabled={loading}
            />
            of <span className="total-pages-span">{numPages || '-'}</span>
          </span>

          <button 
            className="nav-btn" 
            onClick={handleNextPage} 
            disabled={(numPages !== null && currentPage >= numPages) || loading}
          >
            <span>Next</span>
            <i className="bx bx-chevron-right"></i>
          </button>
        </div>
      </footer>
    </div>
  );
}
