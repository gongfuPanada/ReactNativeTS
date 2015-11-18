/// <reference path="../../typings/tsd.d.ts"/>

import Alt from "alt";


export default class AbstractActions implements AltJS.ActionsClass {
  constructor(alt:AltJS.Alt) { }

  dispatch: ( ...payload:Array<any>) => void;
}
