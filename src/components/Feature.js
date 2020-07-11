import React from 'react'
import { Box, Heading, Text, Image } from '@chakra-ui/core'

const toTitleCase = (str) =>
  [...str].map((w, i) => (i === 0 ? w[0].toUpperCase() : w)).join('')

const Feature = ({ id, title, description, imageSrc, reverse, color }) => (
  <Box
    m='8rem auto'
    px={{ base: 0, lg: 12 }}
    maxW='1280px'
    d='flex'
    flexDir='row'
    flexWrap={{ base: reverse ? 'wrap-reverse' : 'wrap', lg: 'nowrap' }}
    justifyContent={{ base: 'center', lg: 'space-between' }}
  >
    <Box
      order={reverse ? 0 : 1}
      maxW='512px'
      pr={{ base: 0, lg: reverse ? '2rem' : 0 }}
      pl={{ base: 0, lg: reverse ? 0 : '2rem' }}
      pt={{ base: '2rem', lg: 0 }}
      d='flex'
      flexDir='column'
      justifyContent='center'
    >
      <Text
        fontWeight='bold'
        fontSize='14px'
        lineHeight='16px'
        letterSpacing='0.08em'
        textTransform='uppercase'
        color={color}
      >
        {toTitleCase(id)}
      </Text>
      <Heading
        as='h2'
        fontSize={{ base: '34px', lg: '42px' }}
        color='#22292F'
        py='20px'
      >
        {title}
      </Heading>
      <Text
        fontSize={{ base: '20px', lg: '24px' }}
        color='#22292F'
        lineHeight='36px'
      >
        {description}
      </Text>
    </Box>
    <Box d='flex' justifyContent={reverse ? 'flex-end' : 'flex-start'}>
      <Image
        src={imageSrc}
        alt={`${id} saves`}
        maxW='580px'
        w='full'
        h='100%'
      />
    </Box>
  </Box>
)

export default Feature
