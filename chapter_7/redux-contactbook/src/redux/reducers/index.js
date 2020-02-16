const initialState ={
    data:[{
        name: 'biroo',
        lastName: 'birdemeevich',
        number: "0700700700"
    }]
}

function mainReducer(state= initialState,action){
    switch(action.type){
        case 'CREATE_CONTACT': return {
            ...state,
            data: action.payload
        }

        case 'DELETE_CONTACT': return {
            ...state,
            data: action.payload
        }
        case 'SET_EDIT_INDEX': return {
            ...state,
            currentIndex: action.payload
          }
          case 'UPDATE_CONTACT': return{
            ...state,
            data: action.payload
          }
        default:return state
    }
}

export default mainReducer;