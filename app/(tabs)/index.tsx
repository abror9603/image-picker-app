import { View, Text, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";
const PlaceholderImage = require("@/assets/images/icon.png");

export default function Index(){
    const [selectedImage, setSelectedImage] = useState<String|undefined>(undefined);
    const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
    const PickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            quality: 1,
            // videoQuality: 1
        })

        if(!result.canceled){
            // console.log(result)
            setSelectedImage(result.assets[0].uri)
            setShowAppOptions(true);
        }else{
            alert("Siz faile tanladingiz!")
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage}/>
            </View>
            {showAppOptions ? (
                <View />
            ) : (
                <View style={styles.footerContainer}>
                <Button theme="primary" label={"Choose a photo"} onPress={PickImageAsync} />
                <Button label={"Use this photo"} onPress={() => setShowAppOptions(true)}/>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#25292e",
        alignItems: "center",
        // justifyContent: "center"
    },
    imageContainer: {
        flex: 1
    },
    footerContainer:{
        flex: 1 / 3,
        alignItems: 'center',
    }
});