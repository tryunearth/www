import React from 'react'
import { Box, Heading, Button, Link, ButtonGroup, Image } from '@chakra-ui/core'

import heroScreenshot from './assets/unearth-hero_screenshot.png'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='wrapper'>
      <Navbar />
      <main>
        <Box
          as='section'
          d='flex'
          flexDir='row'
          justifyContent='space-between'
          alignItems='center'
          color='white'
        >
          <Box w='50%' mr={24} pb={12}>
            <Box ml='auto' pl='3rem' maxW='594px'>
              <Heading fontFamily='heading' fontSize='4rem' as='h1' mb='20px'>
                Reddit Saves Done Right
              </Heading>
              <p
                style={{
                  fontSize: '24px',
                  marginBottom: '10px',
                  opacity: '0.7',
                }}
              >
                Unearth is the ultimate tool to help you manage and organize
                your Reddit saves.
              </p>
              <ul style={{ fontSize: '20px', listStylePosition: 'inside' }}>
                <li>find content quickly with enhanced searching & tagging</li>
                <li>build a permanent library of everything you’ve saved</li>
                <li>customize your experience using numerous preferences</li>
              </ul>
              <ButtonGroup spacing={2} mt={8}>
                <Button
                  as={Link}
                  href='https://app.tryunearth.com/login'
                  size='lg'
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
          <Box w='50%' overflowX='hidden'>
            <Image
              src={heroScreenshot}
              alt='Unearth web app'
              h='100%'
              maxH='620px'
              maxW='none'
            />
          </Box>
        </Box>
      </main>
      <footer></footer>
    </div>
  )
}

export default App
