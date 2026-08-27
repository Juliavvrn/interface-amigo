import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'


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
      <motion.svg
        viewBox="0 0 24 32"
        aria-hidden="true"
        className="block"
        style={{ transformOrigin: '0% 0%', filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.45))' }}
        animate={{
          width: variant === 'view' ? 30 : variant === 'hover' ? 26 : 21,
          height: variant === 'view' ? 40 : variant === 'hover' ? 35 : 28,
          rotate: variant === 'view' ? -8 : 0,
          scale: variant === 'view' ? 1.06 : 1,
        }}
        transition={{ type: 'spring', stiffness: 420, damping: 26, mass: 0.45 }}
      >
        <path
          d="M1 1 L1 25.2 L7.1 19.4 L11.1 28.6 L14.9 27 L11 17.9 L19.4 17.4 Z"
          fill="#ffffff"
          stroke="rgba(0,0,0,0.35)"
          strokeWidth="1"
          strokeLinejoin="round"
        />
      </motion.svg>
    </motion.div>
  )
}
