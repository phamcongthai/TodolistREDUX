const init = [
    {
        id : 1,
        toDo : 'Học lập trình',
        completed : false
    },
    {
        id : 2,
        toDo : 'Học linux',
        completed : false
    }
]
export const todolistReducer = (state = init, action) => {
    if(action.type === 'ADD'){
        let tmp = [...state, action.data];
        state = tmp;
    }else if(action.type ==='COMPLETE'){
        let tmp = state.map((item, _)=>{
            if(item.id === action.id){
                let itemTmp = {...item};
                itemTmp.completed = true;
                return itemTmp;
            }
            return item;
        })
        state = tmp;
    }else if(action.type === 'UNDO'){
        let tmp = state.map((item, _)=>{
            if(item.id === action.id){
                let itemTmp = {...item};
                itemTmp.completed = false;
                return itemTmp;
            }
            return item;
        })
        state = tmp;
    }else{
        let tmp = state.filter((item, _) => item.id !== action.id);
        state = tmp;
    }
    return state;

}