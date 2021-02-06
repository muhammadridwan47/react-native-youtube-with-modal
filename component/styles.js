import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width:"100%",
        height:"100%",
        position:'absolute',
        backgroundColor:'rgba(255,255,255,0)',
    },
    animated: (fadeAnim) => ({
        flex:1,
        opacity:fadeAnim,
        justifyContent:'center',
    }),
    modal:{ 
        position:'absolute',
        backgroundColor:'rgba(0,0,0,0.2)',
        width:'100%',
        height:'100%',
        justifyContent:'center',
        paddingHorizontal:20 
    },
    wrapperYoutube : {
        backgroundColor:'#fff',
        justifyContent:'center',
        borderRadius:10,
        paddingBottom:20,
        position:'relative'
    },
    title:{
        paddingVertical:10,
        textAlign:'center',
        fontSize:12,
    },
    close:{
        position:'absolute',
        backgroundColor:'red',
        width:16,
        height:16,
        borderRadius:8,
        top:10,
        right:10
    },
    youtube: { 
        alignSelf: 'stretch',
        height: 180,
    }
});

export default styles;
