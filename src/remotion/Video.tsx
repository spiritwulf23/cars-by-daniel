import { useCurrentFrame, useVideoConfig, interpolate, spring, AbsoluteFill } from 'remotion'

export const CarVideo = () => {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()

  const opacity = interpolate(frame, [0, 30], [0, 1])
  const scale = interpolate(frame, [0, 60], [1.2, 1])
  const slideUp = spring({ frame, fps, from: 50, to: 0 })

  return (
    <AbsoluteFill style={{ backgroundColor: '#0a0a0a' }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `radial-gradient(ellipse at center, rgba(230, 57, 70, 0.2) 0%, transparent 70%)`
      }} />

      <div style={{
        position: 'absolute',
        top: '15%',
        left: '50%',
        transform: `translateX(-50%) translateY(${slideUp}px) scale(${scale})`,
        opacity,
        textAlign: 'center',
      }}>
        <h1 style={{
          fontFamily: 'Bebas Neue, sans-serif',
          fontSize: 120,
          color: 'white',
          letterSpacing: '0.1em',
          lineHeight: 1,
        }}>
          CARS BY <span style={{ color: '#e63946' }}>DANIEL</span>
        </h1>
        <p style={{
          fontFamily: 'Outfit, sans-serif',
          fontSize: 24,
          color: '#e63946',
          letterSpacing: '0.3em',
          marginTop: 20,
        }}>
          PREMIUM AUTO DETAILING
        </p>
      </div>

      <div style={{
        position: 'absolute',
        bottom: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        opacity: interpolate(frame, [40, 60], [0, 1]),
        textAlign: 'center',
      }}>
        <p style={{
          fontFamily: 'Outfit, sans-serif',
          fontSize: 28,
          color: '#888',
        }}>
          Lafayette, LA • 337-555-3333
        </p>
      </div>

      <div style={{
        position: 'absolute',
        bottom: '18%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 200,
        height: 2,
        backgroundColor: '#e63946',
        opacity: interpolate(frame, [50, 70], [0, 1]),
      }} />
    </AbsoluteFill>
  )
}
