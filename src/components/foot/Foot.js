import React from 'react'
import { FootWrap, FootLeft, FootMiddle, FootRight, Logo, Details } from './footStyle'
import image1 from './../../static/wb1.jpg';
import image2 from './../../static/wb2.jpg';
import { connect } from 'react-redux'
function Foot(props) {

    return (

        <FootWrap>
            <FootLeft>
                <Logo className="clearFix">

                </Logo>
                <p className="about">青竹良品原创生活类电商品牌，秉承一贯的严谨态度，我们深入世界各地，从源头全程严格把控商品生产环节，力求帮消费者甄选到最优质的商品，全线采用天然原材料，控制甲醛低量无害，采用进口工艺，国际生产线不断优化，食材保证核心原产地新鲜直供，让你享受品质生活</p>

            </FootLeft>
            <FootMiddle>

                <div className="pics clearFix">
                    <img src={image1} alt="" />
                    <img src={image2} alt="" />
                </div>

            </FootMiddle>
            <FootRight>

               
                <Details className="clearFix">
                {
                    props.details.map((item, index) => {

                    
                        return <li key={index.toString()}>{item.txt}</li>

                    })
                }
                    </Details>
            



            </FootRight>




        </FootWrap>



    )




}
const mapState = (state) => ({
    details: state.foot.data
})

export default connect(mapState, null)(Foot);
