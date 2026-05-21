import WindowWrapper from "#hoc/WindowWrapper";
import WindowControls from "#components/WindowControls";
import { Download } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.mjs`;

const Resume = () => {
  // Our trusty path fixer
  const getAsset = (path) => {
    if (!path) return '';
    return `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\.\/|^\//g, '')}`;
  };

  // Generate the safe path once and use it for both the viewer and the download button
  const resumePath = getAsset("files/resume.pdf");

  return (
    <>
    <div id="window-header">
        <WindowControls target="resume"/>
        <h2>Resume.pdf</h2>
        {/* Fixed download link */}
        <a href={resumePath} download className="cursor-pointer" title="Download resume">
        <Download className="icon"/>
        </a>
    </div>
    {/* Fixed document viewer path */}
    <Document file={resumePath}>
        <Page 
          pageNumber={1} 
          renderTextLayer 
          renderAnnotationLayer 
        />
    </Document>
    </>
  )
}

const ResumeWindow = WindowWrapper(Resume, "resume");
export default ResumeWindow;