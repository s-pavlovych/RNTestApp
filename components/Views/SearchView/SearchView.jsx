import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SearchView = ({ onSearch }) => {
    const [searchText, setSearchText] = useState('');

    const handleSearch = (text) => {
        setSearchText(text);
        onSearch(text);
    };

    return (
        <View style={styles.container}>
            <TextInput
                keyboardType='default'
                style={styles.input}
                placeholder="Search item"
                value={searchText}
                onChangeText={handleSearch}
            />
            <MaterialCommunityIcons
                size={30}
                style={styles.icon}
                name={'magnify'}
                onPress={() => handleSearch(searchText)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        flexDirection: "row",
        backgroundColor: 'white',
        borderRadius: 50,
        justifyContent: "space-between"
    },
    input: {
        width: "90%",
        fontSize: 20
    },
    icon: {
        color: 'black',
    }
});

export default SearchView;