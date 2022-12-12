import React from 'react'
import useSpline from '@splinetool/r3f-spline'
import { OrthographicCamera } from '@react-three/drei'

export default function Morrigan({ ...props }) {
  const { nodes, materials } = useSpline('https://prod.spline.design/DSmmUXjI6EsZXwVl/scene.splinecode')
  return (
    <>
      <color attach="background" args={['#0c0c0c']} />
      <group {...props} dispose={null}>
        <mesh
          name="xxx_-_morrigan"
          geometry={nodes['xxx_-_morrigan'].geometry}
          material={nodes['xxx_-_morrigan'].material}
          castShadow
          receiveShadow
          scale={1.5}
        />
        <mesh
          name="Text"
          geometry={nodes.Text.geometry}
          material={materials['Text Material']}
          castShadow
          receiveShadow
          position={[-234.94, -121, 454]}
        />
        <mesh
          name="Rectangle 2"
          geometry={nodes['Rectangle 2'].geometry}
          material={materials['Rectangle 2 Material']}
          castShadow
          receiveShadow
          position={[-231.95, 90, 0]}
          scale={0.69}
        />
        <directionalLight
          name="Directional Light"
          castShadow
          intensity={0.7}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-near={-10000}
          shadow-camera-far={100000}
          shadow-camera-left={-500}
          shadow-camera-right={500}
          shadow-camera-top={500}
          shadow-camera-bottom={-500}
          position={[200, 300, 300]}
        />
        <OrthographicCamera
          name="1"
          makeDefault={true}
          far={100000}
          near={-100000}
          position={[0, 0, 1000]}
          rotation={[0, 0, 0]}
        />
        <hemisphereLight name="Default Ambient Light" intensity={0.75} color="#eaeaea" />
      </group>
    </>
  )
}
