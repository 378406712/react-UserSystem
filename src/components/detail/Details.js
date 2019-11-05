import React, { Component } from 'react'
import { Top, Middle, Content } from './detailsStyle'
import axios from 'axios'
import {connect} from 'react-redux'
import * as detailAction from './store/detailActionCreate'
import Head from '../head/Head'
import Foot from '../foot/Foot'
class Details extends Component {
    componentDidMount(){
this.colorChange.style.color=this.props.colors
    }
    render() {

      
       var index = this.props.match.params.id
        axios.get('http://jsonplaceholder.typicode.com/posts?userId=' + 1).then((res) => {
            const action ={
                type:'details_data',
                data:res.data[index]

            }
            this.props.transForDetails(action)
        })

    
        return (
         
            <div>
                <Head/>
                <Content>

                    <Top>
                        <p><span>{this.props.index}</span>. {this.props.title}</p>
                    </Top>
                    <Middle><div ref={(ref)=>{this.colorChange=ref}}>{this.props.body}</div></Middle>
                </Content>


            <Foot/>
            </div>


        )
    }
}
const mapState =(state)=>({
  title:  state.details.details.title,
    body: state.details.details.body,
    index: (state.details.details.id-1).toString(),
    colors:detailAction.changeColor.color
})

const mapDispatch =(dispatch)=>({
    transForDetails(action){
        dispatch(action)
    },
  
})

export default connect(mapState,mapDispatch)(Details)