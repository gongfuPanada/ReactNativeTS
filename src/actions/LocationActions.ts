/// <reference path="../../typings/tsd.d.ts"/>

import Alt from "alt";

import alt from "../alt";
import AbstractActions from "./AbstractActions";


interface Actions {
    updateLocations(locations: Location[]): void;
}


class LocationActions extends AbstractActions implements Actions {
    updateLocations(locations: Location[]) {
        this.dispatch(locations);
    }
}


export default alt.createActions<Actions>(LocationActions);
