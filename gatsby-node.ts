import type { GatsbyNode } from "gatsby";
import path from "path";

type TagQuery = {
    errors?: any
    data?: {
        allGraphCmsPost: {
            group: [{ fieldValue: string }]
        }
    }
}

type PostQuery ={
    errors?: any
    data?: {
        allGraphCmsPost: {
            nodes :[
                {id:string}
            ]
        }
    }
}


export const createPages: GatsbyNode["createPages"] = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const blogPost = path.resolve('src/templates/Tags.tsx');
    const tagResult: TagQuery = await graphql(`
        query {
            allGraphCmsPost 
            {
               group(field: tags) {
                  fieldValue
                  }
             }
            }
    `)

    tagResult.data?.allGraphCmsPost.group.forEach(tag => {
        createPage({
            path: `/tag/${tag.fieldValue}`,
            component: blogPost,
            context: {
                tag: tag.fieldValue
            }
        })
    })


    const blogPage = path.resolve('src/templates/Blog.tsx');
    const postResult:PostQuery = await graphql(`
        query {
            allGraphCmsPost{
                nodes {
                    id
                }
            }
        }
    `)

    const postLength = postResult.data!.allGraphCmsPost.nodes.length;
    const pageLimit = 2;
    const pageNumber = Math.ceil(postLength / pageLimit);
    Array.from({length:pageNumber}).forEach((_,i)=>{
        createPage({
            path: i === 0 ? `/blog` : `/blog/${i + 1}`,
            component:blogPage,
            context: {
                limit: pageLimit,
                skip: i * pageLimit,
                pageNumber,
                currentPage: i + 1,
              },
        })
    })
}