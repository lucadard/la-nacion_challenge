import { useEffect, useState } from 'react'

export const useScrollDirection = () => {
  const threshold = 0
  const [scrollDir, setScrollDir] = useState<'up' | 'down'>('up')

  useEffect(() => {
    let previousScrollYPosition = window.scrollY

    const scrolledMoreThanThreshold = (currentScrollYPosition: number) =>
      Math.abs(currentScrollYPosition - previousScrollYPosition) > threshold

    const isScrollingUp = (currentScrollYPosition: number) =>
      currentScrollYPosition > previousScrollYPosition &&
      !(previousScrollYPosition > 0 && currentScrollYPosition === 0) &&
      !(currentScrollYPosition > 0 && previousScrollYPosition === 0)

    const updateScrollDirection = () => {
      const currentScrollYPosition = window.scrollY

      if (scrolledMoreThanThreshold(currentScrollYPosition)) {
        const newScrollDirection = isScrollingUp(currentScrollYPosition)
          ? 'down'
          : 'up'
        setScrollDir(newScrollDirection)
        previousScrollYPosition =
          currentScrollYPosition > 0 ? currentScrollYPosition : 0
      }
    }

    const onScroll = () => window.requestAnimationFrame(updateScrollDirection)

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return scrollDir
}
