import React, { useState, useEffect, useMemo } from 'react'
import * as THREE from "three"
import { useThree } from 'react-three-fiber'

import GlitchEffect from './GlitchEffect'

const ImageTexture = (props) => {
  const texture = useMemo(() => new THREE.TextureLoader().load(props.url), [props.url])
  const [animate, setAnimate] = useState(true)
  const { viewport, aspect } = useThree()

  const adaptedHeight =
    3800 *
    (aspect > 5000 / 3800 ? viewport.width / 5000 : viewport.height / 3800)
  const adaptedWidth =
    5000 *
    (aspect > 5000 / 3800 ? viewport.width / 5000 : viewport.height / 3800)

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 2500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <mesh
      visible
      position={[0, 0, 0]}
      rotation={[0, 0, 0]}
      scale={[adaptedWidth, adaptedHeight]}
    >
      <planeBufferGeometry attach="geometry" args={[1, 1]} />
      <meshBasicMaterial attach="material" map={texture} />
      <GlitchEffect toggle={animate} />
    </mesh>
  )
}

export default ImageTexture