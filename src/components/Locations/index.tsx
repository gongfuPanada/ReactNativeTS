/// <reference path="../../../typings/tsd.d.ts"/>

import React from "react-native";
const { StyleSheet, Text, View } = React;
const Button = require("react-native-button");
const Actions = require("react-native-router-flux").Actions;

import {default as LocationStore, LocationState} from "../../stores/LocationStore";
import LocationActions from "../../actions/LocationActions";


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


export class Locations extends React.Component<any, LocationState> {

    constructor(props?: any) {
        super(props);
        this.state = LocationStore.getState();
    }

    componentDidMount() {
        LocationStore.listen(this.onChange);
    }

    componentWillUnmount() {
        LocationStore.unlisten(this.onChange);
    }

    onChange(state: any) {
        this.setState(state);
    }

    render() {
        return (
            <View style={styles.container}>
                {this.state.locations.map(location => {
                    return (
                        <Text>{location.name}</Text>
                    );
                })}
                <Button style={styles.buttom} onPress={Actions.main}>
                    Back
                </Button>
            </View>
        );
    }
}
