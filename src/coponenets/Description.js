import React, { useState } from 'react'
import { Avatar } from './Avatar';
import { Link } from 'react-router-dom';
import logo from '../images/logoyt.png';
import "./ComponentCss/description.css";

export const Description = () => {
    const [isSubscribed, SetisSubscribed] = useState(false);
    const [subscribe, Setsubscribe] = useState("Subscribe");
    const [bgcolorsubscription, Setbgcolorsubscription] = useState({
        backgroundColor: "#cc0000",
        color: "whitesmoke"
    });
    const [isLiked, SetisLiked] = useState(false);
    const [like, SetLike] = useState("Like ");
    const [isDisliked, SetisDisliked] = useState(false);
    const [dislike, Setdislike] = useState("Dislike ");
    const [likecolor, Setlikecolor] = useState({ color: "white" });
    const [dislikecolor, SetDislikecolor] = useState({ color: "white" });

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
            Setbgcolorsubscription({ backgroundColor: "rgb(48,48,48)", color: "#adadad" })
        }

    }
    const funcLike = () => {
        if (isLiked) {
            SetisLiked(false)
            console.log("UnLiked")
            SetLike("Like ");
            Setlikecolor({ color: "white" })
        }
        else if (isDisliked) {
            SetisDisliked(false);
            Setdislike("Dislike ");
            SetDislikecolor({ color: "white" });
            console.log("removed dislike and liked");
            SetLike("Liked");
            SetisLiked(true);
            Setlikecolor({ color: "rgb(55,166,241)" })

        }
        else {
            SetisLiked(true)
            console.log("Liked")
            SetLike("Liked");
            Setlikecolor({ color: "rgb(55,166,241)" })
        }

    }

    const funcDislike = () => {

        if (isDisliked) {
            SetisDisliked(false)
            console.log("Remove Dislike")
            Setdislike("Dislike ");
            SetDislikecolor({ color: "white" });

        }
        else if (isLiked) {
            SetisDisliked(true);
            Setdislike("Disliked");
            Setlikecolor({ color: "white" });
            console.log("removed like and disliked");
            SetLike("Like ");
            SetisLiked(false);
            SetDislikecolor({ color: "rgb(55,166,241)" });

        }
        else {
            SetisDisliked(true)
            console.log("Disliked")
            Setdislike("Disliked");
            SetDislikecolor({ color: "rgb(55,166,241)" });
        }

    }
    return (

        <>

            <div className="title">
                <h4>
                    Mai Hoon Takatwar
                </h4>
                <div className="like-views-count">
                    <p>
                        Views <strong>.</strong> Timestamp
                    </p>
                    <div className="response">

                        <i onClick={funcLike} style={likecolor} class="fas fa-1x fa-thumbs-up like"><small>{like}</small></i>
                        <i onClick={funcDislike} style={dislikecolor} class="fas fa-1x fa-thumbs-down like"><small>{dislike}</small></i>
                    </div>
                </div>
                <hr />
                <div className="channelsRelated">
                    <div className="channelrel1">
                        <Link to="/channelPage/channelhome">
                            <Avatar image={logo} username="username" />
                        </Link>
                        <div className="channelDetail">
                            <Link to="/channelPage/channelhome">
                                <h6><strong>Shaktimaan</strong> </h6>
                            </Link>
                            <p>654k Subscribers</p>
                        </div>
                    </div>
                    <div className="channelrel2">
                        <button style={bgcolorsubscription} className="btn-subscribe btn-danger" onClick={funcSubscribe}>{subscribe}</button>
                    </div>
                </div>
                <div className="viddescription">
                    <p className="aboutvid">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque nihil obcaecati dolore error fugiat officiis eius asperiores!
                        Molestiae voluptas, earum dicta ea illo qui modi facere totam ipsa dolorem perspiciatis nostrum
                        eum dolorum exercitationem laborum cupiditate sed voluptates, unde dolore non tempore numquam!
                        Suscipit eos voluptate porro in laborum, temporibus dignissimos hic rerum totam labore quo,
                        deleniti minima dolor unde sed. Nesciunt rem ex minima error voluptates natus amet ut vitae saepe.
                        Delectus officia qui architecto blanditiis ipsa.

                    </p>
                </div>
            </div>
            <hr />
        </>
    )
}
