import React, { useRef }  from "react";
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        <section className="bg-gray-900 px-5 py-20" id="Contact">
            <div className="text-center md:w-3/4 mx-auto text-white">
                <h2 className="text-4xl font-bold mb-5 border-b-4 border-indigo-600 pb-2">Contact Me</h2>
                <p className="mb-4">If you want to discuss anything, feel free to send a message.</p>
                <form className="flex-col w-[50%] mx-auto" onSubmit={handleSubmit} ref={form}>
                    <div className="mb-4">
                        <label className="block text-white">Name:</label>
                        <input type="text" name="name" className="form-input w-full bg-gray-800 text-white rounded-md p-2" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white">Email:</label>
                        <input type="email" name="email" className="form-input w-full bg-gray-800 text-white rounded-md p-2" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-white">Message:</label>
                        <textarea type="message" name="text" rows="4" className="form-textarea w-full bg-gray-800 text-white rounded-md p-2"></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 px-4 py-2 text-white font-semibold rounded-md"
                    >
                        Submit
                    </button>
                    <ToastContainer />
                </form>
            </div>
        </section>
    );
};

export default Contact;
