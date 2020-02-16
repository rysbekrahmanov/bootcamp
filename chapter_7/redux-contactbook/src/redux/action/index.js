export const createTask = (state, name, lastName, number)=>{
    const newState =[...state];
    newState.push({name,lastName,number, status:false})

    return {
        type: 'CREATE_CONTACT',
        payload: newState
    }
}

export const deleteTask = (state, index)=>{
    const newState = [...state];
    newState.splice(index, 1)

    return {
        type: 'DELETE_CONTACT',
        payload: newState
    }
}
export const changeEdit = (state, index) => {
    const newState = [...state];
    newState[index] ={
      ...newState[index],
      statusEdit: !newState[index].statusEdit
    }
  }
  
  export const setEditIndex = index => {
    return {
      type: 'SET_EDIT_INDEX',
      payload: index
    }
  }
  
  export const updateContact = (data, obj, index) => {
    const newData = [...data]
    newData[index] = obj
  
    return {
      type: 'UPDATE_CONTACT',
      payload: newData
    }
  }