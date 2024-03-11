import { useState } from 'react';
import { Platform, SafeAreaView, StyleSheet, StatusBar, TextInput, Text, Switch, View } from 'react-native';
export default function Forms() {

    const [name, setName] = useState("");
    const [isDarkMode, setIsDarkMode] = useState(false);



    return (
        <SafeAreaView style={styles.container}>
            <TextInput style={styles.input} value={name} onChangeText={setName}
                placeholder='Enter text here'
                // secureTextEntry
                // keyboardType='numeric'
                autoCorrect={false}
                autoCapitalize='none'
            />
            <Text style={styles.text}>My name is {name}</Text>

            <TextInput
                style={[styles.input, styles.multilineText]}
                placeholder='Message here'
                multiline
            />
            <View style={styles.switchContainer}>
                <Text style={styles.text}>{isDarkMode ? "Dark Mode" : "Light Mode"}</Text>
                <Switch value={isDarkMode} onValueChange={() => setIsDarkMode(!isDarkMode)}
                    trackColor={{ false: "#767577", true: "lightblue" }}
                    thumbColor="#f4f3f4"

                />

            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        paddingTop: StatusBar.currentHeight

    },
    input: {
        height: 40,
        margin: 12,
        padding: 10,
        borderWidth: 1
    },
    text: {
        fontSize: 24,
        textAlign: "center"
    },
    multilineText: {
        minHeight: 100,
        textAlignVertical: "top"
    },
    switchContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"

    }


});
