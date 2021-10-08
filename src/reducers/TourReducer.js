const initState = {
    "tour": null
}

const tourReducer = (state = initState, action) => {
    switch(action.type){
        case "GET_TOUR":
            return{
                ...state,
                "tour": action.payload
            }
        default:
            return {...state};
    }
}

export default tourReducer