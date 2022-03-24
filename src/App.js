import './index.css';
import { Suspense, useRef, useState  } from 'react';
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'






function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/shoe.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[-0.08, -0.36, -.05]} rotation={[-Math.PI + .04, Math.PI/2, -Math.PI + .2]}>
        <mesh geometry={nodes.Plane003.geometry} material={materials.body} material-color={props.customColors.body}/>
        <mesh geometry={nodes.Plane003_1.geometry} material={materials.sole} material-color={props.customColors.sole} />
        <mesh geometry={nodes.Plane003_2.geometry} material={materials.collar} material-color={props.customColors.collar}/>
        <mesh geometry={nodes.Plane003_3.geometry} material={materials.tag} material-color={props.customColors.tag}/>
        <mesh geometry={nodes.Plane003_4.geometry} material={materials.tongue} material-color={props.customColors.tongue}/>
        <mesh geometry={nodes.Plane003_5.geometry} material={materials.hornRight} material-color={props.customColors.hornRight}/>
        <mesh geometry={nodes.Plane003_6.geometry} material={materials.hornLeft} material-color={props.customColors.hornLeft}/>
        <mesh geometry={nodes.Plane003_7.geometry} material={materials.keychain} material-color={props.customColors.keychain}/>
        <mesh geometry={nodes.Plane003_8.geometry} material={materials.keychainLink} material-color={props.customColors.keychainLink}/>
        <mesh geometry={nodes.Plane003_9.geometry} material={materials.swoosh} material-color={props.customColors.swoosh}/>
        <mesh geometry={nodes.Plane003_10.geometry} material={materials.toe} material-color={props.customColors.toe}/>
        <mesh geometry={nodes.Plane003_11.geometry} material={materials.badge} material-color={props.customColors.badge}/>
        <mesh geometry={nodes.Plane003_12.geometry} material={materials.tongueStrap} material-color={props.customColors.tongueStrap}/>
        <mesh geometry={nodes.Plane003_13.geometry} material={materials.laces} material-color={props.customColors.laces}/>
        <mesh geometry={nodes.Plane003_14.geometry} material={materials.eyelets} material-color={props.customColors.eyelets}/>
      </group>
    </group>
  )
}




function App() {

  const [body, setBody] = useState("lightblue")
  const [sole, setSole] = useState("lightblue")
  const [collar, setCollar] = useState("lightblue")
  const [tag, setTag] = useState("lightblue")
  const [tongue, setTongue] = useState("lightblue")
  const [hornRight, setHornRight] = useState("lightblue")
  const [hornLeft, setHornLeft] = useState("lightblue")
  const [keychain, setKeychain] = useState("lightblue")
  const [keychainLink, setKeychainLink] = useState("lightblue")
  const [swoosh, setSwoosh] = useState("lightblue")
  const [toe, setToe] = useState("lightblue")
  const [badge, setBadge] = useState("lightblue")
  const [tongueStrap, setTongueStrap] = useState("lightblue")
  const [laces, setLaces] = useState("lightblue")
  const [eyelets, setEyelets] = useState("lightblue")


  return (
    <div className="App">
  
      <div className="Container">
        
          <div className='colorInputs'>
          <h2>Pick a Color!</h2>
            <div>
              <input  type="color" id='body' name='body' value={body} onChange={ (e)=> setBody(e.target.value)}/>
              <label for="body" >Body</label>
            </div>
             <div>
              <input type="color" id='sole' name='sole' value={sole} onChange={ (e)=> setSole(e.target.value)}></input>
              <label for="sole" >Sole</label>  
            </div>
             <div>
              <input type="color" id='collar' name='collar' value={collar} onChange={ (e)=> setCollar(e.target.value)}></input>
              <label for="collar" >Collar</label>
            </div>
          
            <div>
              <input type="color" id='tag' name='tag' value={tag} onChange={ (e)=> setTag(e.target.value)}></input>
              <label for="tag" >Tag</label>  
            </div>
            <div>
              <input type="color" id='tongue' name='tongue' value={tongue} onChange={ (e)=> setTongue(e.target.value)}></input>
              <label for="tongue" >Tongue</label>
            </div>
            <div>
              <input type="color" id='hornRight' name='hornRight' value={hornRight} onChange={ (e)=> setHornRight(e.target.value)}></input>
              <label for="hornRight" >Right Horn</label>
            </div>
            <div>
              <input type="color" id='hornLeft' name='hornLeft' value={hornLeft} onChange={ (e)=> setHornLeft(e.target.value)}></input>
              <label for="hornLeft" >Right Horn</label>  
            </div>
            <div>
              <input type="color" id='keychain' name='keychain' value={keychain} onChange={ (e)=> setKeychain(e.target.value)}></input>
              <label for="keychain" >Keychain</label>
            </div>
            <div>
              <input type="color" id='keychainLink' name='keychainLink' value={keychainLink} onChange={ (e)=> setKeychainLink(e.target.value)}></input>
              <label for="keychainLink" >Keychain Link</label>
            </div>
            <div>
              <input type="color" id='swoosh' name='swoosh' value={swoosh} onChange={ (e)=> setSwoosh(e.target.value)}></input>
              <label for="swoosh" >Swoosh</label>  
            </div>
            <div>
              <input type="color" id='toe' name='toe' value={toe} onChange={ (e)=> setToe(e.target.value)}></input>
              <label for="toe" >Toe</label>
            </div>
            <div>
              <input type="color" id='badge' name='badge' value={badge} onChange={ (e)=> setBadge(e.target.value)}></input>
              <label for="badge" >Badge</label>
            </div>
            <div>
              <input type="color" id='tongueStrap' name='tongueStrap' value={tongueStrap} onChange={ (e)=> setTongueStrap(e.target.value)}></input>
              <label for="tongueStrap" >Tongue Strap</label>  
            </div>
            <div>
              <input type="color" id='laces' name='laces' value={laces} onChange={ (e)=> setLaces(e.target.value)}></input>
              <label for="laces" >Laces</label>
            </div>
            <div>
              <input type="color" id='eyelets' name='eyelets' value={eyelets} onChange={ (e)=> setEyelets(e.target.value)}></input>
              <label for="eyelets" >Eyelets</label>
            </div>
           </div>
        <div className="card">
        
        <div className="canvas-div">
          <Canvas  >
            <Suspense fallback={null}>
            <perspectiveCamera makeDefault  />
              <ambientLight />
               <spotLight intensity={0.9} 
                                     angle={0.1} 
                                     penumbra={1} 
                                     position={[10,15,10]}
                                     castShadow />
              <Model customColors={{
                                    body:body, 
                                    sole: sole, 
                                    collar: collar, 
                                    tag: tag, 
                                    tongue: tongue, 
                                    hornRight: hornRight, 
                                    hornLeft: hornLeft, 
                                    keychain: keychain,
                                    keychainLink: keychainLink, 
                                    swoosh: swoosh, 
                                    toe: toe, 
                                    badge: badge,
                                    tongueStrap: tongueStrap, 
                                    laces: laces, 
                                    eyelets: eyelets 

               }} />
              <OrbitControls 
                      enablePan={true}
                      enableZoom={true}
                      enableRotate={true}
                      minDistance={2}
                      maxDistance={3}
                      
              />
            </Suspense>
          </Canvas>
        </div>
        
        </div>
      
    
      </div>





    </div>
  );
}

export default App;
