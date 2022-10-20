import React from "react";
import { graphql, HeadFC } from "gatsby";
import  ContactUs  from "../components/ContactUs/ContactUs";
import AboutUs  from "../components/AboutUs/AboutUs";
import LatestPost  from "../components/LatestPost/LatestPost";
import Welcome  from "../components/Welcome/Welcome";
import { IGatsbyImageData } from "gatsby-plugin-image";

export interface ILatestPost {
  title:string
  id:string
  slug:string
  author:{
    name:string
  }
  updatedAt:string
  excerpt:string
  coverImage:{
    gatsbyImageData:IGatsbyImageData
  }
}


const IndexPage = ({ data: { latestPost: { nodes: posts } } }: {data:{latestPost:{nodes:ILatestPost[]}}}) => {
  return (
    <>
      <Welcome />
      <main>
        <LatestPost data={posts} />
        <AboutUs />
        <ContactUs />
      </main>
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
export const query = graphql`
query  {
  latestPost: allGraphCmsPost(sort: {fields: updatedAt, order: DESC}, limit: 3) {
    nodes {
      title
      id
      slug
      author {
        name
      }
      updatedAt
      excerpt
      coverImage {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
  }
}


`

