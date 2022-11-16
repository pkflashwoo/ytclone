import React from 'react';
import { useParams } from 'react-router';
import './ComponentCss/channelBanner.css'

export const ChannelBanner = ({img}) => {
    const{channelName}:{channelName:string}=useParams();
    console.log("from channel Banner "+channelName);
     //const banner_img = {backgroundImage :img}
    return (
        
        <div style={{backgroundImage:img}}  className="bannerimg ">
            
        </div>
    )
}
