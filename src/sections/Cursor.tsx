import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import cursorShape from '@/assets/image copy 11.png'

const CLICKABLE_SELECTOR =
  'a, button, [data-hover], [data-cursor], input, textarea, select, label, [role="button"]'

export default function Cursor() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.6 })
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.6 })
  const [variant, setVariant] = useState<'default' | 'hover' | 'view'>('default')
  const [visible, setVisible] = useState(false)
  const [fine, setFine] = useState(false)
  const redirectedRef = useRef(false)

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)')
    setFine(mq.matches)
    if (!mq.matches) return

    const move = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      setVisible(true)
      const target = (e.target as Element).closest('[data-cursor], a, button')
      if (target) {
        setVariant(target.getAttribute('data-cursor') === 'view' ? 'view' : 'hover')
      } else {
        setVariant('default')
      }
    }
    const leave = () => setVisible(false)

    window.addEventListener('mousemove', move)
    document.documentElement.addEventListener('mouseleave', leave)
    return () => {
      window.removeEventListener('mousemove', move)
      document.documentElement.removeEventListener('mouseleave', leave)
    }
  }, [x, y])

  // Generous click tolerance: any click within ~40 px of a clickable element
  // triggers that element, so the custom cursor does not need pixel-perfect aim.
  useEffect(() => {
    if (!fine) return
    const TOLERANCE = 40

    const distanceToRect = (clientX: number, clientY: number, rect: DOMRect) => {
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = Math.max(Math.abs(clientX - cx) - rect.width / 2, 0)
      const dy = Math.max(Math.abs(clientY - cy) - rect.height / 2, 0)
      return Math.sqrt(dx * dx + dy * dy)
    }

    const findNearestClickable = (clientX: number, clientY: number) => {
      const candidates = Array.from(document.querySelectorAll(CLICKABLE_SELECTOR))
      let nearest: Element | null = null
      let nearestDist = Infinity
      candidates.forEach((el) => {
        const rect = el.getBoundingClientRect()
        if (!rect.width || !rect.height) return
        const dist = distanceToRect(clientX, clientY, rect)
        if (dist < nearestDist) {
          nearestDist = dist
          nearest = el
        }
      })
      return nearestDist <= TOLERANCE ? nearest : null
    }

    const onPointerDown = (e: PointerEvent) => {
      if (!e.isTrusted) return
      if ((e.target as Element).closest(CLICKABLE_SELECTOR)) return
      const nearest = findNearestClickable(e.clientX, e.clientY)
      if (nearest && nearest !== e.target) {
        e.preventDefault()
        e.stopPropagation()
        redirectedRef.current = true
        ;(nearest as HTMLElement).click()
      }
    }

    const onClick = (e: MouseEvent) => {
      if (redirectedRef.current) {
        redirectedRef.current = false
        e.preventDefault()
        e.stopPropagation()
      }
    }

    window.addEventListener('pointerdown', onPointerDown, true)
    window.addEventListener('click', onClick, true)
    return () => {
      window.removeEventListener('pointerdown', onPointerDown, true)
      window.removeEventListener('click', onClick, true)
    }
  }, [fine])

  if (!fine) return null

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[300]"
      style={{ x: springX, y: springY, opacity: visible ? 1 : 0 }}
    >
      <motion.img
        src={cursorShape}
        alt=""
        aria-hidden="true"
        className="-translate-x-[85%] -translate-y-1/2 object-contain mix-blend-difference"
        style={{
          filter: variant === 'default' ? 'invert(1)' : 'invert(1) brightness(2)',
          transformOrigin: 'center center',
        }}
        animate={{
          width: variant === 'view' ? 63 : variant === 'hover' ? 51 : 39,
          height: variant === 'view' ? 90 : variant === 'hover' ? 72 : 54,
          rotate: variant === 'view' ? -8 : 0,
          scale: variant === 'view' ? 1.08 : 1,
        }}
        transition={{ type: 'spring', stiffness: 420, damping: 26, mass: 0.45 }}
      />
    </motion.div>
  )
}
