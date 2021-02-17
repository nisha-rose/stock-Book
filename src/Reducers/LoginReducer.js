const initialstate ={};

const loginReducer = (state= initialstate, action) =>{
    switch(action.type){
        case 'LOGIN':
            return{...state, isAuthed:action.isAuthenticated, username:action.username};
        case 'LOGOUT':
            return{...state, isAuthed:false}
        case 'USER_REGISTERED':
            return{...state, newUserRegistrationStatus:true}
        case 'USER_REGISTERATION_FAILED':
            return{...state, newUserRegistrationStatus:false}
        default:
            return state;
    }

}

export default loginReducer;