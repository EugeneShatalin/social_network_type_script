import { ActionsTypes } from "./redux-store";

export type AddPostActionType = ReturnType<typeof addPostActionCreator>

export type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextActionCreator>

type PostType = {
    post: string
    likesCount: number
    id?: number
}

type InitialStateProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}


let initialState: InitialStateProfilePageType = {
    posts: [
        {post: 'My post number 1', likesCount: 12, id: 1},
        {post: 'My post number 2', likesCount: 23, id: 2},
        {post: 'My post number 3', likesCount: 44, id: 3},
    ],
    newPostText: "IT-KAMASUTRA",
}

const profileReducer = (state: InitialStateProfilePageType = initialState, action: ActionsTypes): InitialStateProfilePageType => {
    switch (action.type) {
        case "ADD-POST":
            let newPost: PostType = {
                id: 5,
                post: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case "UPDATE-NEW-POST-TEXT":
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {
        type:'ADD-POST'
    } as const
}
export const updateNewPostTextActionCreator = (text: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: text
    } as const
}

export default profileReducer;