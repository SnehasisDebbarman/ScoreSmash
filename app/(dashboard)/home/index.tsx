import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import * as LocalAuthentication from 'expo-local-authentication';
import Header from '../../../components/Header';
import { Link, Stack } from 'expo-router';

const Home = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Stack.Screen
                options={{
                    // https://reactnavigation.org/docs/headers#setting-the-header-title
                    title: 'Home',
                    // https://reactnavigation.org/docs/headers#adjusting-header-styles
                    headerStyle: { backgroundColor: '#f4411e' },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    // https://reactnavigation.org/docs/headers#replacing-the-title-with-a-custom-component
                    headerTitle: props => <View {...props}><Text>Go to Details</Text></View>,
                }}
            />
            <Text>Home Screen</Text>
            <Link href={{ pathname: "./Profile", params: { name: 'profile' } }}><Text>Go to Details</Text></Link>
        </View>
    )
}

export default Home