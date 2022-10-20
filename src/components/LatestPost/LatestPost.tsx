import React from "react";
import  Post  from "../../templates/Post";
import { ILatestPost } from "../../pages";
const LatestPost = ({data}:{data:ILatestPost[]}) => {
    return (
        <section className="max-w-[1140px] md:my-0 md:mx-auto">
            <h2 className="text-center mt-5 text-2xl md:text-3xl font-bold">Recent Post</h2>
            {
                data && data.map((post)=>{
                    return <Post key={post.id} date={post.updatedAt}  title={post.title} content={post.excerpt} author={post.author.name} image={post.coverImage.gatsbyImageData} slug={post.slug} />
                })
            }
          
        </section>
    )

}

export default LatestPost