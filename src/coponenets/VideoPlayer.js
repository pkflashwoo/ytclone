


import React, {  useState,useRef } from 'react';
//import { Navbar } from './Navbar';
import video from "../videos/Myvideo.mp4"
import "./ComponentCss/videoplayer.css";
//import { Playpause } from './Playpause';
import { useParams } from 'react-router';
export const VideoPlayer = () => {
    let progress=0;
    const player = useRef(null);
    const vidRef = useRef(null);
    const input =useRef(null);
    const {videoId}:{videoId:string} =useParams();
    console.log(videoId);
    const [playing, setPlaying] = useState(false);
    const handleplayPause=()=>{
       if (playing) {
           vidRef.current.pause();
           setPlaying(false);
           console.log("pause")
         
           
       }else{
           console.log("playing")
           vidRef.current.play();
           setPlaying(true);
         
        }
      
        
        vidRef.current.addEventListener('timeupdate', () => {
            
            progress = ((vidRef.current.currentTime / vidRef.current.duration) * 100);
            input.current.value = progress;
            
        })
        player.current.addEventListener('keydown', (e) => {
           if (e.keyCode === 32) { vidRef.current.pause(); }
         })
        //changing time through seekbaar
        input.current.addEventListener('change', () => {
            vidRef.current.currentTime =(input.current.value * vidRef.current.duration )/ 100;
        })
       
    }
    function openFullscreen() {
        if (vidRef.current.requestFullscreen) {
          vidRef.current.requestFullscreen();
        } else if (vidRef.current.webkitRequestFullscreen) { /* Safari */
          vidRef.current.webkitRequestFullscreen();
        } else if (vidRef.current.msRequestFullscreen) { /* IE11 */
          vidRef.current.msRequestFullscreen();
        }
      }
    
 
    
    return (<>
        <div className="videoOpenpage">

            <div className="vidContainer" ref={player} onClick={handleplayPause} onDoubleClick={openFullscreen}>
                <video ref={vidRef}  className="video"  >
                   
                    <source src={video} type="video/mp4" />
                </video>
                <div className="controls">
                    <div className="playPause" id="playPause" onClick={handleplayPause} >

                     {
                         (playing)?(
                            <i class="far fa-2x fa-pause-circle" id="masterplay" ></i>
                         ):(
                            <i class="far fa-2x fa-play-circle" id="masterplay" ></i>
                         )
                     }


                    </div>
                    <div className="timebar_container">
                      

                        <input type="range" ref={input} className="timebar" min="0" max="100"   />
                        
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
