import React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const Footer = () => {
    return (
        <footer className="bg-[#171717] text-white text-center flex flex-col gap-y-5 md:mt-auto">
            <h2 className="mt-10 font-bold">PageName</h2>
            <ul className="flex justify-center">
                <li className="mr-2"><Link to="/">Home</Link></li>
                <li className="mr-2"><Link to="/about">About</Link></li>
                <li className="mr-2"><Link to="/blog">Blog</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
            </ul>
            <span><FontAwesomeIcon icon={faPhone as IconProp} /> Phone number:</span>
            <span><FontAwesomeIcon icon={faEnvelope as IconProp} /> Email addres:</span>
            <span className="mb-10 relative before:h-[1px] md:before:w-[50%] before:w-[70%] before:bg-white before:content-[''] before:absolute before:left-[50%] before:translate-x-[-50%]">Copyright</span>
        </footer>

    )

}

export default Footer