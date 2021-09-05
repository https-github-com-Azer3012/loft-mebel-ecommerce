const initialState=[]

const basketReducer=(state=initialState,action)=>{
    switch(action.type){
        case "ADD_TO_BASKET":
            return state=[...state,action.payload]
        case "REMOVE_FROM_BASKET":
            return state=state.filter(item=>item.id!==action.payload)
        default:
            return state
    }
}

export default basketReducer;