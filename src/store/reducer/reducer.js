

const INITIAL_STATE = {
    userName : []
}
export default (states = INITIAL_STATE , action) => {
    console.log('action.payload' , action.payload)
    switch(action.type){
        case 'CHANGE_USER_NAME':
            return ({
                ...states,
                userName : [...states.userName, action.payload]
            })
        default :
        return states;
    }

}