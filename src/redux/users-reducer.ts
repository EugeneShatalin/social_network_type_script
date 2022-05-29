import {ActionsTypes} from "./redux-store";

export type FollowActionType = ReturnType<typeof followAC>

export type UnfollowActionType = ReturnType<typeof unfollowAC>

export type SetUsersActionType = ReturnType<typeof setUsersAC>

export type SetCurrentPageActionType = ReturnType<typeof setCurrentPageAC>

export type SetUsersCountACActionType = ReturnType<typeof setUsersTotalCountAC>

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
    pageSize: number
    totalUsersCount: number
    currentPage: number
}


let initialState: InitialStateUsersReducerType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
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
                users: [...action.users]
            };
        case 'SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.currentPage
            };
        case 'SET_TOTAL_USERS_COUNT':
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
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

export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: 'SET_CURRENT_PAGE',
        currentPage
    } as const
}

export const setUsersTotalCountAC = (totalUsersCount: number) => {
    return {
        type: 'SET_TOTAL_USERS_COUNT',
        totalUsersCount
    } as const
}

export default usersReducer;