import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Task from "./components/Task";
export default function App() {
  const currentDate = new Date();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = monthNames[currentDate.getMonth()];
  let day = currentDate.getDate();
  let year = currentDate.getFullYear();
  let formattedDate = `${month} ${day} ${year}`;
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const handleAddTask = () => {
    Keyboard.dismiss();

    setTaskItems([...taskItems, task]);
    setTask(null);
  };

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.taskWrapper}>
          <Text style={styles.sectionTitle}>Today's Tasks</Text>
          <Text style={styles.sectionDate}>{formattedDate}</Text>
          <View style={styles.items}>
            {/* Tasks */}
            {taskItems.map((item, index) => {
              return (
                <TouchableOpacity onPress={() => completeTask(index)}>
                  <Task key={index} text={item} />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* Write a task */}

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.writeTaskWrapper}
        >
          <TextInput
            style={styles.input}
            placeholder={"Write a task"}
            placeholderTextColor="#C1C1C1"
            
            value={task}
            onChangeText={(text) => setTask(text)}
          />
          
          <TouchableOpacity onPress={() => handleAddTask()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141414",
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  sectionDate: {
    color: "gray",
    fontSize: 15,
    
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 250,
    backgroundColor: "#272727",
    borderRadius: 60,
    borderColor: "#272727",
    borderWidth: 1,
    fontWeight:"bold",
    color:"white"
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#272727",
    borderRadius: 60,
    borderColor: "#272727",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  addText: {
    fontSize:30,
    color:"#D2D0D0"

  },
});
