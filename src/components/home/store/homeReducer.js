const defaultStore = {
    BrickContent: [],
    ListContent: [],
    ScanContent:[],
    sceneData: []
};
export default (state = defaultStore, action) => {
    if (action.type === 'change_home') {

        const NewState = JSON.parse(JSON.stringify(state))//深拷贝
     
        NewState.BrickContent = action.data.BrickContent
        NewState.ListContent = action.data.ListContent
        NewState.ScanContent = action.data.ScanContent
        NewState.sceneData = action.data.sceneData
        return NewState
    }
    return state;
}