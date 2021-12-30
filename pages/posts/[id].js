import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/post";

// generating pages with dynamic routes 

// this component will render the page for particular post which is requested throught id
export default function Post({postData}){
    return(
        <Layout>
            {postData.title}
            <br/>
            {postData.id}
            <br/>
            {postData.date}
        </Layout>
    )
}

// this returns arrat of possible values for id
export async function getStaticPaths(){
    const paths = getAllPostIds()
    return{
        paths,
        fallback:false
    }
}

// The post page is now using the getPostData function in getStaticProps to get the post data and return it as props.
// this component fetches necessary data for the post with id
export async function getStaticProps({params}){
    const postData = getPostData(params.id)
    return{
        props: {
            postData
        }
    }
}