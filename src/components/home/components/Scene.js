import React, { Component } from 'react';
import { Scenes, ScenesItem } from '../homeStyle'
import image1 from './../../../static/wb1.jpg'
import image2 from './../../../static/wb2.jpg'
import {connect} from 'react-redux'
class Scene extends Component {
   

    render() {
        return (

            <div>
                <Scenes>


                    <div className="pics">
                        <img src={image1} alt="" />
                        <img src={image2} alt="" />
                    </div>
                    {
                        this.props.sceneData.map((item, index) => {
                       return     <ScenesItem key ={index.toString()}>
                                <ul>
                                    <li>{item.txt}</li>
                                </ul>
                            </ScenesItem>
                        })
                    }

                </Scenes>
            </div>
        )
    }
}
const mapState =(state)=>({
    sceneData:state.home.sceneData
})
export default connect (mapState,null)(Scene);