import React from "react";
import  BlogPostLayout from "../../templates/BlogPostLayout";
import { graphql } from "gatsby";
import {IBlogPost} from "../../templates/Blog";


const BlogPost = ({ data: { BlogPost: post } }:{data:{BlogPost :IBlogPost}}) => {
  return (
    <section className="md:max-w-[700px] md:my-0 md:mx-auto">
      <BlogPostLayout title={post.title} content={post.content.text} author={post.author.name} image={post.coverImage.gatsbyImageData} date={post.updatedAt} tags={post.tags} postId={post.id} />
    </section>
  )


}

export const query = graphql`
query ($slug:String) {
  BlogPost:   graphCmsPost(slug: {eq: $slug}) {
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


`

export default BlogPost
