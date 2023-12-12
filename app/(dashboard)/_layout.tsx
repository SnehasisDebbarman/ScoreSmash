import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs, Stack } from 'expo-router';
import { Pressable, Text, TouchableOpacity, useColorScheme } from 'react-native';
import { BlurView } from "expo-blur"
import Colors from '../../constants/Colors';
import { StyleSheet } from 'react-native';


export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    position: "absolute",
                    borderTopRightRadius: 20,
                    borderTopLeftRadius: 20,
                },
                tabBarButton: ({ children, ...rest }) => (
                    <TouchableOpacity {...rest}>
                        {children}
                    </TouchableOpacity>
                ),
                tabBarBackground: () => (
                    <BlurView intensity={80}
                        style={{
                            ...StyleSheet.absoluteFillObject,
                            borderTopRightRadius: 20,
                            borderTopLeftRadius: 20,
                            overflow: "hidden",
                            backgroundColor: "transparent"
                        }} />
                )
            }}
        />

    );
}
