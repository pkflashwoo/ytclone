import React from 'react';
import { useParams } from 'react-router';
import './ComponentCss/channelAboutPage.css'

export const ChannelAboutPage = () => {

    const{channelName}:{channelName:string}=useParams();
    console.log("from channel ChannelAboutPage "+channelName);

    return (
        <>
            


                <div className="container">
                    <div className="descriptionAndLinks">
                        <div className="part1">
                            <h6 className="des"><b>Description</b></h6>
                            <hr />
                            <small className="para1">
                                Hi, <br />
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium libero et, dolorem facere cupiditate amet soluta. Quisquam similique et consequuntur voluptatum tempore explicabo veritatis dicta sapiente? Nam ut dolorem eligendi?
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque distinctio, vero adipisci, amet eaque earum beatae vitae temporibus rerum corporis placeat labore totam veritatis non architecto iusto maxime consequatur excepturi?
                            </small>
                        </div>
                        <hr />


                        <div className="part3">
                            <h6 className="det">Details</h6>
                            <h6 className="part31">For Business Enquires:</h6>
                            <button className=" btn btn-secondary part32">VIEW EMAIL ADDRESS</button>

                        </div>
                        <hr />
                        <div className="d1">
                            <strong className="part33">Location : </strong>
                            <small className="part34">India</small>
                        </div>
                        <hr />



                        <div className="part4">
                            <h6 className="link"><b>Links</b></h6>

                            <small className="li"><a href="/">Pratyush youtuber</a></small>
                        </div>
                    </div>


                <div className="part2">
                    <h6 className="st">Stats</h6>
                    <hr />
                    <small>Joined 1 Dec 2003</small>
                    <hr />
                    <small>43434 views</small>
                    <hr />
                    <small><i class="far fa-flag"/></small>
                </div>
                </div>
           
        </>
    )
}
