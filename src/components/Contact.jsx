import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
    const form = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_m2uv4y3', 'template_rbddve5', form.current, 'pU2Br9ZpJz-XjRLTv')
        .then((result) => {
          console.log(result.text);
          toast.success('Message sent successfully');
        }, (error) => {
          console.log(error.text);
          toast.error('Failed to send message');
        });
      form.current.reset();
    };

    return (
        <section className="px-5 pb-24 pt-10" id="Contact">
            <div className="container mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.88fr_1.12fr]">
                <div className="glass-panel rounded-[2rem] p-8 text-white">
                    <h2 className="section-title mb-6 text-4xl font-bold">Contact</h2>
                    <p className="text-lg leading-8 text-slate-300">
                        If you are building with AI, exploring product ideas, or hiring for software engineering roles, feel free to reach out.
                    </p>
                    <div className="mt-8 grid gap-4">
                        <a className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-slate-200 hover:bg-white/10" href="mailto:dakshaldalsania59@gmail.com">
                            <span className="block text-sm uppercase tracking-[0.2em] text-slate-400">Email</span>
                            <span className="mt-2 block text-lg">dakshaldalsania59@gmail.com</span>
                        </a>
                        <a className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-slate-200 hover:bg-white/10" href="https://www.linkedin.com/in/dakshal-d">
                            <span className="block text-sm uppercase tracking-[0.2em] text-slate-400">LinkedIn</span>
                            <span className="mt-2 block text-lg">linkedin.com/in/dakshal-d</span>
                        </a>
                        <a className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-slate-200 hover:bg-white/10" href="https://github.com/dakshal-d">
                            <span className="block text-sm uppercase tracking-[0.2em] text-slate-400">GitHub</span>
                            <span className="mt-2 block text-lg">github.com/dakshal-d</span>
                        </a>
                    </div>
                    <div className="mt-8 flex gap-4 text-slate-300">
                        <a href="https://github.com/dakshal-d" className="rounded-full border border-white/10 bg-white/5 p-3 hover:text-teal-200"><AiFillGithub size={24} /></a>
                        <a href="https://www.linkedin.com/in/dakshal-d" className="rounded-full border border-white/10 bg-white/5 p-3 hover:text-teal-200"><AiFillLinkedin size={24} /></a>
                        <a href="mailto:dakshaldalsania59@gmail.com" className="rounded-full border border-white/10 bg-white/5 p-3 hover:text-teal-200"><AiOutlineMail size={24} /></a>
                    </div>
                </div>
                <div className="glass-panel rounded-[2rem] p-8 text-white">
                    <p className="mb-2 text-sm uppercase tracking-[0.28em] text-teal-200">Send Message</p>
                    <h3 className="text-3xl font-bold">Start a conversation</h3>
                    <p className="mt-3 text-slate-300">Use the form below and I will get back to you as soon as possible.</p>
                    <form className="mt-8 grid gap-5" onSubmit={handleSubmit} ref={form}>
                        <div>
                            <label className="mb-2 block text-sm uppercase tracking-[0.18em] text-slate-400">Name</label>
                            <input type="text" name="name" className="w-full rounded-2xl border border-white/10 bg-slate-950/70 p-4 text-white outline-none transition focus:border-teal-300/50" />
                        </div>
                        <div>
                            <label className="mb-2 block text-sm uppercase tracking-[0.18em] text-slate-400">Email</label>
                            <input type="email" name="email" className="w-full rounded-2xl border border-white/10 bg-slate-950/70 p-4 text-white outline-none transition focus:border-teal-300/50" />
                        </div>
                        <div>
                            <label className="mb-2 block text-sm uppercase tracking-[0.18em] text-slate-400">Message</label>
                            <textarea type="message" name="text" rows="5" className="w-full rounded-2xl border border-white/10 bg-slate-950/70 p-4 text-white outline-none transition focus:border-teal-300/50"></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-fit rounded-full bg-teal-300 px-6 py-3 font-semibold text-slate-950 hover:bg-teal-200"
                        >
                            Submit
                        </button>
                        <ToastContainer />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
