import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
    switch (action.type) {
        case 'sort': {
            const newState = [...state]
            action.payload === "up"
              ? newState.sort( (a, b) => a.name.localeCompare(b.name))
              : newState.sort( (a, b) => b.name.localeCompare(a.name))
            return newState
        }
        case 'check': {
            return state.filter(u=>u.age > action.payload)
        }
        default:
            return state
    }
}
