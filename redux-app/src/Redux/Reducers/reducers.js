

export const PeopleReducer = (state={titleData:[]},action)=>{

    switch(action.type){
        case "POST_DATA":
            return {titleData:action.records}
        default:
            return state;
    }
}