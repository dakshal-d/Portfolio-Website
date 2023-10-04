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
            desc: "A private and secure digital journal. Built with Node.js, MongoDB, React, Redux and Tailwind CSS ",
            live: "https://memorychronicles.vercel.app/",
            code: "https://github.com/dakshal-d/MemoryChronicles",
        },
        {
            img: jalso,
            title: "Jalso",
            desc: "Gujarat's Culture and Heritage Website. Built with Node.js, MongoDB, React and Tailwind CSS",
            live: "https://jalso.vercel.app/",
            code: "https://github.com/dakshal-d/Jalso-GujaratHeritage-Website",
        },
        {
            img: voice,
            title: "Voice Assisstant",
            desc: "Innovative voice assistant, with advanced natural language processing algorithms, resulting in a significant reduction in manual tasks and enhanced productivity for users",
            live: "https://github.com/dakshal-d/Virtual-Assisstant",
            code: "https://github.com/dakshal-d/Virtual-Assisstant",
        },
        {
            img: Portfolio,
            title: "Portfolio Website",
            desc: "Personal Portfolio Website. Used React for the development of this Website",
            live: "https://get-inspirred.netlify.app/",
            code: "https://github.com/dakshal-d/Portfolio-Website",
        },
    ];

    return (
        <section className=" text-white px-5 py-32" id="Projects">
            <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
                <div className="about-info mb-5">
                    <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
                        Projects
                    </h2>

                    <p className="pb-5">
                        These are some of my best projects. I have built these with React,
                        MERN and Tailwind CSS.
                    </p>
                </div>

                <div className="about-img"></div>
            </div>

            <div className="projects container mx-auto grid md:grid-cols-2 gap-10">
                {projects.map((project, i) => {
                    return (
                        <div className="relative" key={i}>
                            <img className="rounded-lg h-[270px] w-[250px]" src={project.img} alt={project.title} />
                            <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[85%]  bg-gray-900  opacity-0 duration-500 justify-center flex-col hover:opacity-100 rounded-lg">
                                <p className="flex py-5 text-center mx-auto font-bold px-2 text-white">
                                    {project.desc}
                                </p>

                                <div className="mx-auto">
                                    <a
                                        href={project.live}
                                        className="px-5 py-2 bg-blue-500 hover:bg-blue-600 mr-5 font-bold rounded-lg"
                                    >
                                        Live
                                    </a>
                                    <a
                                        href={project.code}
                                        className="px-5 py-2 bg-blue-700 hover:bg-blue-800 font-bold rounded-lg"
                                    >
                                        Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Projects;