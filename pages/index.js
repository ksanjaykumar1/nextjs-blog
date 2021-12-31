import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/post'
import utilStyles from '../styles/utils.module.css'
import Date from '../components/date'

export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Sanjay. I am Freelance Blockchain Developer.</p>
        <p>
          My speciality and interest are in Hyperledger Fabric, an enterprise Blockchain framework and I am developing my skills in decentralized identity ecosystem (SSI). 
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blogs</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({id,date,title})=>(
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
// By returning allPostsData inside the props object in getStaticProps, the blog posts will be passed to the Home component as a prop
export async function getStaticProps(){
  const allPostsData = getSortedPostsData()
  return{
    props:{
      allPostsData
    }
  }
}
