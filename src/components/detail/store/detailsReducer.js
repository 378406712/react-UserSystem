const defaultStore ={
    details:[]
}

export default(state = defaultStore, action) => {
    const NewState = JSON.parse(JSON.stringify(state))//深拷贝
    if(action.type==='details_data'){
 
    NewState.details=action.data

        return NewState
    }
    return state




}