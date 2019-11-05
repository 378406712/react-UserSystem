function getName(){
    let users = sessionStorage
    .getItem("user")
    console.log(users)
    return users
}


const defaultStore = {
    flag: false,
    names: getName(),

};
export default (state = defaultStore, action) => {
    const NewState = JSON.parse(JSON.stringify(state))//深拷贝
    switch (action.type) {
        case 'input_focus': NewState.flag = true;
            return NewState
        case 'input_blur': NewState.flag = false;
            return NewState
     
        default: return state

    }


}