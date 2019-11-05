function getName(){
    let users = localStorage.getItem("user")
    console.log(users)
    return users
}
// function removeToken(){
//     let token = localStorage.getItem("token")   
//     console.log(token)
// }

const defaultStore = {
    flag: false,
    names: getName(),
    // token:removeToken()
};
export default (state = defaultStore, action) => {
    const NewState = JSON.parse(JSON.stringify(state))//深拷贝
    switch (action.type) {
        case 'input_focus': NewState.flag = true;
            return NewState
        case 'input_blur': NewState.flag = false;
            return NewState
        // case 'handle_exit':  NewState.token='';
        // return NewState
        default: return state

    }


}