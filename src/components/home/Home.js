import React,{Component} from 'react';
import {HomeWrap,HomeLeft,HomeRight} from './homeStyle'
import Brick from './components/Brick'
import List from './components/List'
import Scan from './components/Scan'
import Scene from './components/Scene'
import axios from 'axios';
import Head from '../head/Head'
import Foot from '../foot/Foot'
import {connect} from 'react-redux';
class Home extends Component{
    render(){
        return(
            <div>
                <Head/>
             <HomeWrap className="clearFix">

                <HomeLeft>
                    <img src="//asset.ibanquan.com/s/30611/727/index_slide_1?v=1568268246_1572510848" alt=""/>
                    <Brick/>
                    <List/>
                </HomeLeft>
                <HomeRight>

                    <Scan/>
                    <Scene/>

                </HomeRight>
             </HomeWrap>
             <Foot/>
            </div>
        )
    }

    componentDidMount(){
 
        axios.get('/data/getHomeList.json').then((res)=>{//axios请求数据 
          
            const action ={ //1.在钩子函数中定义action拿到数据
                type:"change_home",//类型判断
                data:res.data.data//数据
            }
            this.props.changeHomeData(action)//5.通过props将changeHomeData方法传到钩子函数内
        })
    
    }
}
const mapDispatch =(dispatch)=>({//3.定义mapDispatch
    changeHomeData(action){//4.自定义方法changeHomeData，
        dispatch(action)//6.派发action
    }


})
export default connect (null,mapDispatch)(Home);