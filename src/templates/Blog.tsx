import React from 'react';
import  BlogPostLayout  from './BlogPostLayout';
import Pagination from '../components/Pagination/Pagination';
import { graphql } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';
export interface IBlogPost {
  tags:string[]
  title:string
  id:string
  content:{
    text:string
  }
  author:{
    name:string
  }
  updatedAt:string
  coverImage:{
    gatsbyImageData:IGatsbyImageData
  }
}

const Blog = ({ data: { BlogPost: { nodes: posts } },pageContext }:{data:{BlogPost:{nodes:IBlogPost[]}},pageContext:{pageNumber:number,currentPage:number}}) => {
    return (
        <section className="md:max-w-[700px] md:my-0 md:mx-auto">
            <h2 className="text-center text-2xl md:text-3xl font-bold md:mb-5 hidden md:block">Blog</h2>
            {
                posts && posts.map((post) => {
                    return <BlogPostLayout key={post.id} title={post.title} content={post.content.text} author={post.author.name} image={post.coverImage.gatsbyImageData} date={post.updatedAt} tags={post.tags} postId={post.id} />

                })
            }
            <Pagination pageNumber={pageContext.pageNumber} currentPage={pageContext.currentPage} />
        </section>
    )

}

export default Blog;
export const query = graphql`
query($limit:Int!,$skip:Int!)  {
  BlogPost: allGraphCmsPost(sort: {fields: updatedAt, order: DESC},limit:$limit,skip:$skip) {
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
