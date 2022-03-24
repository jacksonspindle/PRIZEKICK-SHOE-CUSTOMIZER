import './index.css';
import { Suspense, useRef, useState  } from 'react';
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { useSpring, animated } from '@react-spring/three';



var colorInputDisplay = {display: "grid"}


function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/shoe.gltf')


  const [bodyHovered, setBodyHover] = useState(false)
  const [soleHovered, setSoleHover] = useState(false)
  const [collarHovered, setCollarHover] = useState(false)
  const [tagHovered, setTagHover] = useState(false)
  const [tongueHovered, setTongueHover] = useState(false)
  const [hornRightHovered, setHornRightHover] = useState(false)
  const [hornLeftHovered, setHornLeftHover] = useState(false)
  const [keychainHovered, setKeychainHover] = useState(false)
  const [keychainLinkHovered, setKeychainLinkHover] = useState(false)
  const [swooshHovered, setSwooshHover] = useState(false)
  const [toeHovered, setToeHover] = useState(false)
  const [badgeHovered, setBadgeHover] = useState(false)
  const [tongueStrapHovered, setTongueStrapHover] = useState(false)
  const [lacesHovered, setLacesHover] = useState(false)
  const [eyeletsHovered, setEyeletsHover] = useState(false)

  const [bodyClicked, setBodyClickState] = useState(false)



  const [active, setActive] = useState(false)
  const { scale } = useSpring({ scale: active ? 1.5 : 1})

  // console.log(colorInputDisplay)

  // if (bodyClicked === true) {
  //       console.log("body clicked!")
  //       colorInputDisplay = {display: "none"}
    
   
  // }else{
  //   console.log("not clicked...")
    
  // }


  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[-0.08, -0.36, -.05]} rotation={[-Math.PI + .04, Math.PI/2, -Math.PI + .2]}>
        <mesh 
              geometry={nodes.Plane003.geometry} 
              material={materials.body} 
              material-color={bodyHovered ? "yellow" : props.customColors.body} 
              onPointerOver={(event)=> setBodyHover(true)} 
              onPointerOut={(event)=> setBodyHover(false)}
              onClick={(event)=> (setBodyClickState(true) ? setBodyClickState(false) : setBodyClickState(true))}
             
              
               />
        <mesh 
              geometry={nodes.Plane003_1.geometry}
              material={materials.sole} 
              material-color={soleHovered ? "yellow" : props.customColors.sole}
              onPointerOver={(event)=> setSoleHover(true)} 
              onPointerOut={(event)=> setSoleHover(false)}  />
        <mesh geometry={nodes.Plane003_2.geometry}
              material={materials.collar}
              material-color={collarHovered ? "yellow" : props.customColors.collar} 
              onPointerOver={(event)=> setCollarHover(true)} 
              onPointerOut={(event)=> setCollarHover(false)} />
        <mesh 
              geometry={nodes.Plane003_3.geometry} 
              material={materials.tag} 
              material-color={tagHovered ? "yellow" : props.customColors.tag} 
              onPointerOver={(event)=> setTagHover(true)} 
              onPointerOut={(event)=> setTagHover(false)} />
        <mesh 
              geometry={nodes.Plane003_4.geometry} 
              material={materials.tongue} 
              material-color={tongueHovered ? "yellow" : props.customColors.tongue} 
              onPointerOver={(event)=> setTongueHover(true)} 
              onPointerOut={(event)=> setTongueHover(false)} />
        <mesh 
              geometry={nodes.Plane003_5.geometry} 
              material={materials.hornRight} 
              material-color={hornRightHovered ? "yellow" : props.customColors.hornRight} 
              onPointerOver={(event)=> setHornRightHover(true)} 
              onPointerOut={(event)=> setHornRightHover(false)} />
        <mesh 
              geometry={nodes.Plane003_6.geometry} 
              material={materials.hornLeft} 
              material-color={hornLeftHovered ? "yellow" : props.customColors.hornLeft} 
              onPointerOver={(event)=> setHornLeftHover(true)} 
              onPointerOut={(event)=> setHornLeftHover(false)} />
        <mesh 
              geometry={nodes.Plane003_7.geometry} 
              material={materials.keychain} 
              material-color={keychainHovered ? "yellow" : props.customColors.keychain} 
              onPointerOver={(event)=> setKeychainHover(true)} 
              onPointerOut={(event)=> setKeychainHover(false)} />
        <mesh 
              geometry={nodes.Plane003_8.geometry} 
              material={materials.keychainLink}
              material-color={keychainLinkHovered ? "yellow" : props.customColors.keychainLink} 
              onPointerOver={(event)=> setKeychainLinkHover(true)} 
              onPointerOut={(event)=> setKeychainLinkHover(false)}  
              />
        <mesh 
              geometry={nodes.Plane003_9.geometry} 
              material={materials.swoosh} 
              material-color={swooshHovered ? "yellow" : props.customColors.swoosh} 
              onPointerOver={(event)=> setSwooshHover(true)} 
              onPointerOut={(event)=> setSwooshHover(false)} />
        <mesh 
              geometry={nodes.Plane003_10.geometry} 
              material={materials.toe} 
              material-color={toeHovered ? "yellow" : props.customColors.toe} 
              onPointerOver={(event)=> setToeHover(true)} 
              onPointerOut={(event)=> setToeHover(false)} />
        <mesh 
              geometry={nodes.Plane003_11.geometry} 
              material={materials.badge}
              material-color={badgeHovered ? "yellow" : props.customColors.badge} 
              onPointerOver={(event)=> setBadgeHover(true)} 
              onPointerOut={(event)=> setBadgeHover(false)} />
        <mesh 
              geometry={nodes.Plane003_12.geometry} 
              material={materials.tongueStrap} 
              material-color={tongueStrapHovered ? "yellow" : props.customColors.tongueStrap} 
              onPointerOver={(event)=> setTongueStrapHover(true)} 
              onPointerOut={(event)=> setTongueStrapHover(false)} />
        <mesh 
              geometry={nodes.Plane003_13.geometry} 
              material={materials.laces} 
              material-color={lacesHovered ? "yellow" : props.customColors.laces} 
              onPointerOver={(event)=> setLacesHover(true)} 
              onPointerOut={(event)=> setLacesHover(false)} />
        <mesh 
              geometry={nodes.Plane003_14.geometry} 
              material={materials.eyelets} 
              material-color={eyeletsHovered ? "yellow" : props.customColors.eyelets} 
              onPointerOver={(event)=> setEyeletsHover(true)} 
              onPointerOut={(event)=> setEyeletsHover(false)} />
      </group>
    </group>
    
  )
  
}



