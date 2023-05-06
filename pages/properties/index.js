import { getProperties } from '@/features/common/api/getProperties'
import DefaultLayout from '@/features/common/modules/Layouts/DefaultLayout/DefaultLayout'
import PropertyCard from '@/features/common/modules/PropertyCard/PropertyCard'
import { Box, SimpleGrid } from '@chakra-ui/react'

const Properties = ({ properties }) => {
  console.log(properties)
  return (
    <DefaultLayout>
      <Box backgroundColor='#f7f8f9' padding='3rem'>
        <Box maxWidth='1280px' margin='0 auto'>
          <SimpleGrid
            columns={{ base: '1', sm: '2', lg: '3' }}
            gap={{ base: '0', sm: '2rem' }}
          >
            {properties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </DefaultLayout>
  )
}
console.log(process.env.RAPID_API_KEY)
export default Properties

export async function getStaticProps () {
  const { hits } = await require('@/features/data/properties')
  return {
    props: { properties: hits }
  }
}

// export async function getStaticProps () {
//   const properties = await getProperties(20)
//   return {
//     props: { properties: properties }
//   }
// }
