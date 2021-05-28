import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Custom404 = () => {
  const MySwal = withReactContent(Swal)
  const router = useRouter()

  useEffect(() => {
    MySwal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong.',
    })
    router.replace('/')
  }, [])

  return null
}

export default Custom404
