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

        var appts = this.props.apptList;
        var listNode = [];

        for (var key in appts) {
            listNode.push(
                <Appt key={key} appt={appts[key]} />);
        }

        if( listNode.length === 0 ){
            listNode = <div>No appointments yet.</div>;
        }else{
            listNode.sort(function(a,b){
                return a.props.appt.time - b.props.appt.time <= 0 ? -1 : 1;
            })
        }

        return (
            <section id="apptList" className="large-8">
                {listNode}
            </section>
        )

    }

};
ApptList.propTypes = {
    apptList: React.PropTypes.object
};
ApptList.defaultProps = {
    apptList:{}
};

export default ApptList;