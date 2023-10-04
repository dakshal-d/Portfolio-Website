import React from "react";
import AboutImg from "../assets/about-img.png";
import {
  BiLogoAws,
  BiLogoMicrosoft
} from "react-icons/bi";
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
          <h3 className="mt-8 text-3xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            Certifications
          </h3>
          <div className="grid grid-cols-2 mx-auto gap-10">

              <a href="https://www.credly.com/badges/fbb9cc9c-26d0-490a-8fdd-3eff88d32326/public_url" className="hover:bg-black rounded-xl px-12 py-10">
                <BiLogoAws className="mx-20" size={80} />
                <p>AWS-Cloud Practitioner(CLF-C01)</p>
              </a>

              <a href="https://www.credly.com/badges/f031ba25-6b98-4250-b7f3-bec6b24fec5e/public_url" className="hover:bg-black rounded-xl px-7 py-10">
                <BiLogoMicrosoft className="mx-24" size={80} />
                <p>Microsoft Azure Fundamentals(AZ-900)</p>
              </a>
          </div>


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