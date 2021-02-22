import Head from 'next/head'

import SubscribeForm from '../components/SubscribeForm'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Unearth - Reddit Saves, Reimagined</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Reddit Saves, Reimagined</h1>

        <p className={styles.description}>
          Unearth gives you the tools you need to make sense of your Reddit
          saves. Manage, organize, and search your saved posts and comments and
          rediscover the long-forgotten content.
        </p>

        <SubscribeForm />
      </main>
    </div>
  )
}
