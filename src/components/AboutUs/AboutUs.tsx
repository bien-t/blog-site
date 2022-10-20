import React from "react";
import { graphql, useStaticQuery, Link } from 'gatsby';

const AboutUs = () => {
    const data = useStaticQuery(graphql`
    query {
        about:  file(relativePath: {regex: "/about.jpg/"}) {
            publicURL
      }
    }
    `);
    
    return (
        <section className="text-center gap-y-4 p-10 mb-10 bg-center bg-no-repeat bg-cover text-white before:bg-slate-600 relative before:w-full before:h-full before:content-[''] before:absolute before:left-0 before:top-0 before:opacity-60 before:z-1 md:h-[400px]" style={{ backgroundImage: `url(${data.about.publicURL})` }}>
            <div className="md:max-w-[1140px] flex  w-full h-full md:mx-auto md:my-0 justify-center items-center flex-wrap">
                <h2 className="relative text-2xl md:text-3xl font-bold ">About Us</h2>
                <p className="relative text-xl md:text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea...</p>
                <button type="button" className="bg-[#9ccd3c]  text-white uppercase mt-5 relative"><Link className="px-10 py-2  inline-block" to="/about">Read more</Link> </button>
            </div>
        </section>
    )
}

export default AboutUs