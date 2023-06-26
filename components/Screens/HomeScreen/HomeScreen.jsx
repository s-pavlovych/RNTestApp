import React, { useState, useEffect, useMemo } from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import useFetch from '../../../hooks/useFetch';
import AlbumCard from '../../Views/Cards/AlbumCard/AlbumCard';
import SearchView from '../../Views/SearchView/SearchView';

function HomeScreen({ navigation }) {
    const { data, isLoading, error } = useFetch('https://jsonplaceholder.typicode.com/photos?albumId=1');

    const [searchText, setSearchText] = useState('');

    const filteredData = useMemo(() => {
        if (searchText === '') {
            return data;
        } else {
            return data.filter(item => item.title.toLowerCase().includes(searchText.toLowerCase()));
        }
    }, [data, searchText]);

    const handleCardPress = item => () => {
        navigation.navigate('DetailScreen', {
            item: item,
        });
    };

    const handleSearch = text => {
        setSearchText(text);
    };

    return (
        <SafeAreaView style={styles.container}>
            {isLoading ? (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size='large' />
                </View>
            ) : error ? (
                <Text style={styles.errorText}>Something went wrong</Text>
            ) : (
                <View style={{ width: '100%' }}>
                    <View style={styles.searchContainer}>
                        <SearchView onSearch={handleSearch} />
                    </View>
                    {filteredData.length === 0 ? (
                        <View style={styles.emptyContainer}>
                            <Text style={styles.emptyText}>No items</Text>
                        </View>
                    ) : (
                        <FlatList
                            style={styles.flatList}
                            showsVerticalScrollIndicator={true}
                            numColumns={3}
                            data={filteredData}
                            renderItem={({ item }) => (
                                <AlbumCard item={item} handlePress={handleCardPress(item)} />
                            )}
                            columnWrapperStyle={styles.columnWrapperStyle}
                            contentContainerStyle={styles.contentContainerStyle}
                            keyExtractor={item => item?.id.toString()}
                            horizontal={false}
                        />
                    )}
                </View>
            )}
        </SafeAreaView>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText: {
        textAlign: 'center',
        marginTop: 10,
    },
    searchContainer: {
        padding: 10,
        width: '100%',
    },
    emptyContainer: {
        flex: 1,
        paddingTop: 100,
        alignItems: 'center',
    },
    emptyText: {
        fontSize: 16,
    },
    flatList: {
        padding: 10,
    },
    columnWrapperStyle: {
        display: 'flex',
        justifyContent: 'flex-start',
        gap: 5,
    },
    contentContainerStyle: {
        display: 'flex',
        gap: 5,
        alignItems: 'flex-start',
        justifyContent: 'space-evenly',
    },
});
