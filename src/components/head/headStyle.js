import styled from 'styled-components';
import Logos from './../../static/logo.jpg'

export const HeadWrap = styled.div`
position: relative;
height:60px;
line-height:60px;
background-color: #ccc;


.welcome {
  position: absolute;
  right: 5rem;
  font-size: 21px;
}
.user {
  font-weight: 600;
  color: blue;
  margin: 0 1rem 0 1rem;
}
.exit:hover {
  cursor: pointer;
  color: blue;
}
i {
  font-style: normal;
}
`
export const Logo = styled.div`
float:left;
width:120px;
height: 60px;
margin-left:100px;
background-image: url(${Logos});
background-size: contain;
background-repeat: no-repeat;
`
export const Nav = styled.div`
float:left;
height:60px;
line-height:60px;
margin-left:120px;
`

export const Item = styled.span`
height:60px;
line-height:60px;
font-size:32px;
color:#222;
margin-left:26px;
display:block;
float:left;
`
export const SearchWrap = styled.div`
height:60px;
width:300px;
float:right;
position: relative;
right:200px;
span{
position: absolute;
left:160px;
top:22px;
}
`
export const SearchInfo = styled.div`
margin-left:200px;
height:60px;
line-height:60px;
width:300px;
float:left;
font-size:21px;
span{
    margin-left:15px;
}
`
//属性attrs({key:val})
export const Search = styled.input.attrs({placeholder:"请输入内容"})`
height:40px;
width:180px;
border:none;
outline:none;
float:right;
margin-right:100px;
border-radius:30px;
margin-top:10px;
padding-left:20px;
transition:.3s;
&.flag{
width:220px;
}
`
export const Login = styled.div`
position:absolute;
right:20px;
top:20px;
font-size:16px;
`