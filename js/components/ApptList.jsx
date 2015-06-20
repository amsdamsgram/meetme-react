/**
 * Created by idams on 6/19/15.
 */

'use strict'

import React from 'react';
import Appt from './Appt.jsx';

class ApptList extends React.Component{

    constructor(props){
        super(props);
    }

    render(){

        var listNode = this.props.apptList.map(function(appt){
            return (
                <Appt appt={appt} />
            )
        });

        return (
            <section id="appt-list">
                {listNode}
            </section>
        )

    }

};
ApptList.propTypes = {
    apptList: React.PropTypes.array
};
ApptList.defaultProps = {
    apptList:[]
};

export default ApptList;