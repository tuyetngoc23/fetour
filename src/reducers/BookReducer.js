const initState = {
    "amount" : null,
    "detail" : null
}

const bookReducer = (state = initState, action) => {
    switch(action.type){
        case "BOOK_AMOUNT":
            return {...state, "amount": action.payload};
        case "BOOK_DETAIL":
            return {...state, "detail": action.payload}
        default:
            return {...state}
    }
}

export default bookReducer