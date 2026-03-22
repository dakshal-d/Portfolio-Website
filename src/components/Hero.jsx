import React from "react";
import HeroImg from "../assets/hero-img.png";
import {
    AiFillGithub,
    AiFillLinkedin,
    AiOutlineMail,
} from "react-icons/ai";

const Hero = () => {
    return (
        <section className="px-5 text-white py-32">
            <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
                <div className="hero-info pb-5 md:pb-0 slide-in-left">
                    <p className="uppercase tracking-[0.35em] text-sm text-blue-300 mb-4 font-semibold">
                        Software Engineer
                    </p>
                    <h1 className="text-4xl lg:text-6xl ">
                        Hi, <br />I am <span className="">Dakshal</span><br />
                        Building AI products and full-stack systems
                    </h1>

                    <p className="py-5">
                        Results-driven engineer focused on Generative AI, agentic
                        workflows, RAG pipelines, and scalable web applications.
                    </p>

                    <p className="pb-5 text-gray-300">
                        Bengaluru, India • MuSigma Business Solutions • React,
                        Node.js, Flask, LangGraph, AWS
                    </p>

                    <div className="flex py-5 ">
                        <a
                            href="https://github.com/dakshal-d"
                            className="pr-4 inline-block hover:text-blue-400"
                        >
                          
                            <AiFillGithub size={40} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/dakshal-d"
                            className="pr-4 inline-block hover:text-blue-400"
                        >
                
                            <AiFillLinkedin size={40} />
                        </a>
                        <a
                            href="mailto:dakshaldalsania59@gmail.com"
                            className="pr-4 inline-block hover:text-blue-400"
                        >
                           
                            <AiOutlineMail size={40} />
                        </a>
                    </div>

                    <a
                        href="/#Projects"
                        className=" border-2 text-white px-6 py-3 hover:bg-white rounded-xl hover:bg-gradient-to-br from-blue-900 to-indigo-400 focus:ring-1 focus:outline-none focus:ring-blue-400"
                    >
                        See Projects
                    </a>
                </div>

                <div className="contrast-125 slide-from-top">
                    <img
                        src={HeroImg}
                        alt="coding illustration"
                        className="lgw-[80%] ml-auto"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;