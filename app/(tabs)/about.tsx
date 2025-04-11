import { View, StyleSheet, Text } from "react-native";

export default function About(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Salom About saxifa</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "blue",
    },
    text:{
        color:"red"
    }
})