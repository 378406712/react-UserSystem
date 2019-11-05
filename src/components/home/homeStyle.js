import styled from 'styled-components';


export const HomeWrap = styled.div`

width:1100px;
margin:30px auto;

`

export const HomeLeft = styled.div`
  
    width:700px;
 
    float:left;
    img{
        width:700px;
        height:100%;
    }
`

export const HomeRight = styled.div`
    
    height:1100px;
    width:300px;

    float:right
`
export const Bricks = styled.div`
width:700px;
height:200px;

margin-top:30px;


`

export const BricksItem = styled.div`
    width: 130px;
    height:80px;
    margin:10px 5px;

    border:1px solid #ccc;
   float:left;
   text-align:center;
  
    img{
        width: 85px;
        height: 78px;
        border:none;
      
        
    }
`


export const Lists = styled.div`
width:700px;

margin-top:30px;

`

export const ListsItem = styled.div`
margin-top:10px;
    width:700px;
    height:200px;
    border:1px solid #CCC;
    img{
        width: 300px;
        height:100%;
        float:left;
        border-right:1px solid #CCC;
    }
    .words{
     padding:20px 5px;
        float:left;
        width: 398px;;
        height:200px;
        text-align:center;
        .title{
            font-size:26px;

        }
    }
`
export const Scans = styled.div`


    width:00px;
   
`
export const ScansItem = styled.div`
    width: 300px;
    height:120px;
    text-align:center;
    border:1px solid #ccc;
    margin-bottom:15px;
    img{
            width: 100%;
            height:90px;
    }
    .scan-desc{
        height:30px;
        color:#222;
        font-size:16px;
    
    }
`

export const Scenes = styled.div`

    width:300px;
   
    .pics{
        width:300px;
  
   text-align:center;
   margin-top:20px;
   img{
       margin-left:10px;
       width:117px;
       height:117px;
   }

    }

`

export const ScenesItem = styled.div`
   margin-top:20px;

   text-align:center;
   padding:0 10px;
   ul{
    border-bottom:1px solid #ccc;
   }
   ul>li{
       height:40px;
       line-height:40px;
       font-size:21px;
       letter-spacing:2px;
   
   }

`



