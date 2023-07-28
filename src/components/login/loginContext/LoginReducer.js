export const LoginInitialState = {
    user: null
}

export const actionTypes = {
    setUser: 'set_user',
    unsetUser: 'unset_user'
}
const loginReducer = (state, action) => {
    switch (action.type) {
        case actionTypes.setUser:
            console.log("action.user",action.user);
            return {
                ...state,
                user: action.user
            }
        case actionTypes.unsetUser:
            return {
                user: null
            }
        default: return state
    }

}
export default loginReducer