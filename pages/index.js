import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://leandrosilvadsn.com"> &#013; leandrosilvadsn.com!</a>
        </h1>

        <p className={styles.description}>
          See my projects and skills in development.
        </p>

        <div className={styles.grid}>
          <a href="https://github.com/leandrosilvadsn" target="_blank" className={styles.card}>
            <h3>GitHub &rarr;</h3>
            <p>Where some of my projects and skills can be found, cloned and viewed.</p>
          </a>

          <a href="https://www.linkedin.com/in/leandrosilvadsn" target="_blank" className={styles.card}>
            <h3>Linkedin &rarr;</h3>
            <p>Companies where I worked, technologies used and professional experience.</p>
          </a>

        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h4>▲ Next.js</h4> 
          Developed by<h4>©Leandro Silva</h4> 
        </a>
      </footer>
    </div>
  )
}
