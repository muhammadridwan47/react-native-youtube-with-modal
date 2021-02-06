import React from 'react'
import {Text } from 'react-native'
import ModalYoutube from './component';
export default function App() {
  const [status,setStatus] =  React.useState(false);
  return (
    <>
      <Text onPress={() => status == true ? setStatus(false) : setStatus(true)}>Click</Text>
        <ModalYoutube
            visible={status}
            apiKey="AIzaSyDVsEjZ8jNLMgzbQ1fljnSdidX_k6rYjpU"
            urlVideo="UUwOcIaAKRo"
            title={"Hello World"}
            onPress={() => setStatus(false)}
        />
    </>

  )
}
