import { View, StyleSheet } from "react-native";
import { Link, Stack } from "expo-router";

export default function NotFoundScreen(){
    return (
        <>
            <Stack.Screen options={{title: "404, Not found view"}} />
            <View>
                <Link href="/">
                    Go back to Home screen
                </Link>
            </View>
        </>
    );
}
