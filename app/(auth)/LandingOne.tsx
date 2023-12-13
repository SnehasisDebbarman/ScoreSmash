import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function LandingOne() {
    return (
        <View className="items-center justify-center w-screen h-full bg-blue-100 ">
            <View className="items-center justify-center w-1/2 p-2 bg-blue-400 rounded-lg">
                <Link
                    href="/(auth)/SignUp"
                    className="items-center justify-center w-full text-center "
                >
                    <Text className="text-lg font-bold text-center text-white">
                        SignUp
                    </Text>
                </Link>
            </View>
            <View className="items-center justify-center w-1/2 p-2 mt-2 bg-blue-400 rounded-lg">
                <Link
                    href="/(auth)/Login"
                    className="items-center justify-center w-full text-center "
                >
                    <Text className="text-lg font-bold text-center text-white">
                        Login
                    </Text>
                </Link>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({});
