import styled from 'styled-components';
import Logos from './../../static/logo.jpg'

export const FootWrap =styled.div`
height:300px;


background-color: #ccc;
padding:40px 150px 

`





export const FootLeft =styled.div`
float:left;

width:300px;

.about{
    display:block;
    color:#222;
}
`

export const Logo =styled.div`

width:120px;
height: 60px;
margin-bottom:30px;


background-image: url(${Logos});
background-size: contain;
background-repeat: no-repeat;


`

export const FootMiddle =styled.div`
width:350px;
float:left;
.pics{
    margin-top:40px;
    img{
        margin-left:50px;
        float:left;
        width: 117px;
    height: 117px;
    }
}


`
export const FootRight =styled.div`
float:left;
width:400px;



`
export const Details =styled.ul`

padding:0px 80px;
text-align:center;


li{
    float:left;
    margin-left:10px;
    margin-bottom:20px
}

`


