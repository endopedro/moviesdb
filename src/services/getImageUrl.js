const getImageUrl = (imgName, size) =>
  `${process.env.NEXT_PUBLIC_MOVIEDB_IMAGE_URL}/${size}${imgName}`

export default getImageUrl
