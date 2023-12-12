import React, { useState } from 'react'
import { Alert, StyleSheet, View } from 'react-native'
import { supabase } from '../lib/auth'
import { Button, Input, Overlay, Text } from 'react-native-elements'
import { Link, router } from 'expo-router';

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [Data, setData] = useState<any>([])

    async function signInWithEmail() {
        setLoading(true)
        const { error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        })
        if (error) {
            Alert.alert(error.message)
            setLoading(false)
            return;
        }
        router.push("/(dashboard)/home")
        setLoading(false)
    }

    async function signUpWithEmail() {
        setLoading(true)
        const {
            data: { session },
            error,
        } = await supabase.auth.signUp({
            email: email,
            password: password,
        })
        if (error) {
            Alert.alert(error.message)
            setLoading(false)
            return;
        }
        if (!session) {
            Alert.alert('Please check your inbox for email verification!')
            setLoading(false)
            return;
        }

        setLoading(false)
    }


    return (
        <View style={styles.container}>
            <View style={[styles.verticallySpaced, styles.mt20]}>
                {
                    Data.map((it: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined) => { return (<Text>{JSON.stringify(it)}</Text>) })
                }
                <Input
                    label="Email"
                    leftIcon={{ type: 'font-awesome', name: 'envelope' }}
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    placeholder="email@address.com"
                    autoCapitalize={'none'}
                />
            </View>
            <View style={styles.verticallySpaced}>
                <Input
                    label="Password"
                    leftIcon={{ type: 'font-awesome', name: 'lock' }}
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    secureTextEntry={true}
                    placeholder="Password"
                    autoCapitalize={'none'}
                />
            </View>
            <View style={[styles.verticallySpaced, styles.mt20]}>
                <Button title="Sign in" disabled={loading} onPress={() => signInWithEmail()} />
            </View>

            <Overlay isVisible={loading} onBackdropPress={() => setLoading(false)}>
                <Text>Loading....</Text>
            </Overlay>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        padding: 12,
    },
    verticallySpaced: {
        paddingTop: 4,
        paddingBottom: 4,
        alignSelf: 'stretch',
    },
    mt20: {
        marginTop: 20,
    },
})