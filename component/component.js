import React,{useRef,useEffect} from 'react';
import { View,Animated,Text, TouchableOpacity } from 'react-native';
import YouTube from 'react-native-youtube';
import styles from './styles';
export default function ModalYoutube({visible,urlVideo,apiKey,title,onPress}) {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    useEffect(() => {
      Animated.timing(
        fadeAnim,
        {
          toValue: 1,
          duration: 1000,
        }
      ).start();
    },[fadeAnim]);
    return (
        <>
           {
                visible && 
                <View style={styles.container} >
                    <Animated.View style={styles.animated(fadeAnim)}>
                        <View style={styles.modal}>
                            <View style={styles.wrapperYoutube}>
                                <Text style={styles.title}>{title}</Text>
                                <TouchableOpacity onPress={onPress} style={styles.close}>

                                </TouchableOpacity>
                                <YouTube
                                    videoId={urlVideo}  
                                    play={true}            
                                    loop={true}           
                                    apiKey={apiKey}
                                    style={styles.youtube}
                                />
                            </View>
                        </View>
                    </Animated.View>
                </View>
           }
      </>
    )
}
