import { useEffect } from 'react'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'

import { darkToast } from '../data/toastStyles'

const Custom404 = () => {
  const router = useRouter()

  useEffect(() => {
    router.replace('/')
    toast.error("Page not found", darkToast)
  }, [])

  return null
}

export default Custom404
