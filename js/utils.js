/**
 * Created by idams on 6/26/15.
 */

'use strict';

var Utils = {};

Utils._timeToString = function(time){

    var abbr = time < 12 ? ' AM' : ' PM';
    var value = time % 12 === 0 ? 12 : time % 12;

    return value.toFixed(2)+abbr;

}

export default Utils;