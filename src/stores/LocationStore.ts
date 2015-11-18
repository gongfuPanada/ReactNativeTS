/// <reference path="../../typings/tsd.d.ts"/>

import Alt from "alt";

import alt from "../alt";
import AbstractStoreModel from "./AbstractStoreModel";
import LocationActions from "../actions/LocationActions";


export class Location {
    constructor(public id?: number, public name?: string) { }
}


export interface LocationState {
    locations: Location[];
}


class LocationStore extends AbstractStoreModel<LocationState> implements LocationState {
    public locations: Location[];

    constructor() {
        super();
        this.locations = [ new Location(0, "Santiago, Chile") ];

        this.bindListeners({
            handleUpdateLocations: LocationActions.updateLocations
        });
    }

    handleUpdateLocations(locations: Location[]) {
        this.locations = locations;
    }
}


export default alt.createStore<LocationState>(LocationStore);
