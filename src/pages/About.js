import React from 'react'
import { Box, Heading, Text, Stack, Link, Image } from '@chakra-ui/core'

import profilePic from '../assets/cedricamaya.jpg'
import Layout from '../components/Layout'

const About = () => (
  <Layout title='About' theme='light'>
    <Box m='0 auto' maxW='80rem' mb={8} px={{ xs: 6, sm: 12 }}>
      <Heading
        fontFamily='heading'
        fontSize={{ xs: '3rem', sm: '3rem' }}
        as='h1'
        mb='10px'
      >
        From the Creator
      </Heading>
      <Stack spacing={4} maxW={{ xs: 'full', lg: '50%' }}>
        <Text>
          Unearth has been my passion project for several years now. Originally
          a browser extension to surface a few of my saves on the new tab page
          of Chrome, Unearth has since morphed into something entirely
          different.
        </Text>
        <Text>
          After saving hundreds of posts and comments since joining Reddit back
          in 2012, I soon realized that trying to organize my saves was
          impossible and finding anything was just as hard a challenge as well.
          This is because Reddit provides little to no tools to help Redditors
          manage their saves—that is unless you have Reddit Premium and use the
          old Reddit site.
        </Text>
        <Text
          as='cite'
          pl={4}
          fontSize={{ xs: '1.35rem', md: '1.875rem' }}
          fontFamily='heading'
          color='#007bff'
          borderLeftColor='#007bff'
          borderLeftWidth='0.35rem'
        >
          Unearth aims to be the best service at allowing Redditors to view and
          manage their saved things… The best part: it's 100% free.
        </Text>
        <Text>
          I was happy to learn that others had already attempted to address
          these issues with Reddit saves, the biggest players being Reddit
          Manager and Savvit. Unfortunately, I found these services to either be
          too out of date and/or lacking the necessary features I had wanted.
          So, like any software engineer, I decided to build my own app to
          scratch my own itch.
        </Text>
        <Text>
          Enter Unearth. After researching the top issues others had with Reddit
          saves (which correlated closely with my own frustrations), I set out
          to build something to fix said problems. Since the beginning, Unearth
          aims to be the best service at allowing Redditors to view and manage
          their saved things; attempting to outdo Reddit themselves and their
          minimal set of filtering tools. “Best” is hardly objective, so to
          clarify, I wanted Unearth to be the cleanest, fastest, and most
          intuitive tool available for those wishing to get more out of their
          Reddit saves.
        </Text>
        <Text>The best part: it's 100% free.</Text>
        <Text>
          With that said, I invite you to try Unearth. Feel free to suggest new
          features, report any issues, or just hang out on our{` `}
          <Link href='https://reddit.com/r/tryunearth' color='#007bff'>
            official subreddit
          </Link>
          . If you'd like to help make Unearth better, feel free to check out
          the{` `}
          <Link href='https://reddit.com/r/tryunearth' color='#007bff'>
            Unearth GitHub organization
          </Link>
          {` `}and submit any changes you'd like.
        </Text>
        <Text>Cheers,</Text>
        <Box py={4} display={{ md: 'flex' }}>
          <Box flexShrink='0'>
            <Image
              rounded='full'
              width='6rem'
              src={profilePic}
              alt='Cedric smiling and looking like Tom from MySpace.'
            />
          </Box>
          <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
            <Text
              fontWeight='bold'
              textTransform='uppercase'
              fontSize='sm'
              letterSpacing='wide'
              color='#007bff'
            >
              Founder & Lead Developer
            </Text>
            <Link
              mt={1}
              display='block'
              fontSize='lg'
              lineHeight='normal'
              fontWeight='semibold'
              href='https://cedric.tech'
            >
              Cedric, aka u/Cedricium
            </Link>
            <Text as='i' mt={2} color='gray.500'>
              "To practice any art, no matter how well or badly, is a way to
              make your soul grow. So do it."—Kurt Vonnegut
            </Text>
          </Box>
        </Box>
      </Stack>
    </Box>
  </Layout>
)

export default About
