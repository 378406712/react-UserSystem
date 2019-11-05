import React, { Component } from 'react';
import { Input } from 'antd';
import {Logs} from './loginStyle'
import { Button } from 'antd';
import axios from 'axios';

class Login extends Component{

    constructor(){
        super()
       this.state={
           user:null,
           pass:null
       }
    }
    changeUser(e){
        this.setState({
            user:e.target.value
        })
    }
    changePass(e){
        this.setState({
            pass:e.target.value
        })
    }
login(){
 axios.post('/api',{
     user:this.state.user,
     pass:this.state.pass
 }).then((res)=>{
   
     
    
     localStorage.setItem('token',res.data)//存入token,进行登录判断
     localStorage.setItem('user',this.state.user)
     this.props.history.push({pathname:'/'});//编程式导航跳转首页
 })
 
}

    render(){
     
        return (

            <div>
           
        <Logs>
        <p>登录</p>
        <Input placeholder="Basic usage" name="user" onChange={this.changeUser.bind(this)} value={this.state.user}/>      
        <Input.Password placeholder="input password" onChange={this.changePass.bind(this)}value={this.state.pass} name="pass"/>
        <Button type="primary" onClick={this.login.bind(this)} className="btn_login">登录</Button>
        </Logs>
            </div>
        )
    }
}
export default Login