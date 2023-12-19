import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Pressable, TouchableOpacity, Alert, SafeAreaView } from "react-native";
import { VictoryBar, VictoryChart, VictoryTheme, VictoryLine } from "victory-native";
import * as math from "mathjs"

// import nerdamer from "nerdamer/all"
const DATA = [
    { x: -9 },
    { x: -8 },
    { x: -7 },
    { x: -6 },
    { x: -5 },
    { x: -4 },
    { x: -3 },
    { x: -2 },
    { x: -1 },
    { x: 0 },
    { x: 1 },
    { x: 2 },
    { x: 3 },
    { x: 4 },
    { x: 5 },
    { x: 6 },
    { x: 7 },
    { x: 8 },
    { x: 9 },
]

const Timeline = () => {

    const [inputEquation, setInputEquation] = useState('x');
    const [serialized, setSerialized] = useState("x")
    const [result, setResult] = useState(null);



    const createTwoButtonAlert = () =>
        Alert.alert('Alert Title', 'My Alert Msg', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]);


    const convertToJavaScriptFunction = (x: number) => {
        try {
            const equation2 = math.compile(serialized);
            const result2 = equation2.evaluate({ x: x });
            return result2;
        } catch (error) {
            return "error";
        }

    };

    const maxDomain = () => {
        const arr = DATA.map((it) => {
            return convertToJavaScriptFunction(it.x)
        })

        return Math.max(...arr)
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{
                flex: 1,
                // justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#f5fcff"
            }}>
                <Text className="pt-4 text-lg font-bold">Enter Equation</Text>
                <View className="flex-row items-center justify-center">
                    <Text className="pr-2 font-black">Y =</Text>
                    <TextInput className="w-1/2 p-2 my-2 rounded-lg text-slate-900 bg-slate-300" onChangeText={(text) => setInputEquation(text.toLowerCase())} />
                </View>
                <TouchableOpacity className="px-5 py-2 text-white bg-blue-700 rounded-lg" onPress={() => {
                    setSerialized(inputEquation)
                }} >
                    <Text className="text-white">Calculate</Text>
                </TouchableOpacity>
                <VictoryChart animate={{ duration: 2000 }} theme={VictoryTheme.material}>
                    <VictoryLine
                        interpolation="natural"
                        animate={{
                            duration: 2000,
                        }}
                        data={DATA}

                        y={({ x }) => convertToJavaScriptFunction(x)} />
                </VictoryChart>


            </View>
        </SafeAreaView>
    );
};

export default Timeline;
