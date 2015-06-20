/**
 * Created by idams on 6/19/15.
 */

'use strict'

import React from 'react';
import ApptList from './ApptList.jsx';
import ApptStore from '../stores/ApptStore.js';
import ApptEdit from './ApptEdit.jsx';

function getState(){

    return {
        apptList: ApptStore.getAll(),
        addMode: false
    }

}

class HomePageContent extends React.Component{

    constructor(props){
        super(props);

        this.state = getState();

        this._onCancel = this._onCancel.bind(this);
        this._onChange = this._onChange.bind(this);
        this._onClick = this._onClick.bind(this);
    }

    componentDidMount(){
        ApptStore.addChangeListener(this._onChange);
    }
    componentWillUnmount(){
        ApptStore.removeChangeListener(this._onChange);
    }

    _onChange(){
        this.setState(getState());
    }
    _onClick(){
        this.setState({addMode:true});
    }
    _onCancel(){
        this.setState({addMode:false});
    }

    render(){

        var addAppt = this.state.addMode ? <ApptEdit onCancel={this._onCancel} /> : null;

        return (
            <section className="row content">
                <a href="#" className="button btn-add-appt" onClick={this._onClick}>Add Appointment</a>
                {addAppt}
                <ApptList
                    apptList={this.state.apptList}
                    addMode={this.state.addMode} />
            </section>
        )

    }

};
ApptEdit.propTypes = {
    addMode: React.PropTypes.bool
};
ApptEdit.defaultProps = {
    addMode: false
};

export default HomePageContent;