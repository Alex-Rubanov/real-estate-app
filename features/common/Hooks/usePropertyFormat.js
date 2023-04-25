export const usePropertyFormat = property => {
  const address = property.location.map(item => item.name).join(', ')
  const coverPhoto = property.coverPhoto.url
  const propertyType = property.category.map(item => item.name).join(', ')
  const price = property.price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  })
  const title = property.title
  const rooms = property.rooms
  const baths = property.baths
  const purpose = property.purpose
  const sqSize = Math.round(property.area)
  const externalID = property.externalID

  return {
    address,
    coverPhoto,
    propertyType,
    price,
    title,
    rooms,
    baths,
    purpose,
    sqSize,
    externalID
  }
}
