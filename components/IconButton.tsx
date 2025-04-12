import { Text, Pressable, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

type Props = {
    icon: keyof typeof MaterialIcons.glyphMap;
    label: string;
    onPress: () => void;
}

export default function IconButton({icon, label, onPress}: Props){
    return (
        
            <Pressable style={styles.IconButton} onPress={onPress}>
                <MaterialIcons name={icon} size={24} color="#fff" />
                <Text style={styles.text}>{label}</Text>
            </Pressable>
        
    );
}

const styles = StyleSheet.create({
    IconButton: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        marginTop: 12,
    }
})