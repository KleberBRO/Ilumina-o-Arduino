import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
   viewStyle:{
        height: "100%",
        width:"100%",
        backgroundColor: "#082B16"
   },
   containerStyle:{
        width:"100%",
        flexDirection:"row",
        paddingVertical:15,
        justifyContent:"space-evenly",
   },
   buttons:{
        backgroundColor:"#50FF96",
        padding:10,
        width:"40%",
        borderRadius:20
   },
   activeButton:{
     color:"#002810"
   },
   textButtom:{
        color:"#fff",
        textAlign:"center",
        fontWeight:"bold",
        fontSize:20,
   },
});

export default styles