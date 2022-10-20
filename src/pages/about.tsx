import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const About = ()=>{
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
                <p className="relative text-xl md:text-2xl">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
            </div>
        </section>
    )

}

export default About


