/**
 * Created by idams on 6/19/15.
 */

'use strict'

import React from 'react';
import ApptActions from '../actions/ApptActions.js';

class Appt extends React.Component{

    constructor(props){
        super(props);

        this._deleteAppt = this._deleteAppt.bind(this);
        this._onClick = this._onClick.bind(this);
    }

    _deleteAppt(){
        ApptActions.destroy(this.props.appt.id);
    }
    _onClick(){
        console.log('click')
    }
    _toString(){

        var str = this.props.appt.name;

        str += this.props.appt.time !== 0 ? ' - '+this.props.appt.time : '';

        return str;

    }

    render(){

        return (
            <div key={this.props.appt.id}>
                <span onClick={this._onClick}>{this._toString()}</span>
                <a href="#" className="delete-btn" onClick={this._deleteAppt}>Delete</a>
            </div>
        )

    }

};
Appt.propTypes = {
    appt: React.PropTypes.object
};
Appt.defaultProps = {
    appt: {
        id: 0,
        name: 'No Name',
        time: null
    }
};

export default Appt;