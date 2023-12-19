import * as LocalAuthentication from "expo-local-authentication";
import { Link, Stack } from "expo-router";
import React from "react";
import { View, Text, ScrollView, Image } from "react-native";

import Header from "../../../components/Header";
import { SafeAreaView } from "react-native";
import { FlashList } from "@shopify/flash-list";

const DATA = [
    {
        title: "https://images.unsplash.com/photo-1579546929662-711aa81148cf?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2629&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
];

const Home = () => {
    return (
        <View style={{ flex: 1, }}>
            <View className="w-full h-full">
                <FlashList
                    className="flex-auto w-screen"
                    data={DATA}
                    ListHeaderComponent={() => <View className="h-20"></View>}
                    renderItem={({ item }) =>
                        <View className="p-5 rounded-xl">
                            <Image source={{ uri: item.title }} className="w-full rounded-lg h-60" />
                        </View>}
                    estimatedItemSize={200}
                />

            </View>

        </View>
    );
};

export default Home;
