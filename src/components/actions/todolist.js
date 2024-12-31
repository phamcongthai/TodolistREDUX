export const add = (dt) => {
    return{
        type : 'ADD',
        data : {
            id : Math.random().toString(36).substr(2, 9),
            toDo : dt,
            completed : false
        },
        
    }
}
export const complete = (id) => {
    return{
        type : 'COMPLETE',
        id : id
    }
}
export const undo = (id) => {
    return{
        type : 'UNDO',
        id : id
    }
}
export const dele = (id) => {
    return{
        type : 'DELETE',
        id : id
    }
}