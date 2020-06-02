import React from 'react'
import { Box, Heading, Flex, Text, Button, Link } from '@chakra-ui/core'

const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} mb={0} display='block'>
    {children}
  </Text>
)

const Header = (props) => {
  const [show, setShow] = React.useState(false)
  const handleToggle = () => setShow(!show)

  return (
    <Flex
      as='nav'
      align='center'
      justify='space-between'
      wrap='wrap'
      py={12}
      px={16}
      bg='#22292F'
      color='white'
      {...props}
    >
      <Flex align='center' mr={5}>
        <Heading as='h1' size='lg'>
          Unearth
        </Heading>
      </Flex>

      <Box display={{ sm: 'block', md: 'none' }} onClick={handleToggle}>
        <svg
          fill='white'
          width='12px'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <title>Menu</title>
          <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
        </svg>
      </Box>

      <Box
        display={{ sm: show ? 'block' : 'none', md: 'flex' }}
        width={{ sm: 'full', md: 'auto' }}
        alignItems='center'
        flexGrow={1}
      >
        <MenuItems>About</MenuItems>
        <MenuItems>Community</MenuItems>
        <MenuItems>Contribute</MenuItems>
      </Box>

      <Box
        display={{ sm: show ? 'block' : 'none', md: 'block' }}
        mt={{ base: 4, md: 0 }}
      >
        <Button
          as={Link}
          href='https://app.tryunearth.com'
          bg='transparent'
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
