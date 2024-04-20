import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const Task = (props) => {
  // Get the current date
  let currentDate = new Date();

  // Get hours and minutes
  let hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();

  // Convert hours to 12-hour format
  let ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // 12-hour clock, so 0 becomes 12

  // Add leading zero to minutes if necessary
  minutes = minutes < 10 ? "0" + minutes : minutes;

  // Format the time
  let formattedTime = `${hours}:${minutes} ${ampm}`;

  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.circle}></View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View>
        <Text style={styles.sqaure}>{formattedTime}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#272727",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  itemText: {
    maxWidth: "80%",
    color: "#DEDEDE",
  },
  sqaure: {
    color:"#D2D0D0"
  },
  circle: {
    width: 12,
    height: 12,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 15,
  },
});

export default Task;
