import React, { useEffect, useState, useCallback } from 'react'

export type ScrollProp = {
  scroll: any
}

const useScroll = (initial = 0) => {
  const [offset, setOffset] = useState(initial)

  const handleScrollSet = useCallback(() => {
    setOffset(window.scrollY + initial)
  }, [initial])

  useEffect(() => {
    window.addEventListener('scroll', handleScrollSet)
    return () => {
      window.removeEventListener('scroll', handleScrollSet)
    }
  }, [handleScrollSet])

  return offset
}

export default useScroll
