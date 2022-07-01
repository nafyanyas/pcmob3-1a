import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function BlockRGB(props) {
 return (
   <View
     style={{
       backgroundColor: `rgb(${props.red}, ${props.green}, ${props.blue})`,
       padding: 60,
       width: "100%",
     }}
   ></View>
 );
}


