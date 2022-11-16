
import './App.css';
import { Navbar } from "./coponenets/Navbar";
import { SideMenu } from "./coponenets/SideMenu";
import { VideoGrids } from "./coponenets/VideoGrids";
import {storage,ref,getDownloadURL,storageRef,uploadBytes} from './Firebase';
import logo from './images/logoyt.png';
import video from "./videos/Myvideo.mp4"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import channelbanner from './images/bannerimg.jpg';
import { Comments } from './coponenets/Comments';
import { ExplorePage } from './coponenets/ExplorePage.js'
import { Description } from './coponenets/Description'
import { Recommendation } from './coponenets/Recommendation'
import { VideoPlayer } from './coponenets/VideoPlayer';
import { ChannelBanner } from './coponenets/ChannelBanner';
import { ChannelNav } from './coponenets/ChannelNav';
import { ChannelCoverVideo } from './coponenets/ChannelCoverVideo';
import { SearchResultVid } from './coponenets/SearchResultVid';
import {ChannelPageVid} from './coponenets/ChannelPageVid';
import {ChannelAboutPage} from './coponenets/ChannelAboutPage';
import { useEffect, useState } from 'react';

function App() {
  const[url,Seturl]=useState('');
  const [file,setFile] =useState(null);  

  useEffect(()=>{},[])
  const upload=(e)=>{
    
    
   e.preventDefault();
    
    
    console.log("eventlistenerWorking")
    uploadBytes(storageRef, file).then((snapshot) => {
        console.log('Uploaded a blob or file!');
    });
    
    
}
const starsRef = ref(storage, 'thumbnails/cheems.jpg');

// Get the download URL
getDownloadURL(starsRef).then((url) => {
  Seturl(url)
})
console.log(url);    

  return (
    <>
      <Router>
        <form action="" style={{marginTop:'4rem'}} >
        <input type='file' onChange={(e)=>{setFile(e.target.files[0])}}></input>
        <button className="btn-primary" onClick ={(e)=>{upload(e)}} type="submit" >upload</button>
        </form>
        <Navbar />
        <Switch>

          {/* Search Result Page */}

          <Route path='/searchRes'>
            <div className="sidemenu_channel">
              <SideMenu />
            </div>
            <div className="searchPage">
              <SearchResultVid />
            </div>

          </Route>


          {/* video page */}
          <Route path="/video/:videoId">
                

            <div className="mainvideo">

              <VideoPlayer />
            </div>
            <div className="other">
              <div className="desccomm">
                <Description />
                <strong> <h4>Comments</h4></strong>
                <Comments className="avatar2" image={logo} username="USERNAME" />

              </div>
              <div className="recommended">
                <Recommendation />
              </div>
            </div>
          </Route>


          {/* channel page */}


          <Route path="/channelPage/:channelName" >
            <div className="channel">

              <div className="sidemenu_channel">
                <SideMenu />
              </div>

              <div className="channelpage">
                <ChannelBanner img={channelbanner} />
                <ChannelNav username={"USERNAME"} />

                {/*Channel Page Default */}

                <Route path='/channelPage/:channelName/channelhome'>
                <div className="coverVide">
                  <ChannelCoverVideo vid={video} />
                </div>
               </Route>

               {/*Channel Videos */}

               <Route path='/channelPage/:channelName/channelVid'>
                <ChannelPageVid/>
               </Route>

               {/*About Channel */}

               <Route path='/channelPage/:channelName/channelAbout'>
                <ChannelAboutPage/>
               </Route>


              </div>

            </div>
          </Route>

          {/*landing Page  */}

          <Route exact path="/">
            <div className="page">
              <div className="sidemenu">
                <SideMenu />
              </div>

              <div className="videogrid">
             
                <VideoGrids feed ={"Recommended"}/>
              </div>
            </div>


          </Route>
          {/*Subscription Page */}
          <Route exact path="/subscriptions" > 
          
          <div className="page">
              <div className="sidemenu">
                <SideMenu />
              </div>

              <div className="videogrid">
             
                <VideoGrids feed ={"Subscription"}/>
              </div>
            </div>

          </Route>

          {/*Explore Page */}
          <Route path="/explorefeed" >
          <div className="sidemenu">
                <SideMenu />
          
          </div>
          <div className="searchPage">
              <ExplorePage />
            </div>

          </Route>

        


        </Switch>

      </Router>
    </>
  );
}

export default App;
