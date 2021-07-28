import React, { useState } from 'react'
import { StyleSheet, StatusBar, ActivityIndicator, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import { auth } from '../firebase'

const SignUpScreen = ({ navigation }) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false);

    const handleSignUp = async () => {
        await setLoading(!loading);
        await auth.createUserWithEmailAndPassword(email, password)
        .then( async (authUser) => {
          await authUser.user.updateProfile({
            displayName: name,
            photoURL: 100000
          });
          await addUser()
          await setName('')
          await setEmail('')
          await setPassword('')
          await setLoading(loading);
          await navigation.navigate("Main")
        })
        .catch(async (error) => {
            await setLoading(loading)
            await setError(error.message)
        }
        );
    }

    const SignIn = () => {
        navigation.navigate("SignIn")
    }
 

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={{width: 300}}>
            <Text style={styles.greeting}>
                Sign Up to get started!
            </Text>

            <View style={styles.errorMessage}>
                {error && <Text style={styles.error}>{error}</Text>}
            </View>

            <View style={styles.form}>
                <View style={{marginTop: 32}}>
                    <Text style={styles.inputTitle}> 📛  Full Names</Text>
                    <TextInput style={styles.input} autoCapitalize="none" value={name} onChangeText={(text) => setName(text)}></TextInput>
                </View>

                <View style={{marginTop: 32}}>
                    <Text style={styles.inputTitle}> 📧  Email Address</Text>
                    <TextInput style={styles.input} autoCapitalize="none" value={email} onChangeText={(text) => setEmail(text)}></TextInput>
                </View>

                <View style={{marginTop: 32}}>
                    <Text style={styles.inputTitle}> 🔑  Password</Text>
                    <TextInput style={styles.input} secureTextEntry autoCapitalize="none" value={password} onChangeText={(text) => setPassword(text)}></TextInput>
                </View>
            </View>

            <TouchableOpacity onPress={handleSignUp} style={styles.button}>
            {loading ? <ActivityIndicator color="#ffffff" size="small" /> : <Text style={{color: "#FFF", fontWeight: "500"}}>Sign Up 😃</Text> }
            </TouchableOpacity>

            <TouchableOpacity onPress={SignIn} style={{alignSelf: "center", marginTop: 32}}>
                    <Text style={{color: "#FFF", fontSize: 13}}>
                        Already have an account? 
                        <Text style={{fontWeight: "500", color: "#E9446A"}}>
                            Sign In
                        </Text> 
                    </Text>
            </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default SignUpScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#0E2A47",
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    greeting: {
        marginTop: 40,
        fontSize: 18,
        fontWeight: "400",
        textAlign: "center",
        color: "#FFF"
    },
    errorMessage: {
        height: 72,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 30
    },
    form: {
        marginBottom: 48,
        marginHorizontal: 30
    },
    inputTitle: {
        color: "#FFF",
        fontSize: 10,
        textTransform: "uppercase"
    },
    input: {
        borderBottomColor: "#FFF",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "#FFF"
    },
    button: {
        marginHorizontal: 30,
        backgroundColor: "#E9446A",
        borderRadius: 4,
        height: 52,
        alignItems: "center",
        justifyContent: "center"
    },
    error: {
        color: "#e9446A",
        fontSize: 13,
        fontWeight: "600",
        textAlign: 'center'
    }
})