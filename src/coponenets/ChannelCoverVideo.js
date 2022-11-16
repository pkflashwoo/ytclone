import React from 'react'
import './ComponentCss/channelCoverVideo.css';
import { useParams } from 'react-router';

export const ChannelCoverVideo = ({vid}) => {
   const{channelName}:{channelName:string}=useParams();
  console.log("from channel coverVid "+channelName);


    return (
        <div>
             <div className="cardmb-3" style={{maxWidth: '1200px'}}>
            <div className="row g-0">
              <div className="col-md-4">
               <video src={vid} autoPlay={true} controls controlsList='nodownload' className="img-fluid rounded-start" alt="..."/>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-ChannelCoverVideo-title">Video 7</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p className="card-text"><small className="text-muted">Uploaded 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}
