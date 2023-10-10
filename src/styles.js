import { StyleSheet, Dimensions } from "react-native";
const {width} = Dimensions.get("window")

export default StyleSheet.create({

    container: {
                // flex: 1,
        // backgroundColor: '#2B1908',
        padding : 10 ,
        
        // margin: 10,


    },
    
    addInput: {
        borderColor: "orange",
        backgroundColor: "#fff",
        borderWidth : 1,
        paddingHorizontal: 5 ,
        borderRadius: 30,
        marginBottom: 25 ,
        
    }




})