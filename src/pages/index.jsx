import React, { useEffect } from 'react'
import moviesApi from '../services/moviesApi'

import Layout from '../components/Layout'

const index = () => {
  useEffect(() => {
    moviesApi()
      .getPopular()
      .then((res) => console.log(res.data))
  }, [])

  return (
    <Layout title={'Home'}>
      <h1 className="mt-4 pt-2 pb-4 border-bottom border-2">Filmes em alta</h1>
    </Layout>
  )
}

export default index
