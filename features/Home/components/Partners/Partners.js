import { Image, SimpleGrid } from '@chakra-ui/react'
import { partners } from './partnersConsts'

const Partners = () => {
  return (
    <SimpleGrid columns={partners.length} margin='0 auto' minChildWidth='150px'>
      {partners.map(partner => (
        <Image
          key={partner}
          src={partner}
          objectFit='contain'
          alignSelf='center'
          justifySelf='center'
          padding={{ base: '1rem', md: '2.5rem' }}
          filter='grayscale(1)'
          opacity='0.4'
        />
      ))}
    </SimpleGrid>
  )
}

export default Partners
