const reducer = (state, action) => {
    switch(action.type){
        case "setRegions":
            const newState=[...state]
            const { regions } = action;
            return state.concat(regions)
        default:
            return state;
    }
}


export default reducer;
