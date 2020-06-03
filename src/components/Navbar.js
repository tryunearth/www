import React from 'react'
import {
  Box,
  Flex,
  Text,
  Button,
  Link,
  useDisclosure,
  Icon,
} from '@chakra-ui/core'

import logo from '../assets/unearth-horizontal_lockup-dark.svg'

const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} mb={0} display='block'>
    {children}
  </Text>
)

const Header = (props) => {
  const { isOpen, onToggle } = useDisclosure()
  const menuIcon = isOpen ? (
    <Icon name='close' />
  ) : (
    <svg
      fill='white'
      width='20px'
      viewBox='0 0 20 20'
      xmlns='http://www.w3.org/2000/svg'
    >
      <title>Menu</title>
      <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
    </svg>
  )

  return (
    <Flex
      as='nav'
      align='center'
      justify='space-between'
      wrap='wrap'
      m='0 auto'
      maxW='80rem'
      py={12}
      px={{ xs: 6, sm: 12 }}
      bg='#22292F'
      color='white'
      fontSize='20px'
      {...props}
    >
      <Flex align='center'>
        <img src={logo} alt='Unearth' width='75%' />
      </Flex>

      <Box display={{ xs: 'block', md: 'none' }} onClick={onToggle}>
        {menuIcon}
      </Box>

      <Box
        display={{ xs: isOpen ? 'block' : 'none', md: 'flex' }}
        width={{ xs: 'full', md: 'auto' }}
        alignItems='center'
        flexGrow={1}
      >
        <MenuItems>
          <Link href='/about'>About</Link>
        </MenuItems>
        <MenuItems>
          <Link href='https://reddit.com/r/tryunearth'>Community</Link>
        </MenuItems>
        <MenuItems>
          <Link href='https://github.com/tryunearth'>Contribute</Link>
        </MenuItems>
      </Box>

      <Box
        display={{ xs: isOpen ? 'block' : 'none', md: 'block' }}
        mt={{ base: 4, md: 0 }}
      >
        <Button
          as={Link}
          href='https://app.tryunearth.com'
          bg='transparent'
          fontSize='20px'
          rightIcon='arrow-forward'
          variant='link'
          variantColor='white'
        >
          Go to App
        </Button>
      </Box>
    </Flex>
  )
}

export default Header
