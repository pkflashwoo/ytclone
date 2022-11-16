import React from 'react';
import test from "../images/testthumbnail.jpg";
import "./ComponentCss/videoCard.css";
import { Avatar2 } from './Avatar2';

 
import { Link } from 'react-router-dom';
export const VideoCard = () => {
   
    return (
        
           
            <div>
            <div class="card" style={{ width: '14rem' }}>
                <Link to={`video/${'ajnjnjknjknd'}`} >
                <img src={test} class="card-img-top" alt="here" />
                </Link>
                <div class="card-body vidgridVidCard">
                    <Link to={{
                        pathname: `/channelPage/${'shaktimaaninternational'}/channelhome`,
                        
                        }}>
                    <h5 class="card-title vidgridVidCard-title">
                        <Avatar2 username="jnfkan" image={test} /><div className="vid-card-title" >Card title </div> 
                        </h5>
                    </Link>
                    <p class="card-text"><small>440 views <strong>.</strong> 4 min ago</small></p>

                </div>
            </div>
        </div>
      
      
    )
}
