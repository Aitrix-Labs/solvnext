import { useEffect, useRef } from 'react'

export function CosmicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const lightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const light = lightRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    let width = 0
    let height = 0
    let frame = 0
    const mouse = { x: null as number | null, y: null as number | null }
    let lastSparkle = 0

    type Star = {
      x: number
      y: number
      size: number
      vx: number
      vy: number
      life: number
      decay: number
    }

    const stars: Star[] = []

    const spawn = (star: Star, fresh: boolean) => {
      star.x = Math.random() * width
      star.y = Math.random() * height
      star.size = Math.random() * 2
      star.vx = (Math.random() - 0.5) * 0.5
      star.vy = (Math.random() - 0.5) * 0.5
      star.life = fresh ? Math.random() : 0
      star.decay = fresh ? 0.005 + Math.random() * 0.01 : -0.01
    }

    const resize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    const onMove = (event: MouseEvent) => {
      mouse.x = event.clientX
      mouse.y = event.clientY
      light?.style.setProperty('--x', `${event.clientX}px`)
      light?.style.setProperty('--y', `${event.clientY}px`)

      const now = performance.now()
      if (now - lastSparkle < 28) return
      lastSparkle = now
      const sparkle = document.createElement('div')
      sparkle.className = 'sparkle'
      sparkle.style.left = `${event.clientX}px`
      sparkle.style.top = `${event.clientY}px`
      const colors = ['#4F46E5', '#EC4899', '#06B6D4', '#F59E0B']
      const color = colors[Math.floor(Math.random() * colors.length)]
      sparkle.style.setProperty('--color', color)
      sparkle.style.backgroundColor = color
      sparkle.style.setProperty('--tx', `${(Math.random() - 0.5) * 50}px`)
      sparkle.style.setProperty('--ty', `${(Math.random() - 0.5) * 50}px`)
      document.body.appendChild(sparkle)
      window.setTimeout(() => sparkle.remove(), 800)
    }

    resize()
    for (let i = 0; i < 150; i += 1) {
      const star = {} as Star
      spawn(star, true)
      stars.push(star)
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      stars.forEach((star) => {
        star.x += star.vx
        star.y += star.vy
        if (mouse.x != null && mouse.y != null) {
          const dx = mouse.x - star.x
          const dy = mouse.y - star.y
          const distance = Math.hypot(dx, dy)
          if (distance < 100 && distance > 0) {
            const force = (100 - distance) / 100
            star.vx -= (dx / distance) * force * 0.5
            star.vy -= (dy / distance) * force * 0.5
          }
        }
        star.life -= star.decay
        if (star.life <= 0 || star.x < 0 || star.x > width || star.y < 0 || star.y > height) {
          spawn(star, false)
        } else if (star.life >= 1) {
          star.decay = 0.005 + Math.random() * 0.01
        }
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(220, 180, 255, ${Math.max(0, Math.min(1, star.life))})`
        ctx.fill()
      })
      frame = window.requestAnimationFrame(draw)
    }

    frame = window.requestAnimationFrame(draw)
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMove)

    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <>
      <div className="fog-container">
        <div className="fog-left" />
        <div className="fog-right" />
      </div>
      <canvas id="particleCanvas" ref={canvasRef} />
      <div className="cursor-light" ref={lightRef} />
    </>
  )
}
