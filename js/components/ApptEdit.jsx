/**
 * Created by idams on 6/20/15.
 */

'use strict'

import React from 'react';
import ApptActions from '../actions/ApptActions.js';
import TimePicker from './TimePicker.jsx';

class ApptEdit extends React.Component{

    constructor(props){
        super(props);

        this._onSubmit = this._onSubmit.bind(this);
        this._onCancel = this._onCancel.bind(this);
        this._onSelectChange = this._onSelectChange.bind(this);
    }

    componentWillMount(){
        this.timeValue = 0;
    }
    componentDidMount(){
        React.findDOMNode(this.refs.name).focus();
    }

    _onSubmit(e){
        e.preventDefault();

        var name = React.findDOMNode(this.refs.name).value.trim();

        ApptActions.create(name,this.timeValue);
    }
    _onCancel(){
        this.props.onCancel();
    }
    _onSelectChange(value){
        this.timeValue = value.trim();
    }

    render(){

        return (
            <form>
                <input type="text" placeholder="name" ref="name" />
                <TimePicker onChange={this._onSelectChange} />
                <input type="submit" value="Save" onClick={this._onSubmit} />
                <input type="button" value="Cancel" onClick={this._onCancel} />
            </form>
        )

    }

};
ApptEdit.propTypes = {
    appt: React.PropTypes.object
};
ApptEdit.defaultProps = {
    appt: {
        name: 'No Name',
        time: null
    }
};

export default ApptEdit;