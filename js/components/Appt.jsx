/**
 * Created by idams on 6/19/15.
 */

'use strict'

import React from 'react';

class Appt extends React.Component{

    constructor(props){
        super(props);
    }

    render(){

        return (
            <div>
                <span>{this.props.name} - {this.props.date}</span>
                <a href="#" className="icon-cog"></a>
            </div>
        )

    }

};
Appt.propTypes = {
    name: React.PropTypes.string,
    date: React.PropTypes.object
};
Appt.defaultProps = {
    name: 'No Name',
    data: null
};

export default Appt;