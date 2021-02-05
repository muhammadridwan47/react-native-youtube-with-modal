import React,{useRef,useEffect} from 'react'
import { View, Text,Animated } from 'react-native'
import YouTube from 'react-native-youtube'
export default function App() {
  const fadeAnim = useRef(new Animated.Value(0)).current  // Initial 
  const [status,setStatus] =  React.useState(false);
  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 6000,
      }
    ).start();
  }, [fadeAnim])

  return (
    <View style={{flex:1}} >
      <Text onPress={() => status == true ? setStatus(false) : setStatus(true)}>Click</Text>

      {
        status && 
            <Animated.View                 // Special animatable View
            style={{
              flex:1,
              opacity: fadeAnim,         // Bind opacity to animated value
            }}
          >
            <View style={{ flex: 1,backgroundColor:"rgba(0,0,0,0.3)",position:"absolute",width:"100%",height:"100%",justifyContent:"center",paddingHorizontal:20 }}>
                <View style={{height:260,backgroundColor:"#fff",justifyContent:'center',borderRadius:10}}>
                  <YouTube
                      videoId="UUwOcIaAKRo"   // The YouTube video ID
                      play={true}             // control playback of video with true/false
                      loop={true}             // control whether the video should loop when ended
                      apiKey="AIzaSyDVsEjZ8jNLMgzbQ1fljnSdidX_k6rYjpU"
                      style={{ alignSelf: 'stretch', height: 180 }}
                      fullscreen={false} // control whether the video should play in fullscreen or inline
                    />
                  </View>
            </View>
      </Animated.View>
      }

    </View>
  )
}
