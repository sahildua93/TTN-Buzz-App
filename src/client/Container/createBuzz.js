/**
 * Created by sahil-dua on 5/5/17.
 */

import React, { Component } from 'react'
import '../../assets/CSS/buzz.css'
export default class CreateBuzz extends Component{


    render(){
        return(
            <div className="wrapper">
            <div className="main-buzz">
                <div className="inputarea">
                    <textarea placeholder="Type here to create Buzz...."></textarea>
                </div>
                <div className="header">
                    <select>
                        <option>Activity</option>
                        <option>Lost n found</option>
                    </select>
                    <input type="submit" value="submit" />
                </div>
            </div>

               <div className="post">
                    <div className="postheader">
                        <img src={require('../../assets/images/img_avatar2.png')}/>
                        <div className="postby">
                            <span className="by">Sahil dua Create a New Buzz</span>
                            <span className="time">2 days ago</span>
                        </div>
                        <span className="actorlost">Activity</span>
                    </div>
                   <div className="postcontainer">
                      <div className="image">
                          <img src={require('../../assets/images/img_avatar2.png')}/>
                          <p>
                              kjhgfghjkjhgfghjkjhgfghjkjhgfghjkjhgfghjkjhgfghj
                              kjhgfghjkjhgfghjkjhgfghjkjhgfghjkjhgfghj
                              kjhgfghjkjhgfghjkjhgfghjkjhgfghjkjhgfghj
                              kjhgfghjkjhgfghjkjhgfghjkjhgfghjkjhgfghj
                              kjhgfghjkjhgfghj
                          </p>

                      </div>
                   </div>
               </div>

            </div>

        )
    }
}