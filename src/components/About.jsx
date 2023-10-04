import React from "react";
import AboutImg from "../assets/about-img.png";

const About = () => {
  return (
    <section className="bg-gray-900 text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            About Me
          </h2>

          <p className="pb-3">
            Hi, My Name Is Dakshal Dalsania. I am a
            Full Stack Developer and Cloud Enthusiast. I build beautiful websites with React and
            Tailwind CSS.
          </p>
          <p className="pb-3">
            I am proficient in Web Development skills like React.js, Redux, Axios, Tailwind CSS, and many more.
          </p>
          <p className="pb-3">In backend I know Node.js, Express.js, MongoDB, and Mongoose.</p>

          <p>
            In my spare time I learn about generative AI and cloud platforms(generally AWS).
          </p>
        </div>

        <div className="about-img">
          <img
            src={AboutImg}
            alt="coding illustration"
            className="lgw-[80%] md:ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default About;