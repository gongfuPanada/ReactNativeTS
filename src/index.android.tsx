/// <reference path="../typings/tsd.d.ts"/>

import React from "react-native";
const { StyleSheet, Text, View } = React;
var { Router, Route, Container, Actions, Animations, Schema } = require("react-native-router-flux");

import Main from "./components/Main/index.android";
import { Locations } from "./components/Locations/index";


const styles = StyleSheet.create({
    index: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: "#F5FCFF",
    },
});


export default class App extends React.Component<any, any> {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.index}/>
                <Router>
                    <Schema name="default" sceneConfig={Animations.FlatFloatFromRight}/>

                    <Route name="main" component={Main} initial={true} hideNavBar={true} title="Main"/>
                    <Route name="locations" component={Locations} title="Locations"/>
                </Router>
            </View>
        );
    }
}
