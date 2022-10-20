import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const ContactUs = () => {

    const submitForm = (event: React.FormEvent) => {
        event.preventDefault();
        console.log('Form sent');
    }

    return (
        <section className="px-10  grid grid-cols-1 md:grid-cols-2 max-w-[1140px] md:mt-0 md:mb-10 md:mx-auto">
            <StaticImage src="../../images/contact.jpg" alt="Contact us" />
            <form className="flex flex-col gap-y-3 p-2 mt-5 md:mt-0 md:ml-5" onSubmit={submitForm}>
                <h2>Contact Us</h2>
                <input type="text" name="inputName" id="inputName" placeholder="Name" className="shadow shadow-slate-600 p-2" required />
                <input type="tel" name="inputPhone" id="inputPhone" placeholder="Phone" className="shadow shadow-slate-600 p-2" required />
                <input type="email" name="inputEmail" id="inputEmail" placeholder="Email" className="shadow shadow-slate-600 p-2" required />
                <textarea rows={5} name="inputMessage" id="inputMessage " placeholder="Message" className="shadow shadow-slate-600 resize-none p-2" required />
                <button type="submit" className="self-start bg-[#9ccd3c] px-10 py-2 text-white uppercase mt-5">Send</button>
            </form>
        </section>
    )
}

export default ContactUs