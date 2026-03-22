import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const name = "<Dakshal-d/>";

  return (
    <header className="sticky top-0 z-50 px-4 pt-5">
      <div className="glass-panel mx-auto flex h-20 max-w-6xl items-center justify-between rounded-full px-6 text-white">
        <a href="/" className="text-2xl font-bold text-teal-300">
          {name}
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          <li><a className="rounded-full px-4 py-2 text-slate-200 hover:bg-white/10 hover:text-white" href="/#about">About</a></li>
          <li><a className="rounded-full px-4 py-2 text-slate-200 hover:bg-white/10 hover:text-white" href="/#experience">Experience</a></li>
          <li><a className="rounded-full px-4 py-2 text-slate-200 hover:bg-white/10 hover:text-white" href="/#Projects">Projects</a></li>
          <li><a className="rounded-full px-4 py-2 text-slate-200 hover:bg-white/10 hover:text-white" href="/#Contact">Contact</a></li>
          <li><a className="rounded-full bg-teal-300 px-5 py-2 font-semibold text-slate-950 hover:bg-teal-200" href="https://drive.google.com/file/d/1COLcKQCuCV0tS8U05MV5oBQlIUD9hw1M/view?usp=drive_link">Resume</a></li>
        </ul>
        <button onClick={handleNav} className="block rounded-full border border-white/15 bg-white/5 p-3 md:hidden" aria-label="Toggle navigation">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </button>
      </div>
      <ul className={nav ? "glass-panel fixed left-4 right-4 top-28 rounded-3xl border border-white/10 p-6 text-white ease-in-out duration-500 md:hidden" : "pointer-events-none fixed left-4 right-4 top-20 rounded-3xl border border-white/0 p-6 opacity-0 ease-in-out duration-500 md:hidden"}>
        <li className="border-b border-white/10 py-3"><a href="/#about" onClick={handleNav}>About</a></li>
        <li className="border-b border-white/10 py-3"><a href="/#experience" onClick={handleNav}>Experience</a></li>
        <li className="border-b border-white/10 py-3"><a href="/#Projects" onClick={handleNav}>Projects</a></li>
        <li className="border-b border-white/10 py-3"><a href="/#Contact" onClick={handleNav}>Contact</a></li>
        <li className="pt-4"><a className="inline-flex rounded-full bg-teal-300 px-5 py-2 font-semibold text-slate-950" href="https://drive.google.com/file/d/1COLcKQCuCV0tS8U05MV5oBQlIUD9hw1M/view?usp=drive_link">Resume</a></li>
      </ul>
    </header>
  );
};

export default Navbar;
