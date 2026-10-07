import { useEffect, useRef } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './sections/Hero'
import { Problems } from './sections/Problems'
import { About } from './sections/About'
import { Services } from './sections/Services'
import { Products } from './sections/Products'
import { Process } from './sections/Process'
import { Testimonials } from './sections/Testimonials'
import { FAQ } from './sections/FAQ'
import { Contact } from './sections/Contact'
import { Footer } from './sections/Footer'
import './App.css'

function App() {
  const cursorGlowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const glow = cursorGlowRef.current
    const pointerQuery = window.matchMedia('(hover: hover) and (pointer: fine)')
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    if (!glow || !pointerQuery.matches || reducedMotionQuery.matches) return

    let targetX = -240
    let targetY = -240
    let currentX = targetX
    let currentY = targetY
    let frame = 0

    const render = () => {
      currentX += (targetX - currentX) * 0.12
      currentY += (targetY - currentY) * 0.12
      glow.style.setProperty('--cursor-x', `${currentX}px`)
      glow.style.setProperty('--cursor-y', `${currentY}px`)
      frame = requestAnimationFrame(render)
    }

    const handlePointerMove = (event: PointerEvent) => {
      targetX = event.clientX
      targetY = event.clientY
      glow.classList.add('is-visible')
    }

    const handlePointerLeave = () => glow.classList.remove('is-visible')

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    document.documentElement.addEventListener('pointerleave', handlePointerLeave)
    frame = requestAnimationFrame(render)

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      document.documentElement.removeEventListener('pointerleave', handlePointerLeave)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div className="site-shell">
      <div className="cursor-glow" ref={cursorGlowRef} aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <Problems />
        <About />
        <Services />
        <Products />
        <Process />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
