/**
 * Created by idams on 6/21/15.
 */

'use strict'

import React from 'react';

class TimePicker extends React.Component{

    constructor(props){
        super(props);

        this._onChange = this._onChange.bind(this);
    }

    _onChange(e){
        this.props.onChange(e.target.value.trim());
    }

    render(){

        var options = [<option key="-1" value="0">--</option>];

        for(var i = 0; i < 24; i++){
            var abbr = i < 12 ? ' AM' : ' PM';
            var value = i % 12 === 0 ? 12 : i % 12;
            var time = value.toFixed(2)+abbr;

            options.push(<option key={i} value={time}>{time}</option>)
        }

        return (
            <select onChange={this._onChange} value={this.props.time}>
                {options}
            </select>
        )

    }

};

export default TimePicker;