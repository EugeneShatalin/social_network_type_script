import {ActionsTypes} from "./redux-store";

export type FollowActionType = ReturnType<typeof follow>

export type UnfollowActionType = ReturnType<typeof unfollow>

export type SetUsersActionType = ReturnType<typeof setUsers>

export type SetCurrentPageActionType = ReturnType<typeof setCurrentPage>

export type SetUsersCountACActionType = ReturnType<typeof setUsersTotalCount>

export type SetIsFetchingACActionType = ReturnType<typeof toggleIsFetching>

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
    isFetching: boolean
}


let initialState: InitialStateUsersReducerType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
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
        case 'TOGGLE_IS_FETCHING':
            return {
                ...state,
                isFetching: action.isFetching
            };
        default:
            return state;
    }
}

export const follow = (userId: number) => {
    return {
        type: 'FOLLOW',
        userId
    } as const
}
export const unfollow = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        userId
    } as const
}
export const setUsers = (users: Array<UserType>) => {
    return {
        type: 'SET_USERS',
        users
    } as const
}

export const setCurrentPage = (currentPage: number) => {
    return {
        type: 'SET_CURRENT_PAGE',
        currentPage
    } as const
}

export const setUsersTotalCount = (totalUsersCount: number) => {
    return {
        type: 'SET_TOTAL_USERS_COUNT',
        totalUsersCount
    } as const
}

export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: 'TOGGLE_IS_FETCHING',
        isFetching
    } as const
}

export default usersReducer;