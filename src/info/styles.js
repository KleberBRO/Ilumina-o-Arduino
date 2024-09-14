import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    viewTotal:{
        height: "100%",
        width:"100%",
        backgroundColor: "#082B16"
    },
    container:{
        width: "100%",
    },
    title:{
        color:"#E0FFED",
        fontWeight:"bold",
        fontSize:30,
        alignSelf:"center"
    },
    atual:{
        width:"100%",
        flexDirection:"row",
        paddingVertical:15,
        justifyContent:"space-evenly",
    },
    texto:{
        color:"#E0FFED",
        fontWeight:"bold",
        fontSize:20,
    },
    dataContainer: {
        marginTop:100,
        alignItems:"center"
    },
    listContainer: {
        backgroundColor:"#DDFFEB",
        width:"80%",
        borderRadius:10,
        maxHeight:300,
        paddingBottom:8,
    },
    listItem: {
        flexDirection:"row",
        justifyContent:"space-evenly",
        borderBottomWidth:1,  
        borderColor:"#A0C7B2"
    },
    datas: {
        color:"#002810",
        fontWeight:"300",
        fontSize:20,
    },
    
});

export default styles