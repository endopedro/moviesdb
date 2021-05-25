const getImageUrl = (imgName, size) =>
  `${process.env.MOVIEDB_IMAGE_URL}/${size}${imgName}`

export default getImageUrl
