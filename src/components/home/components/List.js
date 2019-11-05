import React, { Component } from 'react';
import { Lists, ListsItem } from '../homeStyle'
import { connect } from 'react-redux'

class List extends Component {

    render() {
        return (

            <div>
                <Lists>
                    {
                        this.props.ListContent.map((item, index) => {
                            return <ListsItem key={index.toString()}>
                                <img src={item.imgUrl} alt="" />
                                <div className="words">
                                    <p className="title">{item.title}</p>
                                    <p className="desc">{item.desc}</p>
                                </div>
                            </ListsItem>
                        })
                    }
                </Lists>
            </div>
        )
    }
}
const mapState = (state) => ({
    ListContent: state.home.ListContent


})

export default connect(mapState, null)(List);