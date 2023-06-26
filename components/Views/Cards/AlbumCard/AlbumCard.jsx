import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Dimensions } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

const AlbumCard = ({ item, handlePress }) => {
    const screenWidth = Dimensions.get('screen').width;
    const paddingValue = 10;
    const itemSize = (screenWidth / 3) - paddingValue;
    const likedPhotos = useSelector((state) => state.galleryReducer.likedPhotos);
    const liked = likedPhotos.some((photo) => photo.id === item.id);

    return (
        <View style={styles.container(itemSize)}>
            <TouchableOpacity onPress={handlePress}>
                <View>
                    <Image style={styles.image(itemSize)}
                        source={{
                            uri: item.thumbnailUrl
                        }}
                        resizeMode='contain'
                    />
                    <View style={styles.heartIconContainer}>
                        {liked && (
                            <MaterialCommunityIcons style={styles.heartIcon}
                                name={'heart'}
                                size={15}
                            />
                        )}
                    </View>
                </View>
            </TouchableOpacity>
            <Text numberOfLines={2} style={styles.title}>
                {item.title}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: (itemSize) => ({
        width: itemSize,
        gap: 5,
    }),
    image: (itemSize) => ({
        borderRadius: 15,
        width: itemSize,
        height: itemSize,
    }),
    heartIconContainer: {
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
    heartIcon: {
        padding: 10,
        color: 'red',
    },
    title: {
        width: '100%',
    },
});

export default AlbumCard;
