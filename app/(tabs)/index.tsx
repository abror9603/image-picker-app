import { View, Text, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { type ImageSource } from 'expo-image';
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";
import CircleButton from "@/components/CircleButton";
import IconButton from "@/components/IconButton";
import EmojiPicker from "@/components/EmojiPicker";
import EmojiList from '@/components/EmojiList';
import EmojiSticker from '@/components/EmojiSticker';
const PlaceholderImage = require("@/assets/images/icon.png");

export default function Index(){
    const [selectedImage, setSelectedImage] = useState<String|undefined>(undefined);
    const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    const [pickedEmoji, setPickedEmoji] = useState<ImageSource | undefined>(undefined);
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

    const onReset = () => {
        setShowAppOptions(false);
    }

    const onAddSticker = () => {
        setIsModalVisible(true);
        
    }

    const onModalClose = () => {
        setIsModalVisible(false);
    }

    const onSaveImageAsync = async () => {

    }

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage}/>
                {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />}
            </View>
            {showAppOptions ? (
                <View style={styles.optionsContainer}>
                    <View style={styles.optionsRow}>
                        <IconButton icon="refresh" label="Refresh" onPress={onReset} />
                        <CircleButton onPress={onAddSticker}/>
                        <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
                    </View>
                </View>
            ) : (
                <View style={styles.footerContainer}>
                <Button theme="primary" label={"Choose a photo"} onPress={PickImageAsync} />
                <Button label={"Use this photo"} onPress={() => setShowAppOptions(true)}/>
                </View>
            )}
            <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
                <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
            </EmojiPicker>
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
    },
    optionsContainer: {
        position: 'absolute',
        bottom: 80,
      },
    optionsRow: {
        alignItems: 'center',
        flexDirection: 'row',
    },
});