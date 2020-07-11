import React from 'react'
import { Box } from '@chakra-ui/core'

import Feature from './Feature'

import featureManage from '../assets/unearth-feature-manage.png'
import featureOrganize from '../assets/unearth-feature-organize.png'
import featureSearch from '../assets/unearth-feature-search.png'

const features = [
  {
    id: 'manage',
    title: 'Get rid of the stuff you no longer want or need.',
    description:
      'Deleting a post or comment on Unearth will automagically remove the saved item from Reddit as well.',
    imageSrc: featureManage,
    reverse: true,
    color: '#FFB000',
  },
  {
    id: 'organize',
    title: 'Group related content using custom tags.',
    description:
      'Use tags to group similar content that live across a variety of subreddits.',
    imageSrc: featureOrganize,
    reverse: false,
    color: '#007BFF',
  },
  {
    id: 'search',
    title: 'One search away from finding the best content.',
    description:
      'Search based on title or body of posts and comments to find exactly what you need.',
    imageSrc: featureSearch,
    reverse: true,
    color: '#FA0023',
  },
]

const FeaturesList = () => (
  <Box bg='white' as='section' p='2rem'>
    {features.map((feature) => (
      <Feature key={feature.id} {...feature} />
    ))}
  </Box>
)

export default FeaturesList
