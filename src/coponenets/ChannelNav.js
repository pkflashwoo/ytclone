import React, { useState } from 'react'
import './ComponentCss/channelNav.css';
import { Avatar } from './Avatar';
import { Link } from 'react-router-dom';
import logo from '../images/logoyt.png';
import { useParams } from 'react-router';

export const ChannelNav = ({ username }) => {
    let subscribercount = 456;
    const [isSubscribed, SetisSubscribed] = useState(false);
    const [subscribe, Setsubscribe] = useState("Subscribe");
    const [bgcolorsubscription, Setbgcolorsubscription] = useState({
        backgroundColor: "#cc0000",
        color: "whitesmoke"
    });

    const [clicked,Setclicked]=useState(0);
    const{channelName}:{channelName:string}=useParams();
    console.log("from channel Nav "+channelName);
    

    const funcSubscribe = () => {
        if (isSubscribed) {
            SetisSubscribed(false)
            console.log("Unsubscribed")
            Setsubscribe("Subscribe ");
            Setbgcolorsubscription({
                backgroundColor: "#cc0000",
                color: "whitesmoke"
            })


        }
        else {
            SetisSubscribed(true)
            console.log("subscribed");
            Setsubscribe("Subscribed");
            Setbgcolorsubscription({ backgroundColor: "rgb(48,48,48", color: "#adadad" })
        }

    }

    return (

        <div className="MainNavContainer">
            
            <div className="avatarAndSubscribe ">
                <div style={{ display: 'flex', alignSelf: 'flex-start' }}>

                    <Avatar image={logo} username={username} />
                    <div className="ChannelNameAndSubscriberCount">
                        <strong>
                            {username}
                        </strong>

                        <br />

                        {subscribercount}k Subscribers

                    </div>
                </div>
                <div className="subbtn">
                    <button style={bgcolorsubscription} className="btn-subscribe btn-danger" onClick={funcSubscribe}>{subscribe}</button>
                </div>
            </div>
            <div className="navbar">
                <nav>
                    <ul className="navigation_Channel">
                        <Link to='/channelpage/shaktimaaninternational/channelhome'>
                        <li className={!(clicked===0) ? "li" : "active"} onClick={()=>{Setclicked(0)}}>HOME</li>
                        </Link>
                        <Link to='/channelpage/shaktimaaninternational/channelVid'>
                        <li className={!(clicked===1) ? "li" : "active"} onClick={()=>{Setclicked(1)}}>VIDEOS</li>
                        </Link>
                        <Link to='/channelpage/shaktimaaninternational/channelAbout'>
                        <li className={!(clicked===2) ? "li" : "active"} onClick={()=>{Setclicked(2)}}>ABOUT</li>
                        </Link>
                    </ul>
                </nav>
            </div>

        </div>
    )
}
