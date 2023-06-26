import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './components/Screens/HomeScreen/HomeScreen';
import LikedScreen from './components/Screens/LikedScreen/LikedScreen';
import DetailScreen from './components/Screens/DetailScreen/DetailScreen';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { resetStore } from './redux/actions';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function App() {

    // store.dispatch(resetStore());

    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="MainScreen"
                        component={MainScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name='DetailScreen'
                        component={DetailScreen}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>

    );
}

function MainScreen() {
    return (
        <Tab.Navigator
            initialRouteName="All images"
        >
            <Tab.Screen
                name="All images"
                component={HomeScreen}
                options={{
                    tabBarHideOnKeyboard: true,
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Favorites"
                component={LikedScreen}
                options={{
                    tabBarLabel: 'Favorites',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="heart" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>)
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default App;