import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const Task = (props) =>{


    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.sqaure}></View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circle}></View>
        </View>
    )
}

const styles = StyleSheet.create({

    item:{
        backgroundColor:"white",
        padding:15,
        borderRadius:10,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom:20,
    },
    itemLeft:{
        flexDirection: "row",
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    itemText:{
        maxWidth: "80%"
    },
    sqaure:{
        width:24,
        height:24,
        backgroundColor:"blue",
        opacity:0.4,
        borderRadius:5,
        marginRight:15,
    },
    circle:{
        width:12,
        height:12,
        borderColor:"blue",
        borderWidth: 1,
        borderRadius: 5,
  },
})

export default Task;