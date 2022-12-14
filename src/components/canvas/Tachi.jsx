import Spline from '@splinetool/react-spline';
import useSpline from '@splinetool/r3f-spline'
import { OrthographicCamera } from '@react-three/drei'

export default function Tachi() {
  return (
    <Spline scene="https://prod.spline.design/ZTTJQmpn5DQG8ebc/scene.splinecode" />
  );
}

{/*
const Frigate = ({ ...props }) => {
  const { nodes, materials } = useSpline('https://prod.spline.design/ZTTJQmpn5DQG8ebc/scene.splinecode')
  return (
    <>
      <color attach="background" args={['#000']} />
      <group {...props} dispose={null}>
        <mesh
          name="Text"
          geometry={nodes.Text.geometry}
          material={materials['Text Material']}
          castShadow
          receiveShadow
          position={[-307.21, -64.06, 0]}
        />
        <group name="Tachi_LP" position={[0, 0, 158.98]} rotation={[0, Math.PI / 2, 0]} scale={0.25}>
          <mesh
            name="Fore_Section_Fore_Turret_Nest_L"
            geometry={nodes.Fore_Section_Fore_Turret_Nest_L.geometry}
            material={nodes.Fore_Section_Fore_Turret_Nest_L.material}
            castShadow
            receiveShadow
            position={[-140.63, -3.23, 198.97]}
            rotation={[0, -0.27, -Math.PI / 2]}
            scale={25}
          />
          <mesh
            name="Fore_Section_Mid_Turret_Nest_L"
            geometry={nodes.Fore_Section_Mid_Turret_Nest_L.geometry}
            material={nodes.Fore_Section_Mid_Turret_Nest_L.material}
            castShadow
            receiveShadow
            position={[-15.7, 0, 230.51]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={25}
          />
          <mesh
            name="Fore_Section_Fore_Hatch_Upper_L"
            geometry={nodes.Fore_Section_Fore_Hatch_Upper_L.geometry}
            material={nodes.Fore_Section_Fore_Hatch_Upper_L.material}
            castShadow
            receiveShadow
            position={[-136.6, 7.59, 185.67]}
            rotation={[-0.04, -0.27, -1.58]}
            scale={25}
          />
          <mesh
            name="Aft_Section"
            geometry={nodes.Aft_Section.geometry}
            material={nodes.Aft_Section.material}
            castShadow
            receiveShadow
            position={[106.59, 0, 158.98]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={25}
          />
          <mesh
            name="Aft_Section_Aft_Hatch_Upper_R"
            geometry={nodes.Aft_Section_Aft_Hatch_Upper_R.geometry}
            material={nodes.Aft_Section_Aft_Hatch_Upper_R.material}
            castShadow
            receiveShadow
            position={[106.59, 42.48, 147.71]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            scale={25}
          />
          <mesh
            name="Aft_Section_Aft_Hatch_Upper_L"
            geometry={nodes.Aft_Section_Aft_Hatch_Upper_L.geometry}
            material={nodes.Aft_Section_Aft_Hatch_Upper_L.material}
            castShadow
            receiveShadow
            position={[106.59, 42.48, 170.25]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={25}
          />
          <mesh
            name="Fore_Section_Torpedo_Tube_Hatch_Top_Bottom"
            geometry={nodes.Fore_Section_Torpedo_Tube_Hatch_Top_Bottom.geometry}
            material={nodes.Fore_Section_Torpedo_Tube_Hatch_Top_Bottom.material}
            castShadow
            receiveShadow
            position={[-52.6, 41.42, 164.65]}
            rotation={[-Math.PI / 2, -0.93, Math.PI / 2]}
            scale={25}
          />
          <mesh
            name="Fore_Section_Fore_Turret_Nest_Railings_R"
            geometry={nodes.Fore_Section_Fore_Turret_Nest_Railings_R.geometry}
            material={nodes.Fore_Section_Fore_Turret_Nest_Railings_R.material}
            castShadow
            receiveShadow
            position={[-135.67, -3.23, 137.31]}
            rotation={[Math.PI, -0.27, Math.PI / 2]}
            scale={25}
          />
          <mesh
            name="Aft_Section_Aft_Turret_Nest_Railings_Upper"
            geometry={nodes.Aft_Section_Aft_Turret_Nest_Railings_Upper.geometry}
            material={nodes.Aft_Section_Aft_Turret_Nest_Railings_Upper.material}
            castShadow
            receiveShadow
            position={[106.59, 38.02, 158.98]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={25}
          />
          <mesh
            name="Aft_Section_Aft_Turret_Nest_Lower"
            geometry={nodes.Aft_Section_Aft_Turret_Nest_Lower.geometry}
            material={nodes.Aft_Section_Aft_Turret_Nest_Lower.material}
            castShadow
            receiveShadow
            position={[106.59, -56.77, 158.98]}
            rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            scale={25}
          />
          <mesh
            name="Fore_Section"
            geometry={nodes.Fore_Section.geometry}
            material={nodes.Fore_Section.material}
            castShadow
            receiveShadow
            position={[-146.49, 0, 158.98]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={25}
          />
          <mesh
            name="Aft_Section_Aft_Turret_Nest_Upper"
            geometry={nodes.Aft_Section_Aft_Turret_Nest_Upper.geometry}
            material={nodes.Aft_Section_Aft_Turret_Nest_Upper.material}
            castShadow
            receiveShadow
            position={[106.59, 56.77, 158.98]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={25}
          />
          <mesh
            name="Fore_Section_Fore_Turret_Nest_Railings_L"
            geometry={nodes.Fore_Section_Fore_Turret_Nest_Railings_L.geometry}
            material={nodes.Fore_Section_Fore_Turret_Nest_Railings_L.material}
            castShadow
            receiveShadow
            position={[-135.67, -3.23, 180.66]}
            rotation={[0, -0.27, -Math.PI / 2]}
            scale={25}
          />
          <mesh
            name="Fore_Section_Torpedo_Tube_Hatch_Top_Top"
            geometry={nodes.Fore_Section_Torpedo_Tube_Hatch_Top_Top.geometry}
            material={nodes.Fore_Section_Torpedo_Tube_Hatch_Top_Top.material}
            castShadow
            receiveShadow
            position={[-40.18, 57.9, 164.65]}
            rotation={[-Math.PI / 2, -0.93, Math.PI / 2]}
            scale={25}
          />
          <mesh
            name="Aft_Section_Mid_Hatch_Upper_L"
            geometry={nodes.Aft_Section_Mid_Hatch_Upper_L.geometry}
            material={nodes.Aft_Section_Mid_Hatch_Upper_L.material}
            castShadow
            receiveShadow
            position={[-15.7, 11.27, 216.41]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={25}
          />
          <mesh
            name="Fore_Section_Fore_Turret_Nest_R"
            geometry={nodes.Fore_Section_Fore_Turret_Nest_R.geometry}
            material={nodes.Fore_Section_Fore_Turret_Nest_R.material}
            castShadow
            receiveShadow
            position={[-140.63, -3.23, 119]}
            rotation={[-Math.PI, -0.27, Math.PI / 2]}
            scale={25}
          />
          <mesh
            name="Aft_Section_Mid_Hatch_Lower_L"
            geometry={nodes.Aft_Section_Mid_Hatch_Lower_L.geometry}
            material={nodes.Aft_Section_Mid_Hatch_Lower_L.material}
            castShadow
            receiveShadow
            position={[-15.7, -11.27, 216.41]}
            rotation={[0, 0, Math.PI / 2]}
            scale={25}
          />
          <mesh
            name="Aft_Section_Mid_Hatch_Upper_R"
            geometry={nodes.Aft_Section_Mid_Hatch_Upper_R.geometry}
            material={nodes.Aft_Section_Mid_Hatch_Upper_R.material}
            castShadow
            receiveShadow
            position={[-15.7, 11.27, 101.55]}
            rotation={[-Math.PI, 0, Math.PI / 2]}
            scale={25}
          />
          <mesh
            name="Nozzle_and_PDCs"
            geometry={nodes.Nozzle_and_PDCs.geometry}
            material={nodes.Nozzle_and_PDCs.material}
            castShadow
            receiveShadow
            position={[106.59, 0, 158.98]}
            rotation={[0, Math.PI / 2, 0]}
            scale={25}
          />
          <mesh
            name="Fore_Section_Torpedo_Tube_Hatch_Bottom_Bottom"
            geometry={nodes.Fore_Section_Torpedo_Tube_Hatch_Bottom_Bottom.geometry}
            material={nodes.Fore_Section_Torpedo_Tube_Hatch_Bottom_Bottom.material}
            castShadow
            receiveShadow
            position={[-40.18, -57.9, 153.32]}
            rotation={[-Math.PI / 2, -0.93, Math.PI / 2]}
            scale={25}
          />
          <mesh
            name="Fore_Section_Mid_Turret_Nest_Railings_L"
            geometry={nodes.Fore_Section_Mid_Turret_Nest_Railings_L.geometry}
            material={nodes.Fore_Section_Mid_Turret_Nest_Railings_L.material}
            castShadow
            receiveShadow
            position={[-15.7, 0, 211.1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={25}
          />
          <mesh
            name="Fore_Section_Fore_Hatch_Upper_R"
            geometry={nodes.Fore_Section_Fore_Hatch_Upper_R.geometry}
            material={nodes.Fore_Section_Fore_Hatch_Upper_R.material}
            castShadow
            receiveShadow
            position={[-136.6, 7.59, 132.29]}
            rotation={[-3.1, -0.27, 1.58]}
            scale={25}
          />
          <mesh
            name="Fore_Section_Torpedo_Tube_Hatch_Bottom_Top"
            geometry={nodes.Fore_Section_Torpedo_Tube_Hatch_Bottom_Top.geometry}
            material={nodes.Fore_Section_Torpedo_Tube_Hatch_Bottom_Top.material}
            castShadow
            receiveShadow
            position={[-52.6, -41.42, 153.32]}
            rotation={[-Math.PI / 2, -0.93, Math.PI / 2]}
            scale={25}
          />
          <mesh
            name="Fore_Section_Airlock_Blast_Door"
            geometry={nodes.Fore_Section_Airlock_Blast_Door.geometry}
            material={nodes.Fore_Section_Airlock_Blast_Door.material}
            castShadow
            receiveShadow
            position={[-51.77, 34.69, 158.9]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={25}
          />
          <mesh
            name="Aft_Section_Mid_Hatch_Lower_R"
            geometry={nodes.Aft_Section_Mid_Hatch_Lower_R.geometry}
            material={nodes.Aft_Section_Mid_Hatch_Lower_R.material}
            castShadow
            receiveShadow
            position={[-15.7, -11.27, 101.55]}
            rotation={[Math.PI, 0, -Math.PI / 2]}
            scale={25}
          />
          <mesh
            name="Aft_Section_Aft_Turret_Nest_Railings_Lower"
            geometry={nodes.Aft_Section_Aft_Turret_Nest_Railings_Lower.geometry}
            material={nodes.Aft_Section_Aft_Turret_Nest_Railings_Lower.material}
            castShadow
            receiveShadow
            position={[106.59, -38.02, 158.98]}
            rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            scale={25}
          />
          <mesh
            name="Aft_Section_Aft_Hatch_Lower_L"
            geometry={nodes.Aft_Section_Aft_Hatch_Lower_L.geometry}
            material={nodes.Aft_Section_Aft_Hatch_Lower_L.material}
            castShadow
            receiveShadow
            position={[106.59, -42.48, 170.25]}
            rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            scale={25}
          />
          <mesh
            name="Fore_Section_Fore_Hatch_Lower_R"
            geometry={nodes.Fore_Section_Fore_Hatch_Lower_R.geometry}
            material={nodes.Fore_Section_Fore_Hatch_Lower_R.material}
            castShadow
            receiveShadow
            position={[-136.84, -14.93, 131.47]}
            rotation={[-3.1, -0.27, -1.56]}
            scale={25}
          />
          <mesh
            name="Aft_Section_Aft_Hatch_Lower_R"
            geometry={nodes.Aft_Section_Aft_Hatch_Lower_R.geometry}
            material={nodes.Aft_Section_Aft_Hatch_Lower_R.material}
            castShadow
            receiveShadow
            position={[106.59, -42.48, 147.71]}
            rotation={[Math.PI / 2, 0, Math.PI / 2]}
            scale={25}
          />
          <mesh
            name="Fore_Section_Fore_Hatch_Lower_L"
            geometry={nodes.Fore_Section_Fore_Hatch_Lower_L.geometry}
            material={nodes.Fore_Section_Fore_Hatch_Lower_L.material}
            castShadow
            receiveShadow
            position={[-136.84, -14.93, 186.49]}
            rotation={[-0.04, -0.27, 1.56]}
            scale={25}
          />
          <mesh
            name="Fore_Section_Mid_Turret_Nest_R"
            geometry={nodes.Fore_Section_Mid_Turret_Nest_R.geometry}
            material={nodes.Fore_Section_Mid_Turret_Nest_R.material}
            castShadow
            receiveShadow
            position={[-15.7, 0, 87.45]}
            rotation={[-Math.PI, 0, Math.PI / 2]}
            scale={25}
          />
          <mesh
            name="Fore_Section_Mid_Turret_Nest_Railings_R"
            geometry={nodes.Fore_Section_Mid_Turret_Nest_Railings_R.geometry}
            material={nodes.Fore_Section_Mid_Turret_Nest_Railings_R.material}
            castShadow
            receiveShadow
            position={[-15.7, 0, 106.86]}
            rotation={[-Math.PI, 0, Math.PI / 2]}
            scale={25}
          />
        </group>
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
        <mesh
          name="Rectangle"
          geometry={nodes.Rectangle.geometry}
          material={materials['Rectangle Material']}
          castShadow
          receiveShadow
          position={[-275.95, 51, 0]}
          scale={0.75}
        />
        <OrthographicCamera
          name="1"
          makeDefault={true}
          zoom={1.23}
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
*/}