import { useEffect, useState } from 'react'

function getWindowWidth() {
  return window.innerWidth
}

export const useWindowWidth = () => {
  const [clientWidth, setClientWidth] = useState(getWindowWidth())

  useEffect(() => {
    function handleResize() {
      setClientWidth(getWindowWidth())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return clientWidth
}
