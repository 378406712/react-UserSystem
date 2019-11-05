//当许多组件要使用reducer共有数据时，应把主reducer进行拆分
//把处理数据的内容，让各个组件分reducer去承担
//引入分reducer的作用，最后通过store把数据映射到组件
import {combineReducers} from 'redux';//负责拆分reducer
import headReducer from './../components/head/store/headReducer';
import homeReducer from '../components/home/store/homeReducer';
import footReducer from '../components/foot/store/footReducer';
import detailsReducer from '../components/detail/store/detailsReducer';
export default combineReducers({
    head:headReducer,//key值自己取
    home:homeReducer,
    foot:footReducer,
    details:detailsReducer
})