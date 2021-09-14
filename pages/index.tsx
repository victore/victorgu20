import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { GetStaticProps } from 'next'

const skills = ["AWS", "Golang", "Ruby on Rails", "Javascript", "Typescript", "React", "Redux", "MaterialUI", "UX/UI", "Git", "CI/CD", "Jest", "TestingLibrary"]

export default function Home({
  allPostsData
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
      <p>Hi there! : ) I'm a software engineer from 🇲🇽. I like working with modern technologies to improve the live of users. Currently doing some magic at <a href="https://infosel.com/" target="_blank">Infosel</a>.</p>
      <p>I like basketball, rap music, chess, bikes, podcasts, Nike, Borges, buddhism, cumbia, beers, books.</p>
      <p>(This website was built using <a href="https://nextjs.org/" target="_blank">NextJS</a>, <a href="https://www.typescriptlang.org/" target="_blank">Typescript</a> and deployed on <a href="https://vercel.com/" target="_blank">Vercel</a>.)
        </p>
      </section>
      
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2>Skills</h2>
        <ul>
          {skills.map((skill, index) => <li key={index}>{skill}</li>)}
        </ul>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
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

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}