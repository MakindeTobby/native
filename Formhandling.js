import { useState } from "react";
import { StyleSheet, View, Text, Button, TextInput, Image, KeyboardAvoidingView, Platform } from "react-native";

export default function FormHandling() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let errors = {};
        if (!userName) errors.userName = "Username is required";
        if (!password) errors.password = "Password is required";

        setErrors(errors);
        return Object.keys(errors).length === 0;
    }

    const handleSubmit = () => {
        if (validateForm()) {
            console.log("Submitted", userName, password);
            setUserName("");
            setPassword("");
        }
    }

    return (
        <KeyboardAvoidingView style={styles.container} keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0} behavior="padding">
            <View style={styles.form}>
                <Image source={require("./assets/adaptive-icon.png")} style={styles.image} />
                <Text style={styles.label}>Username</Text>
                <TextInput style={styles.input} placeholder="Enter your username"
                    value={userName} onChangeText={setUserName}
                />
                {
                    errors.userName ? <Text style={styles.errorText}>{errors.userName}</Text> : null
                }
                <Text style={styles.label}>Password</Text>
                <TextInput style={styles.input}
                    placeholder="Enter your password" secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
                {
                    errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null
                }

                <Button title="Login" onPress={handleSubmit} />


            </View>

        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 20,
        backgroundColor: "#f5f5f5"

    },
    form: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        fontWeight: "bold"
    },
    input: {
        height: 40,
        borderColor: "#ddd",
        borderWidth: 1,
        marginBottom: 15,
        padding: 10,
        borderRadius: 5
    },
    image: {
        width: 100,
        height: 100,
        alignSelf: "center",
        marginBottom: 20
    },
    errorText: {
        color: "red",
        marginBottom: 12
    }

});
