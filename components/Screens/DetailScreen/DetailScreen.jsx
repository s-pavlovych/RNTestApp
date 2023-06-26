import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector, useDispatch } from 'react-redux';
import { likePhoto, unlikePhoto } from '../../../redux/actions';

function LikeButton({ liked, onPress }) {
    const heartIconStyle = liked ? styles.heartIconLiked : styles.heartIcon;

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <MaterialCommunityIcons
                    size={50}
                    style={heartIconStyle}
                    name={liked ? 'heart' : 'heart-outline'}
                />
            </TouchableOpacity>
        </View>
    );
}

function DetailScreen({ route }) {
    const { item } = route.params;
    const likedPhotos = useSelector((state) => state.galleryReducer.likedPhotos);
    const liked = likedPhotos.some((photo) => photo.id === item.id);
    const dispatch = useDispatch();

    const handleLikePress = () => {
        if (liked) {
            dispatch(unlikePhoto(item));
        } else {
            dispatch(likePhoto(item));
        }
    };

    return (
        <View>
            <Image
                source={{
                    uri: item.url
                }}
                defaultSource={require('../../../assets/adaptive-icon.png')}
                resizeMode='contain'
                style={styles.image}
            />
            <LikeButton liked={liked} onPress={handleLikePress} />
            <View style={styles.contentContainer}>
                <Text style={styles.title}>{item.title}</Text>
            </View>
        </View>
    );
}

export default DetailScreen;

const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    heartIcon: {
        color: 'black'
    },
    heartIconLiked: {
        color: 'red'
    },
    image: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').width
    },
    title: {
        fontSize: 20
    },
    contentContainer: {
        padding: 10
    }
});
