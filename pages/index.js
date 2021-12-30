import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Sanjay. I am Freelance Blockchain Developer.</p>
        <p>My speciality and interest is in Hyperledger Fabric,
           an enterprise Blockchain framework and I am developing my skills in decentralized identity ecosystem.
        </p>
      </section>
    </Layout>
  )
}
