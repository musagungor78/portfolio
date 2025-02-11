"use client";
import { useInView } from "framer-motion";
import React, { useRef, useState } from "react";
import ProjectTag from "./ProjectTag";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { useLanguage } from "@/context/language";

const cardVariants = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

const Project = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);

  const { language } = useLanguage();
  const {
    myProjects,
    coffeProjectDesc,
    coffeProjectTitle,
    saasProjectDesc,
    saasProjectTitle,
    eCommerceProjectDesc,
    eCommerceProjectTitle,
    netflixProjectDesc,
    netflixProjectTitle,
    dijirackProjectDesc,
    dijirackProjectTitle,
    ifiProjectDesc,
    ifiProjectTitle,
    medScriptProjectDesc,
    medScriptProjectTitle,
  } = language;

  const isInView = useInView(ref, { once: true });

  const projectsData = [
    {
      id: 1,
      title: coffeProjectTitle,
      description: coffeProjectDesc,
      image: "/projects/coffe-pub.png",
      tag: ["All", "Frontend"],
      gitUrl: "https://github.com/osmandayi/CoffePub",
      previewUrl: "https://coffe-pub.vercel.app/",
      pdfUrl: "/",
    },
    {
      id: 2,
      title: saasProjectTitle,
      description: saasProjectDesc,
      image: "/projects/sas.png",
      tag: ["All", "Frontend"],
      gitUrl: "https://github.com/osmandayi/30Temmuz",
      previewUrl: "https://30-temmuz.vercel.app/",
      pdfUrl: "/",
    },
    {
      id: 3,
      title: eCommerceProjectTitle,
      description: eCommerceProjectDesc,
      image: "/projects/online-commerce-and-grocery.png",
      tag: ["All", "FullStack"],
      gitUrl: "https://github.com/osmandayi/E-Commerce",
      previewUrl: "https://online-commerce-and-grocery.vercel.app/",
      pdfUrl: "/",
    },
    {
      id: 4,
      title: netflixProjectTitle,
      description: netflixProjectDesc,
      image: "/projects/netflix-clone-fe.png",
      tag: ["All", "Frontend"],
      gitUrl: "https://github.com/osmandayi/Netflix-Clone-FE",
      previewUrl: "https://netflix-clone-fe.vercel.app/",
      pdfUrl: "/",
    },
    {
      id: 5,
      title: dijirackProjectTitle,
      description: dijirackProjectDesc,
      image: "/projects/demo_dijirack.png",
      tag: ["All", "Frontend"],
      gitUrl: "/",
      previewUrl: "https://demo.dijirack.com/",
      pdfUrl: "/",
    },
    {
      id: 6,
      title: ifiProjectTitle,
      description: ifiProjectDesc,
      image: "/projects/demo_ifi.png",
      tag: ["All", "Frontend"],
      gitUrl: "/",
      previewUrl: "/",
      pdfUrl: "/",
    },
    {
      id: 7,
      title: medScriptProjectTitle,
      description: medScriptProjectDesc,
      image: "/projects/medscript.png",
      tag: ["All", "Frontend"],
      gitUrl: "/",
      previewUrl: "http://medscript.dijirack.com/",
      pdfUrl: "/",
    },
  ];

  const handleTagChange = (newTag: any) => {
    setTag(newTag);
  };
  const filteredProject = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-semibold mt-4 mb-8 lg:mt-8 lg:mb-12">
        {myProjects}
      </h2>
      <div
        className="text-white flex flex-row justify-center 
      items-center gap-5 py-6"
      >
        <ProjectTag
          name={"All"}
          onClick={handleTagChange}
          isSelected={tag === "All"}
        />
        <ProjectTag
          name="FullStack"
          onClick={handleTagChange}
          isSelected={tag === "FullStack"}
        />
        <ProjectTag
          name="Frontend"
          onClick={handleTagChange}
          isSelected={tag === "Frontend"}
        />
      </div>
      <ul ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10">
        {filteredProject.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              description={project.description}
              gitUrl={project.gitUrl}
              image={project.image}
              previewUrl={project.previewUrl}
              pdfUrl={project.pdfUrl}
              title={project.title}
              tag={project.tag}
              key={project.id}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Project;
