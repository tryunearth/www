import React from 'react'
import { Box, Heading, Button, Link, ButtonGroup, Image } from '@chakra-ui/core'

import heroScreenshot from './assets/unearth-hero_screenshot.png'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  return (
    <Box mb={{ xs: 12, md: 0 }}>
      <Navbar />
      <Box as='main'>
        <Box
          as='section'
          d='flex'
          flexDir={{ xs: 'column', lg: 'row' }}
          justifyContent='space-between'
          alignItems='center'
          color='white'
        >
          <Box w={{ xs: '100%', lg: '50%' }} mr={{ xs: 0, lg: 24 }} pb={12}>
            <Box
              ml={{ xs: 0, lg: 'auto' }}
              pl={{ xs: 0, lg: '3rem' }}
              px={{ xs: 6, sm: 12 }}
              maxW={{ xs: 'full', lg: '594px' }}
              minW={{ xs: 'full', lg: '594px' }}
            >
              <Heading
                fontFamily='heading'
                fontSize={{ xs: '3rem', sm: '4rem' }}
                as='h1'
                mb='10px'
              >
                Reddit Saves Done Right
              </Heading>
              <p
                style={{
                  fontSize: '24px',
                  marginBottom: '20px',
                  opacity: '0.7',
                }}
              >
                Unearth is the ultimate tool to help you manage and organize
                your Reddit saves.
              </p>
              <ul
                style={{
                  fontSize: '20px',
                  listStylePosition: 'outside',
                  marginLeft: '1rem',
                }}
              >
                <li>find content quickly with enhanced searching & tagging</li>
                <li>build a permanent library of everything you’ve saved</li>
                <li>customize your experience using numerous preferences</li>
              </ul>
              <ButtonGroup spacing={2} mt={8}>
                <Button
                  as={Link}
                  href='https://app.tryunearth.com/login'
                  size='lg'
                  w={{ xs: 'full', md: 'auto' }}
                  mb={{ xs: 2, md: 0 }}
                  borderRadius='lg'
                  variantColor='blue'
                  _hover={{ textDecoration: 'none' }}
                >
                  Get Started using Reddit
                </Button>
                <Button
                  as={Link}
                  href='https://github.com/tryunearth'
                  size='lg'
                  w={{ xs: 'full', md: 'auto' }}
                  mb={{ xs: 2, md: 0 }}
                  color='#2a2829'
                  borderRadius='lg'
                  variantColor='gray'
                  _hover={{ textDecoration: 'none' }}
                >
                  Contribute on GitHub
                </Button>
              </ButtonGroup>
            </Box>
          </Box>
          <Box
            w={{ xs: '100%', lg: '50%' }}
            overflowX={{ xs: 'visible', lg: 'hidden' }}
          >
            <Image
              src={heroScreenshot}
              alt='Unearth web app'
              h={{ xs: 'auto', lg: '100%' }}
              maxH={{ xs: 'none', lg: '620px' }}
              maxW={{ xs: '100%', lg: 'none' }}
            />
          </Box>
        </Box>
      </Box>
      <footer></footer>
    </Box>
  )
}

export default App
