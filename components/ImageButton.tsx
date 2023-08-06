import { TouchableOpacity, ImageStyle, StyleProp, ViewStyle } from "react-native";
import { Image } from 'expo-image';
export default function ImageButton ({ onPress, src, imageStyle, btnStyle,arialabel }: { onPress: any, src: string, btnStyle: StyleProp<ViewStyle>,arialabel:string,imageStyle:ImageStyle}) {
    return (
        <TouchableOpacity onPress={onPress}  style={btnStyle}>
            <Image
                source={src} // Update the path to your button image
                style={imageStyle}
                accessibilityLabel={arialabel}
            />
        </TouchableOpacity>
    );
};