import React from 'react';
import { Avatar2 } from './Avatar2';
import "./ComponentCss/publicComments.css"

export const PublicComments = ({image,username}) => {
    let comment="hue hue hue mast video op domst kya haal badhiya sab";
    let time = new Date();

    return (
        <div className="publicComment">
            <Avatar2 image ={image} username={username}/>
            <div className="pubcom-main">
                {username} <strong>.</strong> {time.getMinutes()} min ago 
                <p className="thePublicComment">
                    <small>{comment}</small>
                </p>
            </div>
        </div>
    )
}
