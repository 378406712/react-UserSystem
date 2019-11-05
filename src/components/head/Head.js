import React from 'react';
import { HeadWrap, Logo, Nav, Item, SearchWrap, Search, SearchInfo, } from './headStyle';
import { connect } from 'react-redux';
import { BrowserRouter as Router, NavLink, Switch } from 'react-router-dom'
import * as handleAction from './store/headActionCreate'

function showInfo(flag) {


    if (flag) {
        return (
            <SearchInfo>
                <span>精品锅具</span>
                <span>精品茶具</span>
                <span>精品杯具</span>
            </SearchInfo>

        )

    }
    else {
        return null
    }


}


function Head(props) {
    // state = store.getState();//接收store中数据
    let { inputFocus, inputBlur, flag, name, exit } = props


    return (
        <div>
            <HeadWrap>
            <NavLink to="/"><Item> <Logo></Logo></Item></NavLink>
               
                <Nav className="clearFix">

                    <NavLink exact activeStyle={{
                        
                        fontWeight: 600
                    }} to="/"><Item>首页</Item></NavLink>
                    <NavLink activeStyle={{
                    
                    fontWeight: 600
                    }} to="/load"><Item>加载页</Item></NavLink>
                <Switch>


                </Switch>

                </Nav>
            {showInfo(flag)}
            <SearchWrap>
                <Search onFocus={inputFocus}
                    onBlur={inputBlur}
                    className={flag ? 'flag' : ''} />
                <span className="glyphicon glyphicon-search"></span>
            </SearchWrap>
            <span className="welcome">
                欢迎
        <em className="user">[ {name} ]</em>登录，
        {/* <i className="exit" onClick ={exit}>退出</i> */}
            </span>
            </HeadWrap>

        </div >
    )


}


//映射数据,将state中数据映射到store,store再转给reducer
const mapState = (state) => ({
    flag: state.head.flag,
    name: state.head.names
})
//派发方法
const mapDispatch = (dispatch) => ({
    inputFocus() {

        dispatch(handleAction.handle_iFocus)//派发inputFous方法
    },

    inputBlur() {

        dispatch(handleAction.handle_iBlur)//派发inputBlur方法
    },
    // exit(){
    //     dispatch(handleAction.handle_exit)
    // }

})

//react-redux会把state映射成props,所以可把有状态组件改为无状态组件
export default connect(mapState, mapDispatch)(Head);
