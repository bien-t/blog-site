import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const Welcome = () => {
    const data = useStaticQuery(graphql`
    query {
        home:  file(relativePath: {regex: "/home.jpg/"}) {
            publicURL
      }
    }
    `);

    return (
        <header className="text-center h-[300px] md:h-[400px] md:text-5xl flex justify-center items-center font-bold text-3xl p-16  bg-center bg-cover relative before:bg-slate-600 before:w-full before:h-full before:content-[''] before:absolute before:left-0 before:top-0 before:opacity-70 before:z-1" style={{ backgroundImage: `url(${data.home.publicURL})`}}>
            <h1 className="uppercase text-white font-bold relative">Welcome to<br /> Our Blog</h1>
        </header>
    )
}

export default Welcome
