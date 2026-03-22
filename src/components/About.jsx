import React from "react";
import AboutImg from "../assets/about-img.png";
import { BiLogoAws, BiLogoMicrosoft } from "react-icons/bi";

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
    <section className="px-5 pb-16 pt-20 text-white" id="about">
      <div className="container mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.08fr_0.92fr] md:items-start">
        <div className="about-info">
          <h2 className="section-title mb-6 text-4xl font-bold">
            About Me
          </h2>

          <p className="max-w-2xl pb-4 text-lg leading-8 text-slate-300">
            I am Dakshal Dalsania, a software engineer focused on Generative AI,
            agentic systems, and full-stack product development. My recent work
            has centered on building production-grade LLM applications that solve
            real business problems.
          </p>
          <p className="max-w-2xl pb-4 text-lg leading-8 text-slate-300">
            I work across the stack with React, Node.js, Flask, PostgreSQL, and
            AWS, and I am especially interested in RAG pipelines, tool-calling,
            MCP-based architectures, and AI observability.
          </p>
          <p className="max-w-2xl text-lg leading-8 text-slate-300">
            I graduated with a B.Tech in Computer Science Engineering from
            Vellore Institute of Technology with a CGPA of 8.56/10, and I keep
            building at the intersection of software engineering and applied AI.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="glass-panel rounded-3xl p-5"
              >
                <h3 className="text-lg font-semibold text-teal-200">
                  {group.title}
                </h3>
                <p className="pt-3 leading-7 text-slate-300">{group.items}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-6">
          <div className="glass-panel rounded-[2rem] p-6">
            <img src={AboutImg} alt="coding illustration" className="mx-auto max-h-[360px] w-full object-contain" />
          </div>
          <div className="glass-panel rounded-[2rem] p-6">
            <h3 className="section-title mb-6 text-3xl font-bold">
              Certifications
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <a href="https://www.credly.com/badges/fbb9cc9c-26d0-490a-8fdd-3eff88d32326/public_url" className="rounded-3xl border border-white/10 bg-white/5 px-6 py-8 text-center hover:bg-white/10">
                <BiLogoAws className="mx-auto text-teal-200" size={72} />
                <p className="mt-4 font-medium text-slate-200">AWS Cloud Practitioner</p>
                <p className="mt-1 text-sm text-slate-400">CLF-C01</p>
              </a>

              <a href="https://www.credly.com/badges/f031ba25-6b98-4250-b7f3-bec6b24fec5e/public_url" className="rounded-3xl border border-white/10 bg-white/5 px-6 py-8 text-center hover:bg-white/10">
                <BiLogoMicrosoft className="mx-auto text-cyan-200" size={72} />
                <p className="mt-4 font-medium text-slate-200">Azure Fundamentals</p>
                <p className="mt-1 text-sm text-slate-400">AZ-900</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
