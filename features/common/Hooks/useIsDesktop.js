import { useEffect, useState } from 'react'

export const useIdDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(true)

  useEffect(() => {
    if (window.innerWidth < 750) {
      setIsDesktop(false)
    }

    const upadateMedia = () => {
      if (window.innerWidth < 750) {
        setIsDesktop(false)
      }
    }

    window.addEventListener('resize', upadateMedia)

    return () => window.removeEventListener('resize', upadateMedia)
  }, [])

  return { isDesktop }
}
