/**
 * Created by idams on 6/19/15.
 */

'use strict'

import React from 'react';

class Appt extends React.Component{

    constructor(props){
        super(props);
    }

    _toString(){

        var str = this.props.appt.name;

        str += this.props.appt.date ? ' - '+this.props.appt.date : '';

        return str;

    }

    render(){

        return (
            <div>
                <span>{this._toString()}</span>
                <a href="#" className="delete-btn">Delete</a>
            </div>
        )

    }

};
Appt.propTypes = {
    appt: React.PropTypes.object
};
Appt.defaultProps = {
    appt: {
        name: 'No Name',
        date: null
    }
};

export default Appt;