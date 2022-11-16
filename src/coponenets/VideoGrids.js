import React from 'react'
import { VideoCard } from "./VideoCard";
import "./ComponentCss/videogrid.css"
export const VideoGrids = ({feed}) => {
  
    return (
        <>
        <h2>{feed}</h2>
        <hr/>
       
        <div className="mainPage">
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>

        </div>
        </>
    )
}