function App() {

  const [body, setBody] = useState("#5A18C9")
  const [sole, setSole] = useState("#190934")
  const [collar, setCollar] = useState("black")
  const [tag, setTag] = useState("#190934")
  const [tongue, setTongue] = useState("#5A18C9")
  const [hornRight, setHornRight] = useState("#190934")
  const [hornLeft, setHornLeft] = useState("#190934")
  const [keychain, setKeychain] = useState("white")
  const [keychainLink, setKeychainLink] = useState("190934")
  const [swoosh, setSwoosh] = useState("#FDDC22")
  const [toe, setToe] = useState("#FDDC22")
  const [badge, setBadge] = useState("#5A18C9")
  const [tongueStrap, setTongueStrap] = useState("black")
  const [laces, setLaces] = useState("#FDDC22")
  const [eyelets, setEyelets] = useState("#5A18C9")


  // TEXTURES


  const [bodyTexture, setBodyTexture] = useState("lightblue")



  const [colorInputsHovered, setColorInputsHover] = useState(false)
  const [textureInputsHovered, setTextureInputsHover] = useState(false)

  return (
    <div className="App">
    <div  className='div-with-h2-and-colorInputs' 
          onPointerLeave={(event)=> console.log("left color panel")}>
     <div className='h2-div'>
        
          <h2 
                  onPointerOver={(event)=> setColorInputsHover(true)} 

        >Customize Colors!</h2>
          <h2 
                  onPointerOver={()=> {
                    setTextureInputsHover(true)  
                    setColorInputsHover(false)
                  } }

        >Customize Textures!</h2>
       
    </div>

    <div>
       <div 
              style={textureInputsHovered ? {display: "grid"} : {display: "none"}}
              className="textureInputs">
              <div>
              <label for="body" >Upload an Image</label>
              <input type="file" id='body' name='body'  onChange={ (e)=> setBodyTexture(e.target.value)}/>
              
              </div>
            </div>
    </div>
    
     
     <div 
              className='colorInputs' 
              style={colorInputsHovered ? {display: "grid"} : {display: "none"}}
              // onPointerOut={(event)=> setColorInputsHover(false)}
              >
          
          
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
  </div>
      <div className="Container">
        
          
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
