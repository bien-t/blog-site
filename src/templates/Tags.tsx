import React from "react";
import BlogPostLayout from "./BlogPostLayout";
import { graphql } from "gatsby";
import { IBlogPost } from "./Blog";

const Tags = ({ data: { BlogPosts: { nodes: posts } }}: {data:{BlogPosts:{nodes:IBlogPost[]}}}) => {
    return (
        <section className="md:max-w-[700px] md:my-0 md:mx-auto">
            {
                posts && posts.map((post) => {
                    return <BlogPostLayout key={post.id} title={post.title} content={post.content.text} author={post.author.name} image={post.coverImage.gatsbyImageData} date={post.updatedAt} tags={post.tags} postId={post.id} />

                })
            }
        </section>
    )


}

export const query = graphql`
query($tag:String)  {
  BlogPosts:  allGraphCmsPost(filter: {tags: {in:[$tag]}}) {
      nodes {
        tags
        title
        id
        content {
          text
        }
        author {
          name
        }
        updatedAt
        coverImage {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
}
`

export default Tags
