import React from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';
import AlbumCard from '../../Views/Cards/AlbumCard/AlbumCard';

function LikedScreen({ navigation }) {
    const likedPhotos = useSelector((state) => state.galleryReducer.likedPhotos);
    const handleCardPress = (item) => () => {
        navigation.navigate('DetailScreen', {
            item: item,
        });
    };

    return (
        <View style={styles.container}>
            {likedPhotos.length === 0 ? (
                <Text>No liked photos</Text>
            ) : (
                <FlatList
                    style={styles.list}
                    showsVerticalScrollIndicator={true}
                    numColumns={3}
                    columnWrapperStyle={styles.columnWrapperStyle}
                    data={likedPhotos}
                    renderItem={({ item }) => (
                        <AlbumCard
                            item={item}
                            handlePress={handleCardPress(item)}
                        />
                    )}
                    keyExtractor={(item) => item?.id}
                    horizontal={false}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    columnWrapperStyle: {
        display: "flex",
        justifyContent: "flex-start",
        gap: 5,
    },
    container: {
        paddingTop: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    list: {
        flex: 1,
        width: '100%',
        paddingLeft: 10,
        alignContent: "center",
    },
});

export default LikedScreen;