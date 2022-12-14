import Spline from '@splinetool/react-spline';
import useSpline from '@splinetool/r3f-spline'
import { OrthographicCamera } from '@react-three/drei'

export default function Scirocco() {
  return (
    <Spline scene="https://prod.spline.design/GyDeLHOdv9cfI4Lg/scene.splinecode" />
  );
}

const Cruiser = ({ ...props }) => {
  const { nodes, materials } = useSpline('https://prod.spline.design/GyDeLHOdv9cfI4Lg/scene.splinecode')
  return (
    <>
      <color attach="background" args={['#5e6063']} />
      <group {...props} dispose={null}>
        <mesh
          name="Scirocco"
          geometry={nodes.Scirocco.geometry}
          material={nodes.Scirocco.material}
          castShadow
          receiveShadow
          position={[243, -176.12, 40.62]}
          rotation={[2.18, 0, Math.PI / 2]}
          scale={1}
        />
        <mesh
          name="Text"
          geometry={nodes.Text.geometry}
          material={materials['Text Material']}
          castShadow
          receiveShadow
          position={[-121.94, -142, 454]}
        />
        <mesh
          name="Rectangle 2"
          geometry={nodes['Rectangle 2'].geometry}
          material={materials['Rectangle 2 Material']}
          castShadow
          receiveShadow
          position={[-118.95, 69, 0]}
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
        <OrthographicCamera name="1" makeDefault={true} far={100000} near={-100000} position={[0, 0, 1000]} />
        <hemisphereLight name="Default Ambient Light" intensity={0.75} color="#eaeaea" />
      </group>
    </>
  )
}

