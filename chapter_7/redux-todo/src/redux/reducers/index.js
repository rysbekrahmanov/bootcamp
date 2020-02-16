const initialState={
    data: [
        {
            text:"NewTask1",
            status: false
        }
    ],
    data2:{}   
}
function mainReducer(state = initialState, action){
    switch(action.type){
        case 'CREATE_TASK': return {
            ...state,
            data: action.payload
        }
        case 'CHANGE_STATUS': return {
            
        }
        default: return state
    }
}

export default mainReducer;