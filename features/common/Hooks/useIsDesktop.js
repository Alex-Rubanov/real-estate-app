import { useEffect, useState } from 'react'

export const useIdDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(null)

  useEffect(() => {
    if (window.innerWidth > 750) {
      setIsDesktop(true)
    } else {
      setIsDesktop(false)
    }

    const upadateMedia = () => {
      if (window.innerWidth > 750) {
        setIsDesktop(true)
      } else {
        setIsDesktop(false)
      }
    }

    window.addEventListener('resize', upadateMedia)
    return () => window.removeEventListener('resize', upadateMedia)
  }, [])

  return { isDesktop }
}
