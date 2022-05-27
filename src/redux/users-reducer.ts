import {ActionsTypes} from "./redux-store";

export type FollowActionType = ReturnType<typeof followAC>

export type UnfollowActionType = ReturnType<typeof unfollowAC>

export type SetUsersActionType = ReturnType<typeof setUsersAC>

type PhotosType = {
    small: string | null
    large: string | null
}

export type UserType = {
    name: string
    id: number
    uniqueUrlName: string | null
    photos: PhotosType
    followed: boolean
    status: string | null
}

export type InitialStateUsersReducerType = {
    users: Array<UserType>
}


let initialState: InitialStateUsersReducerType = {
    users: [],
}

const usersReducer = (state: InitialStateUsersReducerType = initialState, action: ActionsTypes): InitialStateUsersReducerType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u, followed: true};
                    }
                    return u;
                })
            };
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u, followed: false};
                    }
                    return u;
                })
            };
        case 'SET_USERS':
            return {
                ...state,
                users: [...state.users, ...action.users]
            };
        default:
            return state;
    }
}

export const followAC = (userId: number) => {
    return {
        type: 'FOLLOW',
        userId
    } as const
}
export const unfollowAC = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        userId
    } as const
}
export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: 'SET_USERS',
        users
    } as const
}

export default usersReducer;