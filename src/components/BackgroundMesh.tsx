import { useEffect, useRef } from 'react'

/**
 * Decorative full-viewport node-network background. Drifting nodes connected
 * by lines, with subtle cursor interaction. Fixed behind all content,
 * non-interactive, and static when the user prefers reduced motion.
 */
export function BackgroundMesh() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvasEl = canvasRef.current
    if (!canvasEl) return
    const canvas: HTMLCanvasElement = canvasEl
    const maybeCtx = canvas.getContext('2d')
    if (!maybeCtx) return
    const ctx: CanvasRenderingContext2D = maybeCtx

    const reduced =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const LINK = 130
    const MOUSE_LINK = 170
    const mouse = { x: -9999, y: -9999 }
    let width = 0
    let height = 0
    let nodes: { x: number; y: number; vx: number; vy: number }[] = []
    let raf = 0

    function resize() {
      const dpr = window.devicePixelRatio || 1
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.max(36, Math.min(96, Math.round((width * height) / 16000)))
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
      }))
    }

    function draw() {
      ctx.clearRect(0, 0, width, height)
      for (const n of nodes) {
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > width) n.vx *= -1
        if (n.y < 0 || n.y > height) n.vy *= -1
      }
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]
          const d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d < LINK) {
            ctx.strokeStyle = `rgba(88,166,255,${0.16 * (1 - d / LINK)})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }
      for (const n of nodes) {
        const d = Math.hypot(n.x - mouse.x, n.y - mouse.y)
        if (d < MOUSE_LINK) {
          ctx.strokeStyle = `rgba(63,185,80,${0.25 * (1 - d / MOUSE_LINK)})`
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.moveTo(n.x, n.y)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.stroke()
        }
      }
      for (const n of nodes) {
        ctx.fillStyle = '#3fb950'
        ctx.beginPath()
        ctx.arc(n.x, n.y, 1.7, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    function loop() {
      draw()
      raf = requestAnimationFrame(loop)
    }

    function onMove(e: MouseEvent) {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }
    function onLeave() {
      mouse.x = -9999
      mouse.y = -9999
    }

    resize()
    window.addEventListener('resize', resize)
    if (reduced) {
      draw()
    } else {
      window.addEventListener('mousemove', onMove)
      window.addEventListener('mouseout', onLeave)
      loop()
    }

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseout', onLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 -z-10 h-full w-full pointer-events-none"
    />
  )
}
