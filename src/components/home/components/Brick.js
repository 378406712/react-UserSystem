import React, { Component } from 'react';
import { Bricks, BricksItem } from '../homeStyle'
import { connect } from 'react-redux'

import { NavLink } from 'react-router-dom'

class Brick extends Component {



    render() {



        return (

            <div>
                <Bricks>
                    {//要return！！
                        this.props.BrickContent.map((item, index) => {
                            return <NavLink key={index.toString()} to={`/detail/${index}`}>
                                    <BricksItem >
                                        <img src={item.imgUrl} alt="" />
                                        <span>{item.txt}</span>
                                    </BricksItem>
                                </NavLink>
                           

                        })
                    }

                </Bricks>
            </div>
        )
    }
}

// const mapState = (state)=>{
//     console.log(state.home.BrickContent)
//     return{}
// }
const mapState = (state) => ({
    BrickContent: state.home.BrickContent

})


export default connect(mapState, null)(Brick);