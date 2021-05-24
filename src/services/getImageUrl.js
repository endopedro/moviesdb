const getImageUrl = (imgName, size) =>
  `${process.env.MOVIEDB_IMAGE_URL}/w${size}/${imgName}`

export default getImageUrl
