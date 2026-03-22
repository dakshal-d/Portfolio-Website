import React from "react";
import AboutImg from "../assets/about-img.png";
import {
  BiLogoAws,
  BiLogoMicrosoft
} from "react-icons/bi";

const skillGroups = [
  {
    title: "Generative AI",
    items: "LangGraph, RAG Pipelines, AI Agents, Tool Calling, MCP, Prompt Engineering, LLM Evaluation, Langfuse, OpenAI, AWS Bedrock",
  },
  {
    title: "Frontend",
    items: "React.js, TypeScript, JavaScript, HTML5, Tailwind CSS",
  },
  {
    title: "Backend",
    items: "Python, Node.js, Flask, REST APIs",
  },
  {
    title: "Cloud & DevOps",
    items: "AWS, Docker, Jenkins, CI/CD",
  },
];

const About = () => {
  return (
    <section className="bg-gray-900 text-white px-5 pt-32 pb-16" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            About Me
          </h2>

          <p className="pb-3">
            I am Dakshal Dalsania, a software engineer focused on Generative AI,
            agentic systems, and full-stack product development. My recent work
            has centered on building production-grade LLM applications that solve
            real business problems.
          </p>
          <p className="pb-3">
            I work across the stack with React, Node.js, Flask, PostgreSQL, and
            AWS, and I am especially interested in RAG pipelines, tool-calling,
            MCP-based architectures, and AI observability.
          </p>
          <p>
            I graduated with a B.Tech in Computer Science Engineering from
            Vellore Institute of Technology with a CGPA of 8.56/10, and I keep
            building at the intersection of software engineering and applied AI.
          </p>

          <div className="mt-8 grid gap-4">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-xl border border-gray-800 bg-black/30 p-4"
              >
                <h3 className="text-lg font-semibold text-blue-300">
                  {group.title}
                </h3>
                <p className="pt-2 text-gray-300">{group.items}</p>
              </div>
            ))}
          </div>

          <h3 className="mt-8 text-3xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            Certifications
          </h3>
          <div className="grid grid-cols-2 mx-auto gap-10">

              <a href="https://www.credly.com/badges/fbb9cc9c-26d0-490a-8fdd-3eff88d32326/public_url" className="hover:bg-black rounded-xl px-6 py-10">
                <BiLogoAws className="mx-auto" size={80} />
                <p>AWS-Cloud Practitioner(CLF-C01)</p>
              </a>

              <a href="https://www.credly.com/badges/f031ba25-6b98-4250-b7f3-bec6b24fec5e/public_url" className="hover:bg-black rounded-xl px-6 py-10">
                <BiLogoMicrosoft className="mx-auto" size={80} />
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
