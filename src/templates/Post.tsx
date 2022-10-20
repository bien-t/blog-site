import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { Link } from "gatsby";

interface LatestPost {
    title:string,
    content:string,
    author:string,
    image:IGatsbyImageData
    slug:string
    date:string
}

const Post = ({title,content,author, image,slug,date}:LatestPost) => {
    const postDate = new Date(date);
    return (
            <article className="grid  grid-cols-1 md:grid-cols-2 p-5 gap-y-5 md:gap-y-0 md:gap-x-5">
                <div className="relative">
                    <GatsbyImage image={image} alt="Post cover"  className="max-h-[200px] md:max-h-[100%] " />
                    <div className="bg-[#9ccd3c] text-white uppercase font-bold w-16 h-16 absolute top-[50%] translate-y-[-50%] flex justify-center items-center text-center md:w-[80px] md:h-[80px] ">
                    {postDate.getDate()} <br />{new Intl.DateTimeFormat('en-US', { month: 'short' }).format(new Date(postDate))}
                </div>
                </div>
                <div className="shadow shadow-slate-600 p-5 flex flex-col">
                    <h3 className="font-bold text-xl">{title}</h3>
                    <p>{content}</p>
                    <button type="button" className="bg-[#9ccd3c] text-white uppercase self-end mt-2 md:mt-auto" ><Link className="px-5 py-2  inline-block" to={`/blog/${slug}`}>Read More</Link></button>
                    <span className="text-[#9ccd3c] md:mt-auto">Post By: {author} </span>
                </div>
            </article>

    )

}

export default Post