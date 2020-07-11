import React from 'react'
import {
  Box,
  Heading,
  Text,
  Button,
  Link,
  ButtonGroup,
  Image,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/core'

import Layout from '../components/Layout'
import FeaturesList from '../components/FeaturesList'

import heroScreenshot from '../assets/unearth-hero_screenshot.png'
import ctaTwinkle from '../assets/unearth-twinkle.svg'

const Home = () => (
  <Layout theme='dark'>
    <Box bg='#22292f' mb={{ xs: 12, md: 0 }}>
      <Box as='main'>
        <Box
          as='section'
          d='flex'
          flexDir={{ xs: 'column', lg: 'row' }}
          justifyContent='space-between'
          alignItems='center'
          color='white'
          pb={8}
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
              <Text mb='20px' fontSize='1.5rem' opacity='0.75'>
                Unearth is the ultimate tool to help you manage and organize
                your Reddit saves.
              </Text>
              <List spacing={3}>
                <ListItem>
                  <ListIcon icon='check-circle' color='gray.300' />
                  find content quickly with enhanced searching & tagging
                </ListItem>
                <ListItem>
                  <ListIcon icon='check-circle' color='gray.300' />
                  build a permanent library of everything you’ve saved
                </ListItem>
                <ListItem>
                  <ListIcon icon='check-circle' color='gray.300' />
                  customize your experience using numerous preferences
                </ListItem>
              </List>
              <ButtonGroup spacing={2} mt={8}>
                <Button
                  as={Link}
                  href='https://app.tryunearth.com/login'
                  size='lg'
                  w={{ xs: 'full', md: 'auto' }}
                  mb={{ xs: 2, md: 0 }}
                  borderRadius='lg'
                  bg='#007bff'
                  _hover={{ textDecoration: 'none' }}
                  _active={{ bg: '#0056b4' }}
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
      <FeaturesList />
      <Box bg='white' as='section'>
        <Box
          d='flex'
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
          mb={12}
          position='relative'
        >
          <Box position='absolute' top={0}>
            <Image src={ctaTwinkle} alt='twinkle twinkle little star…' />
          </Box>
          <Heading as='h3' my='2.5rem'>
            Ready to get started?
          </Heading>
          <Button
            as={Link}
            href='https://app.tryunearth.com/login'
            size='lg'
            w='auto'
            borderRadius='lg'
            bg='#007bff'
            color='white'
            _hover={{ textDecoration: 'none' }}
            _active={{ bg: '#0056b4' }}
          >
            Try Unearth for Free
          </Button>
        </Box>
      </Box>
    </Box>
  </Layout>
)

export default Home
