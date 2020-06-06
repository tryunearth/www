import React from 'react'
import { Box, Heading, Text, Stack, Image } from '@chakra-ui/core'

import Layout from '../components/Layout'
import notFound from '../assets/404.png'

const NotFound = () => (
  <Layout title='Oops! Page Not Found'>
    <Stack
      spacing={12}
      alignItems='center'
      m='0 auto'
      maxW='80rem'
      mb={8}
      px={{ xs: 6, sm: 12 }}
      textAlign='center'
    >
      <Box>
        <Heading
          fontFamily='heading'
          fontSize={{ xs: '2.25rem', sm: '3rem' }}
          as='h1'
          mb='10px'
        >
          Taking the Road Less Traveled, Eh?
        </Heading>
        <Text fontSize='xl'>
          Unfortunately, there's nothing here. But good on you for trying. You
          never know just what you may find…
        </Text>
      </Box>
      <Image
        src={notFound}
        alt='Humanoid walking in on floating robot'
        w='100%'
        maxW='600px'
      />
    </Stack>
  </Layout>
)

export default NotFound
