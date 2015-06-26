/**
 * Created by idams on 6/21/15.
 */

'use strict'

import React from 'react';
import Utils from '../utils.js';

class TimePicker extends React.Component{

    constructor(props){
        super(props);

        this._onChange = this._onChange.bind(this);
    }

    _onChange(e){
        this.props.onChange(e.target.value.trim());
    }

    render(){

        var options = [<option key="-1" value="-1">--</option>];

        for(var i = 0; i < 24; i++){
            var time = Utils._timeToString(i);

            options.push(<option key={i} value={i}>{time}</option>)
        }

        return (
            <select onChange={this._onChange} value={this.props.time}>
                {options}
            </select>
        )

    }

};

export default TimePicker;