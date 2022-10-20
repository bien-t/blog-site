import React from "react";
import { GatsbyImage, IGatsbyImageData} from "gatsby-plugin-image";
import {Link} from 'gatsby';

export interface BlogPost {
    title:string,
    content:string,
    author:string,
    image: IGatsbyImageData,
    date:string
    tags:string[],
    postId:string
}

const BlogPostLayout = ({ title, content, author, image, date, tags, postId }:BlogPost) => {
    const postDate = new Date(date);
    return (
        <article className="grid pb-5 px-5 relative">
            <div className="relative">
                <GatsbyImage image={image} alt="Post cover" className="max-h-[200px] md:max-h-[100%] " />
                <div className="bg-[#9ccd3c] text-white uppercase font-bold w-16 h-16 absolute top-[50%] translate-y-[-50%] flex justify-center items-center text-center md:w-[80px] md:h-[80px] ">
                    {postDate.getDate()} <br />{new Intl.DateTimeFormat('en-US', { month: 'short' }).format(new Date(postDate))}
                </div>
            </div>
            <div className="shadow shadow-slate-600 p-5 md:flex md:flex-col">
                <h3 className="font-bold text-xl">{title}</h3>
                <p>{content}</p>
                <span className="text-[#9ccd3c] md:mt-auto">Post By: {author} </span>
                <div className="flex flex-wrap gap-y-2 gap-x-2 mt-5">
                    {tags && tags.map((tag: string) => {
                        return <button key={`${postId}-${tag}`} type="button" className="bg-[#9ccd3c] text-white font-bold uppercase" ><Link className=" py-2 px-5 inline-block" to={`/tag/${tag}`}>{tag}</Link></button>

                    })
                    }
                </div>
            </div>

        </article>

    )

}

export default BlogPostLayout