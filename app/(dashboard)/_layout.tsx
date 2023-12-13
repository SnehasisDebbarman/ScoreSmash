import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs, Stack } from 'expo-router';
import { Pressable, Text, TouchableOpacity, View, useColorScheme } from 'react-native';
import { BlurView } from "expo-blur"
import Colors from '../../constants/Colors';
import { StyleSheet } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';

const IconTags: any = {
    home: {
        activeIconFamily: Ionicons,
        disabledIconFamily: Ionicons,
        activeIconName: "home",
        disabledIconName: "home-outline",
        label: "Home",
    },
    Profile: {
        activeIconFamily: Ionicons,
        disabledIconFamily: Ionicons,
        activeIconName: "person-circle",
        disabledIconName: "person-circle-outline",
        label: "Profile",
    },
    Timeline: {
        activeIconFamily: Ionicons,
        disabledIconFamily: Ionicons,
        activeIconName: "ios-file-tray-stacked",
        disabledIconName: "ios-file-tray-stacked-outline",
        label: "Timeline",
    },
    Search: {
        activeIconFamily: Ionicons,
        disabledIconFamily: Ionicons,
        activeIconName: "search",
        disabledIconName: "search",
        label: "Search",
    }
}

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={({ route }) => ({
                // headerShown: false,
                tabBarStyle: {
                    position: "absolute",
                    borderTopRightRadius: 20,
                    borderTopLeftRadius: 20,
                    height: 120,

                },
                tabBarIcon: ({ focused, color, size }) => {
                    const TabInfo = IconTags[route.name] ?? IconTags["home"];
                    const TabIcon = focused ? TabInfo.activeIconFamily : TabInfo.disabledIconFamily;
                    const IconName = focused ? TabInfo.activeIconName : TabInfo.disabledIconName
                    return (<>
                        <TabIcon name={IconName} size={size} color={color} />
                        <Text className='p-1 pt-2 font-thin' style={{
                            color,
                            fontWeight: focused ? '500' : '400'
                        }}>{TabInfo.label}</Text>
                    </>)
                },
                tabBarButton: ({ children, ...rest }) => (

                    <TouchableOpacity {...rest} >
                        {children}
                    </TouchableOpacity>


                ),
                tabBarLabel: () => (<></>),
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
            })}
        >
            <Tabs.Screen
                name="index"
                options={{

                    href: null,
                }}

            />
        </Tabs>

    );
}
