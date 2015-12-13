/// <reference path="../../../typings/tsd.d.ts"/>

import React from "react-native";
const { StyleSheet, Text, View } = React;
const Button = require("react-native-button");
const Actions = require("react-native-router-flux").Actions;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
    },
    buttom: {
        margin: 10,
    },
});


interface State {
    locations: string[];
}

export class Locations extends React.Component<any, State> {

    constructor(props?: any) {
        super(props);
        this.state = {
            locations: ["Santiago, Chile"],
        };
    }

    render() {
        return (
            <View style={styles.container}>
                {this.state.locations.map((location, i) => <Text key={i}>{location}</Text>) }
                <Button style={styles.buttom} onPress={Actions.main}>
                    Back
                </Button>
            </View>
        );
    }
}
