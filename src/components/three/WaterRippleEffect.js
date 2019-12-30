import React, { useEffect, useRef } from 'react'
import { extend, useFrame, useThree } from 'react-three-fiber' 
import { a, useSpring, apply } from 'react-spring/three'
import { config } from 'react-spring'
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass"
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer"
import { FilmPass } from "three/examples/jsm/postprocessing/FilmPass"

import { WaterPass } from '../../passes/WaterPass'

extend({ EffectComposer, RenderPass, FilmPass, WaterPass })

export default function WaterRippleEffect({ toggle }) {
  const composer = useRef()
  const { scene, gl, size, camera } = useThree()
  const waterpass = useRef()
  
  useEffect(() => void composer.current.setSize(size.width, size.height), [size])
  useFrame(() => {
    waterpass.current.factor += ((toggle ? 8 : 0) - waterpass.current.factor) * 0.01
    composer.current.render()
  }, 2)

  return (
    <effectComposer ref={composer} args={[gl]}>
      <renderPass attachArray="passes" scene={scene} camera={camera} />
      <waterPass attachArray="passes" ref={waterpass}/>
      <filmPass attachArray="passes" args={[0.05, 1.5, 1500, false]} />
    </effectComposer>
  )
}