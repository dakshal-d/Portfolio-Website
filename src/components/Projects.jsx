import React from "react";
import memoryChronicles from "../assets/memoryChronicles.png";
import jalso from "../assets/jalso.png";
import Portfolio from "../assets/Portfolio.png";
import voice from "../assets/voice.jpg";

const Projects = () => {
    const projects = [
        {
            img: memoryChronicles,
            title: "MemoryChronicles",
            desc: "A private and secure digital journal. Built with Node.js, MongoDB, React, Redux and Tailwind CSS.",
            live: "https://memorychronicles.vercel.app/",
            code: "https://github.com/dakshal-d/MemoryChronicles",
        },
        {
            img: jalso,
            title: "Jalso",
            desc: "Gujarat's culture and heritage website built with Node.js, MongoDB, React, and Tailwind CSS.",
            live: "https://jalso.vercel.app/",
            code: "https://github.com/dakshal-d/Jalso-GujaratHeritage-Website",
        },
        {
            img: voice,
            title: "Voice Assistant",
            desc: "Desktop voice assistant using natural language processing to reduce manual tasks and improve day-to-day productivity.",
            live: "https://github.com/dakshal-d/Virtual-Assisstant",
            code: "https://github.com/dakshal-d/Virtual-Assisstant",
        },
        {
            img: Portfolio,
            title: "Portfolio Website",
            desc: "Personal portfolio website built with React and tailored to present projects, experience, and contact information clearly.",
            live: "/",
            code: "https://github.com/dakshal-d/Portfolio-Website",
        },
    ];

    return (
        <section className="px-5 py-28 text-white" id="Projects">
            <div className="container mx-auto max-w-6xl">
                <div className="mb-10 max-w-3xl">
                    <h2 className="section-title mb-5 text-4xl font-bold">
                        Projects
                    </h2>

                    <p className="pb-5 text-lg leading-8 text-slate-300">
                        These are some of my best projects. I have built these with React,
                        MERN and Tailwind CSS.
                    </p>
                </div>
            </div>

            <div className="projects container mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
                {projects.map((project, i) => {
                    return (
                        <article className="project-card glass-panel group overflow-hidden rounded-[2rem] p-4" key={i}>
                            <div className="overflow-hidden rounded-[1.5rem] border border-white/10">
                                <img className="h-[280px] w-full object-cover transition duration-500 group-hover:scale-105" src={project.img} alt={project.title} />
                            </div>
                            <div className="px-2 pb-2 pt-6">
                                <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                                <p className="mt-3 min-h-[88px] text-slate-300">
                                    {project.desc}
                                </p>

                                <div className="mt-6 flex gap-3">
                                    <a
                                        href={project.live}
                                        className="rounded-full bg-teal-300 px-5 py-2 font-semibold text-slate-950 hover:bg-teal-200"
                                    >
                                        Live
                                    </a>
                                    <a
                                        href={project.code}
                                        className="rounded-full border border-white/15 px-5 py-2 font-semibold text-white hover:bg-white/10"
                                    >
                                        Code
                                    </a>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default Projects;