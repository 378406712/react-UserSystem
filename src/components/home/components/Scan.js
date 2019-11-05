import React, { Component } from 'react';
import { Scans,ScansItem } from '../homeStyle'
import {connect} from 'react-redux'
class Scan extends Component {

    render() {
        return (

            <div>
                <Scans>

                    {
                        this.props.ScanContent.map((item,index)=>{
                         return   <ScansItem key={index.toString()}>
                            <img src={item.imgUrl} alt=""/>
                            <p className="scan-desc">{item.desc}</p>
                            </ScansItem>
                        })
                    }
                </Scans>
            </div>
        )
    }
}
const mapState =(state)=>({
    ScanContent:state.home.ScanContent
});
export default connect(mapState,null)(Scan);