import PropertyThumbnailSlider from '@/features/Property/components/PropertyThumbnailSlider.js/PropertyThumbnailSlider'
import { usePropertyFormat } from '@/features/common/Hooks/usePropertyFormat'
import DefaultLayout from '@/features/common/modules/Layouts/DefaultLayout/DefaultLayout'
import { Badge, Box, Flex, Grid, GridItem, Text } from '@chakra-ui/react'
import { TbMapPin } from 'react-icons/tb'

const PropertySingle = ({ property }) => {
  const {
    address,
    coverPhoto,
    propertyType,
    price,
    title,
    rooms,
    baths,
    purpose,
    sqSize,
    externalID,
    photos,
    description,
    coverVideo,
    panorama,
    amenitities,
    furshied
  } = usePropertyFormat(property)
  return (
    <DefaultLayout>
      <Box backgroundColor='#f7f8f9' paddingY='3rem'>
        <Grid
          templateColumns='repeat(6, 1fr)'
          gap='5'
          maxWidth='1280px'
          margin='0 auto'
        >
          <GridItem colSpan='6'>
            <Text
              fontSize='3xl'
              fontWeight='medium'
              color='blue.800'
              textAlign={{ base: 'center', sm: 'left' }}
            >
              {propertyType} {title}
            </Text>
            <Flex
              fontSize='xl'
              color='blue.600'
              textAlign='center'
              alignItems='center'
              flexDirection={{ base: 'column', sm: 'row' }}
              gap='0.5rem'
              marginY={{ base: '1rem', sm: '0' }}
            >
              <TbMapPin />
              <Text fontWeight='light'>
                {address} -ID:{externalID}
              </Text>
              <Badge colorScheme='green'>{purpose}</Badge>
            </Flex>
          </GridItem>
          <GridItem colSpan={{ base: 6, sm: 4, md: 3 }}>
            <PropertyThumbnailSlider photos={photos} />
          </GridItem>
        </Grid>
      </Box>
    </DefaultLayout>
  )
}

export default PropertySingle

export async function getServerSideProps (context) {
  const property = await require('@/features/data/property')
  return {
    props: { property }
  }
}
