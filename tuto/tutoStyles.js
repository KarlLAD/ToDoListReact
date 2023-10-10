import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        
        flex: 1,
        // backgroundColor: "#000",
        flexDirection: "row",
        
        alignItems: "center",

        justifyContent: "center",
        
        // flexDirection : "row-reverse" ,

        
    },

    box1: {
        width: 50,
        height: 50,
        backgroundColor: "yellow",
        flex: 1,
        margin: 0,
        marginRight: 50, 
        
   
    },
    box2: {
        width: 50,
        height: 50,
        backgroundColor: "blue",
        flex : 1 ,
        

    },
    box3: {
        width: 50,
        height: 50,
   backgroundColor : "green",

    },

    subContainer: {
        
        width: 350,
        height: 400,
        backgroundColor: "#fff",
        flexDirection: "row",
        // justifyContent: "space-between",

        alignItems: "center", 
        borderRadius: 30,

    },

    image: {
        flex: 1,
        // justifyContent: "center", 

     
    },

})