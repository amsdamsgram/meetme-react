/**
 * Created by idams on 6/19/15.
 */

'use strict'

import React from 'react';
import ApptList from './ApptList.jsx';
import ApptStore from '../stores/ApptStore.js';
import ApptActions from '../actions/ApptActions.js';
import ApptConstants from '../constants/ApptConstants.js';
import ApptEdit from './ApptEdit.jsx';

function getState(fromLS){

    return {
        apptList: ApptStore.getAllAppts(fromLS),
        addMode: ApptStore.getAddMode()
    }

}

class HomePageContent extends React.Component{

    constructor(props){
        super(props);

        this.state = getState(true);

        this._onChange = this._onChange.bind(this);
        this._onClick = this._onClick.bind(this);
    }

    componentDidMount(){
        ApptStore.addEventListener(ApptConstants.CHANGE_EVENT,this._onChange);
    }
    componentWillUnmount(){
        ApptStore.removeEventListener(ApptConstants.CHANGE_EVENT,this._onChange);
    }

    _onChange(){
        this.setState(getState());
    }
    _onClick(){
        ApptActions.toggleAddMode(true);
    }

    render(){

        var addAppt = this.state.addMode ? <ApptEdit /> : null;

        return (
            <section className="row content">
                <a href="#" className="button btn-add-appt" onClick={this._onClick}>Add Appointment</a>
                {addAppt}
                <ApptList apptList={this.state.apptList} />
            </section>
        )

    }

};

export default HomePageContent;