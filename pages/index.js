import Head from 'next/head'

import SubscribeForm from '../components/SubscribeForm'

import styles from '../styles/modules/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>Unearth - Reddit Saves, Reimagined</title>
        <meta name='title' content='Unearth - Reddit Saves, Reimagined' />
        <meta
          name='description'
          content='Gone are the days of mindlessly saving things and forgetting to look at it later. Unearth gives you the tools you need to get the most out of Reddit saves.'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://www.tryunearth.com/' />
        <meta
          property='og:title'
          content='Unearth - Reddit Saves, Reimagined'
        />
        <meta
          property='og:description'
          content='Gone are the days of mindlessly saving things and forgetting to look at it later. Unearth gives you the tools you need to get the most out of Reddit saves.'
        />
        <meta property='og:image' content='/og-image.png' />

        {/* <!-- Twitter --> */}
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://www.tryunearth.com/' />
        <meta
          property='twitter:title'
          content='Unearth - Reddit Saves, Reimagined'
        />
        <meta
          property='twitter:description'
          content='Gone are the days of mindlessly saving things and forgetting to look at it later. Unearth gives you the tools you need to get the most out of Reddit saves.'
        />
        <meta property='twitter:image' content='/og-image.png' />

        <link
          rel='preload'
          href='/fonts/publico/PublicoText-Roman.otf'
          as='font'
          crossOrigin=''
        />
        <link
          rel='preload'
          href='/fonts/relative/relative-medium.ttf'
          as='font'
          crossOrigin=''
        />
        <link
          rel='preload'
          href='/fonts/relative/relative-bold.ttf'
          as='font'
          crossOrigin=''
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>unearth</h1>

        <p className={styles.description}>
          Hey, Cedric here, thanks for stopping by! I've been a Redditor for
          over eight years and throughout this time have amassed a collection of
          over 900 saved posts and comments. That's a lot of stuff to try and
          sift through.
        </p>

        <p className={styles.description}>
          Now, I love Reddit. Reddit is so much more than just a social
          platform—it's a place to connect with like-minded individuals with
          similar interests, sure, but it's also a deep treasure trove of
          fascinating content just waiting to be discovered.
        </p>

        <p className={styles.description}>
          When I found out Reddit provides no tools to help manage or organize
          my saves, I became a little disheartened with the product.
          Unfortunately, I wasn't the only person who felt this way.
        </p>

        <p className={styles.description}>
          Inspired by what TweetDeck did for Twitter, I set out to create the
          most accessible and intuitive solution for managing and organizing
          Reddit saves.
        </p>

        <h2 className={styles.subtitle}>Reddit Saves, Reimagined</h2>

        <p className={styles.description}>
          Development of Unearth was and always will be driven by the following
          principles:
        </p>

        <p>You deserve to be able to save more than 1000 things.</p>
        <p>You deserve to be able to search your saved content.</p>
        <p>
          You deserve to be able to create tags and organize similar content.
        </p>
        <p>
          You deserve to be able to bulk delete saves and more easily manage
          your saved content.
        </p>
        <p>
          You deserve to be able to sort your saves by subreddit, author, and
          more to find exactly what you're looking for.
        </p>

        <p className={styles.description}>
          Gone are the days of mindlessly saving things and forgetting to look
          at it later. Unearth gives you the tools you need to get the most out
          of Reddit saves.
        </p>

        <h2 className={styles.subtitle}>Stay in the Loop</h2>

        <p className={styles.description}>
          Want to be among the first to try Unearth?
        </p>

        <SubscribeForm />
      </main>
    </div>
  )
}
