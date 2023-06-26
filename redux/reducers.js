import { LIKE_PHOTO, UNLIKE_PHOTO, RESET_STORE } from './actions';

const initialState = {
    likedPhotos: [],
};

export const galleryReducer = (state = initialState, action) => {
    switch (action.type) {
        case LIKE_PHOTO:
            return {
                ...state,
                likedPhotos: [...state.likedPhotos, action.payload],
            };
        case UNLIKE_PHOTO:
            return {
                ...state,
                likedPhotos: state.likedPhotos.filter((photoId) => photoId !== action.payload),
            };
        case RESET_STORE:
            return initialState;
        default:
            return state;
    }
};
