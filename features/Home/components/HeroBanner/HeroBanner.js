import { Box, Fade, Text } from '@chakra-ui/react'
import HeroForm from '../HeroForm/HeroForm'

const HeroBanner = () => {
  return (
    <Fade in>
      <Box
        position='relative'
        minHeight={{ base: '120vh', md: '85vh' }}
        backgroundImage={`url('./hero/heroBg.jpg')`}
        backgroundPosition='center'
        backgroundSize='cover'
        backgroundAttachment='fixed'
      >
        <Box
          position='absolute'
          width='100%'
          height='100%'
          opacity='0.85'
          backgroundColor='blue.900'
        />
        <Box
          display='flex'
          flexDirection={{ base: 'column', md: 'row' }}
          alignItems='center'
          justifyContent={{ base: 'flex-start', sm: 'space-around' }}
          maxWidth='1280px'
          color='white'
          position='absolute'
          inset='0'
          margin='0 auto'
          padding='2rem'
        >
          <Box
            width={{ base: '100%', md: '60%' }}
            marginRight={{ base: '0', md: '1rem' }}
          >
            <Text
              fontSize={{ base: '4xl', sm: '4xl' }}
              lineHeight='shorter'
              marginBottom='1.5rem'
            >
              Download our new <strong>Property Buying Guide</strong> today...
            </Text>
            <Text fontSize={{ base: '100%', sm: '2xl' }}>
              A free PDF with our best secrets for evaluating property purchase,
              calculating profit and so much more.
            </Text>
          </Box>
          <Box
            width={{ base: '100%', sm: 'auto' }}
            marginTop={{ base: '2rem', md: '0' }}
          >
            <HeroForm />
          </Box>
        </Box>
      </Box>
    </Fade>
  )
}

export default HeroBanner
