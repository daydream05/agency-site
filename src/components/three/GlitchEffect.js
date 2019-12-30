import React, { useRef, useEffect } from 'react'
import { a, apply, useSpring } from 'react-spring/three'
import { extend, useThree, useFrame } from 'react-three-fiber'
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass"
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer"
import { GlitchPass } from '../../passes/GlitchPass'

extend({ EffectComposer, RenderPass, GlitchPass })
apply({ GlitchPass })

const GlitchEffect = ({ toggle }) => {
  console.log(toggle)
  const { gl, scene, camera, size } = useThree()
  const composer = useRef()

  useEffect(() => void composer.current.setSize(size.width, size.height), [size])

  useFrame(() => composer.current.render(), true)

  const { factor } = useSpring({
    factor: toggle ? 1 : 0,
  })

  return (
    <effectComposer ref={composer} args={[gl]}>
      <renderPass attachArray="passes" args={[scene, camera]} />
      <a.glitchPass attachArray="passes" factor={factor} />
    </effectComposer>
  )
}

export default GlitchEffect