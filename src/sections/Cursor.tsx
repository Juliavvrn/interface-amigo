import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import cursorShape from '@/assets/image copy 11.png'

export default function Cursor() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.6 })
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.6 })
  const [variant, setVariant] = useState<'default' | 'hover' | 'view'>('default')
  const [visible, setVisible] = useState(false)
  const [fine, setFine] = useState(false)

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
        className="-translate-x-1/2 -translate-y-1/2 object-contain mix-blend-difference"
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
