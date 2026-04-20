'use client'

import { useRef, useMemo, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface ParticleFieldProps {
  count: number
}

function ParticleField({ count }: ParticleFieldProps) {
  const pointsRef = useRef<THREE.Points>(null)
  const linesRef = useRef<THREE.LineSegments>(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  // Colors
  const VIOLET = new THREE.Color('#7C3AED')
  const CYAN = new THREE.Color('#06B6D4')

  // Create particles data
  const { positions, colors, originalPositions } = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const originalPositions = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 10
      const y = (Math.random() - 0.5) * 10
      const z = (Math.random() - 0.5) * 5

      positions[i * 3] = x
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = z

      originalPositions[i * 3] = x
      originalPositions[i * 3 + 1] = y
      originalPositions[i * 3 + 2] = z

      // Alternate between violet and cyan
      const color = i % 2 === 0 ? VIOLET : CYAN
      colors[i * 3] = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b
    }

    return { positions, colors, originalPositions }
  }, [count])

  // Create geometries
  const pointsGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    return geometry
  }, [positions, colors])

  const linesGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry()
    const linePositions = new Float32Array(count * count * 6)
    geometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3))
    geometry.setDrawRange(0, 0)
    return geometry
  }, [count])

  // Materials
  const pointsMaterial = useMemo(
    () =>
      new THREE.PointsMaterial({
        size: 0.05,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        sizeAttenuation: true,
      }),
    []
  )

  const linesMaterial = useMemo(
    () =>
      new THREE.LineBasicMaterial({
        color: '#7C3AED',
        transparent: true,
        opacity: 0.2,
        blending: THREE.AdditiveBlending,
      }),
    []
  )

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1
      const y = -(e.clientY / window.innerHeight) * 2 + 1
      mouseRef.current = { x: x * 5, y: y * 5 }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Animation loop
  useFrame((state, delta) => {
    if (!pointsRef.current || !linesRef.current) return

    const pointsPos = pointsRef.current.geometry.attributes.position.array as Float32Array
    const linePos = linesRef.current.geometry.attributes.position.array as Float32Array

    let lineIndex = 0
    const connectionDistance = 1.5
    const mouseRadius = 2
    const mouseInfluence = 2

    for (let i = 0; i < count; i++) {
      const idx = i * 3
      const origX = originalPositions[idx]
      const origY = originalPositions[idx + 1]
      const origZ = originalPositions[idx + 2]

      let x = pointsPos[idx]
      let y = pointsPos[idx + 1]
      let z = pointsPos[idx + 2]

      // Mouse interaction
      const dx = mouseRef.current.x - x
      const dy = mouseRef.current.y - y
      const distToMouse = Math.sqrt(dx * dx + dy * dy)

      if (distToMouse < mouseRadius) {
        const force = (1 - distToMouse / mouseRadius) * mouseInfluence * delta
        x += dx * force
        y += dy * force
      } else {
        x += (origX - x) * delta * 0.5
        y += (origY - y) * delta * 0.5
      }

      // Floating motion
      const time = state.clock.elapsedTime
      x += Math.sin(time * 0.5 + i) * 0.002
      y += Math.cos(time * 0.3 + i) * 0.002

      pointsPos[idx] = x
      pointsPos[idx + 1] = y
      pointsPos[idx + 2] = z

      // Find connections
      for (let j = i + 1; j < count; j++) {
        const jdx = j * 3
        const jx = pointsPos[jdx]
        const jy = pointsPos[jdx + 1]
        const jz = pointsPos[jdx + 2]

        const distSq = (x - jx) ** 2 + (y - jy) ** 2 + (z - jz) ** 2

        if (distSq < connectionDistance ** 2 && lineIndex < linePos.length - 6) {
          linePos[lineIndex++] = x
          linePos[lineIndex++] = y
          linePos[lineIndex++] = z
          linePos[lineIndex++] = jx
          linePos[lineIndex++] = jy
          linePos[lineIndex++] = jz
        }
      }
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true
    linesRef.current.geometry.setDrawRange(0, lineIndex / 3)
    linesRef.current.geometry.attributes.position.needsUpdate = true
  })

  // Cleanup
  useEffect(() => {
    return () => {
      pointsGeometry.dispose()
      linesGeometry.dispose()
      pointsMaterial.dispose()
      linesMaterial.dispose()
    }
  }, [pointsGeometry, linesGeometry, pointsMaterial, linesMaterial])

  return (
    <>
      <points ref={pointsRef} geometry={pointsGeometry} material={pointsMaterial} />
      <lineSegments
        ref={linesRef}
        geometry={linesGeometry}
        material={linesMaterial}
      />
    </>
  )
}

export default function ParticleNetwork() {
  const [mounted, setMounted] = useState(false)
  const [nodeCount, setNodeCount] = useState(120)

  useEffect(() => {
    setMounted(true)
    const updateCount = () => {
      setNodeCount(window.innerWidth > 768 ? 120 : 60)
    }
    updateCount()
    window.addEventListener('resize', updateCount)
    return () => window.removeEventListener('resize', updateCount)
  }, [])

  if (!mounted) return null

  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
      >
        <ParticleField count={nodeCount} />
      </Canvas>
    </div>
  )
}
