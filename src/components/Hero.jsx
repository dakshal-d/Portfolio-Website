import React from "react";
import HeroImg from "../assets/hero-img.png";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

const Hero = () => {
  return (
    <section className="grid-pattern px-5 pb-24 pt-16 text-white md:pt-24">
      <div className="container mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.15fr_0.85fr] md:items-center">
        <div className="hero-info pb-5 md:pb-0 slide-in-left">
          <p className="mb-5 inline-flex rounded-full border border-teal-300/30 bg-teal-300/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.28em] text-teal-200">
            Software Engineer
          </p>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-[3.4rem]">
            Learning & Building AI systems
          </h1>

          <p className="max-w-2xl py-6 text-lg leading-8 text-slate-300">
            I am Dakshal Dalsania, a software engineer focused on Generative AI,
            agentic workflows, RAG pipelines, and scalable full-stack
            applications that ship cleanly into production.
          </p>

          <p className="pb-8 text-slate-400">
            Bengaluru, India • MuSigma Business Solutions • GenAI, MCP, RAG,
            LangGraph, AWS
          </p>

          <div className="flex flex-wrap gap-4 py-2">
            <a href="/#Projects" className="rounded-full bg-teal-300 px-7 py-3 font-semibold text-slate-950 shadow-[0_12px_30px_rgba(94,234,212,0.25)] hover:bg-teal-200">
              See Projects
            </a>
            <a href="/#experience" className="rounded-full border border-white/15 px-7 py-3 font-semibold text-white hover:bg-white/10">
              View Experience
            </a>
          </div>

          <div className="mt-8 flex gap-5 text-slate-300">
            <a href="https://github.com/dakshal-d" className="inline-flex rounded-full border border-white/10 bg-white/5 p-3 hover:border-teal-300/40 hover:text-teal-200">
              <AiFillGithub size={28} />
            </a>
            <a href="https://www.linkedin.com/in/dakshal-d" className="inline-flex rounded-full border border-white/10 bg-white/5 p-3 hover:border-teal-300/40 hover:text-teal-200">
              <AiFillLinkedin size={28} />
            </a>
            <a href="mailto:dakshaldalsania59@gmail.com" className="inline-flex rounded-full border border-white/10 bg-white/5 p-3 hover:border-teal-300/40 hover:text-teal-200">
              <AiOutlineMail size={28} />
            </a>
          </div>
        </div>

        <div className="slide-from-top">
          <div className="glass-panel relative overflow-hidden rounded-[2rem] p-6">
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="absolute -bottom-16 left-0 h-40 w-40 rounded-full bg-emerald-300/10 blur-3xl" />
            <div className="grid gap-6">
              <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-4">
                <img src={HeroImg} alt="coding illustration" className="mx-auto max-h-[380px] w-full object-contain" />
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Focus</p>
                  <p className="mt-2 text-xl font-semibold text-white">GenAI</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Specialty</p>
                  <p className="mt-2 text-xl font-semibold text-white">Agents + RAG</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Cloud</p>
                  <p className="mt-2 text-xl font-semibold text-white">AWS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
