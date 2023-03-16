const initState = {
    isLoading: false,
}
export type stateType = typeof initState

export const loadingReducer = (state = initState, action: LoadingActionType):stateType => { // fix any
    switch (action.type) {
        case "CHANGE_LOADING": return {...state, isLoading: action.isLoading}
        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
