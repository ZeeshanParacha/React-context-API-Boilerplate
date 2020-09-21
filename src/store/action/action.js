export function changeState(changeUserName) {
    return dispatch => {
       
        dispatch({ type: 'CHANGE_USER_NAME', payload: changeUserName })

    }
}