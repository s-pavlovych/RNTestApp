export const LIKE_PHOTO = 'LIKE_PHOTO';
export const UNLIKE_PHOTO = 'UNLIKE_PHOTO';
export const RESET_STORE = 'RESET_STORE';

export const likePhoto = (photoId) => {
    return {
        type: LIKE_PHOTO,
        payload: photoId,
    };
};

export const unlikePhoto = (photoId) => {
    return {
        type: UNLIKE_PHOTO,
        payload: photoId,
    };
};

export const resetStore = () => {
    return {
        type: RESET_STORE,
    }
};
