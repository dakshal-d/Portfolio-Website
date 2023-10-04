import React from "react";
import HeroImg from "../assets/hero-img.png";
import {
    AiFillGithub,
    AiFillLinkedin,
    AiFillInstagram,
} from "react-icons/ai";

const Hero = () => {
    return (
        <section className="px-5 text-white py-32">
            <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
                <div className="hero-info pb-5 md:pb-0 slide-in-left">
                    <h1 className="text-4xl lg:text-6xl ">
                        Hi, <br />I am <span className="">Dakshal</span><br />
                        A <span className="underline text-blue-600 animate-pulse italic">Pro</span>grammer
                    </h1>

                    <p className="py-5">
                        I am proficient in Java, React.js and Tailwind CSS
                    </p>

                    <div className="flex py-5 ">
                        <a
                            href="https://twitter.com/CoderAmrin"
                            className="pr-4 inline-block hover:text-blue-400"
                        >
                          
                            <AiFillGithub size={40} />
                        </a>
                        <a
                            href="https://www.youtube.com/@coderamrin"
                            className="pr-4 inline-block hover:text-blue-400"
                        >
                
                            <AiFillLinkedin size={40} />
                        </a>
                        <a
                            href="https://www.facebook.com/CoderAmrin/"
                            className="pr-4 inline-block hover:text-blue-400"
                        >
                           
                            <AiFillInstagram size={40} />
                        </a>
                    </div>

                    <a
                        href="/#projects"
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