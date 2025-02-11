import { Code, CodeSquareIcon, EyeIcon, FileText } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tag: string[];
  gitUrl: string;
  previewUrl: string;
  pdfUrl?: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  tag,
  gitUrl,
  previewUrl,
  pdfUrl,
}: ProjectCardProps) => {
  return (
    <>
      <div className="h-full rounded-lg relative group flex flex-col">
        <div
          className="flex-grow h-56 md:h-72 max-h-56 md:max-h-72 rounded-lg relative group"
          style={{ background: `url(${image})`, backgroundSize: "cover" }}
        >
          <div className="items-center justify-center absolute top-0 left-0 w-full h-full bg-mycolor-400 bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-75 group-hover:gap-3 transition-all duration-700">
            <Link
              target={`${gitUrl !== "/" ? "_blank" : ""}`}
              href={gitUrl}
              className={`border-2 relative rounded-full h-14 w-14 ${
                gitUrl === "/" ? "border-error/50" : "border-success/50"
              }`}
            >
              <Code
                className="h-10 w-10 text-white/80 absolute top-1/2 left-1/2
          cursor-pointer transform -translate-x-1/2 -translate-y-1/2 
          group-hover:text-white/80"
                color={`${gitUrl === "/" ? "#ff5252" : "#52ff74"}`}
              />
            </Link>
            <Link
              target={`${previewUrl !== "/" ? "_blank" : ""}`}
              href={previewUrl}
              className={`border-2 relative rounded-full h-14 w-14 ${
                previewUrl === "/" ? "border-error/50" : "border-success/50"
              }`}
            >
              <EyeIcon
                className="h-10 w-10 text-white/80 absolute top-1/2 left-1/2
          cursor-pointer transform -translate-x-1/2 -translate-y-1/2 
          group-hover:text-white/80"
                color={`${previewUrl === "/" ? "#ff5252" : "#52ff74"}`}
              />
            </Link>
            <a
              href={pdfUrl}
              download
              className={`border-2 relative rounded-full h-14 w-14 ${
                pdfUrl === "/" ? "border-error/50" : "border-success/50"
              }`}
            >
              <FileText
                className="h-8 w-8 text-white/80 absolute top-1/2 left-1/2
          cursor-pointer transform -translate-x-1/2 -translate-y-1/2 
          group-hover:text-white/80"
                color={`${pdfUrl === "/" ? "#ff5252" : "#52ff74"}`}
              />
            </a>
          </div>
        </div>
        <div className="text-white rounded-2xl mt-3 px-4 py-2 bg-mycolor-300 flex-grow flex flex-col">
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <p className="font-light text-sm flex-grow">{description}</p>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
