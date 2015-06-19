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

        var listNode = this.props.list.map(function(appt){
            return (
                <Appt />
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
    list: React.PropTypes.array
};
ApptList.defaultProps = {
    list:[]
};

export default ApptList;