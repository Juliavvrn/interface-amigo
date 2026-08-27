import { useEffect, useRef } from 'react'
import { useLocation } from '@tanstack/react-router'
import Lenis from 'lenis'

export default function SmoothScroll() {
  const lenisRef = useRef<Lenis | null>(null)
  const location = useLocation()

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09 })
    lenisRef.current = lenis
    ;(window as unknown as { __lenis?: Lenis }).__lenis = lenis
    let raf = 0
    const loop = (time: number) => {
      lenis.raf(time)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
      delete (window as unknown as { __lenis?: Lenis }).__lenis
    }
  }, [])

  // Handle route and hash navigation after the destination DOM has mounted.
  useEffect(() => {
    let frame = 0
    let attempts = 0
    const scroll = () => {
      const hash = location.hash
      const target = hash ? document.getElementById(hash.replace(/^#/, '')) : null
      if (target) {
        lenisRef.current?.scrollTo(target, { offset: hash === '#top' ? 0 : -70, duration: 1.1 })
        return
      }
      if (hash && attempts < 60) {
        attempts += 1
        frame = requestAnimationFrame(scroll)
        return
      }
      lenisRef.current?.scrollTo(0, { immediate: true })
      window.scrollTo(0, 0)
    }
    frame = requestAnimationFrame(scroll)
    return () => cancelAnimationFrame(frame)
  }, [location.pathname, location.hash])

  return null
}
