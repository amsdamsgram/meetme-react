/**
 * Created by idams on 6/20/15.
 */

'use strict'

import React from 'react';
import ApptStore from '../stores/ApptStore.js';
import ApptActions from '../actions/ApptActions.js';
import TimePicker from './TimePicker.jsx';

var _errorNameEmptyMessage = 'Name is requried';

function getState(id){
    var name = '',
        time = '';

    var appt = ApptStore.getApptById(id);

    if( appt ){
        name = appt.name;
        time = appt.time;
    }

    return {
        name: name,
        time: time,
        errorNameEmpty: false
    }

}

class ApptEdit extends React.Component{

    constructor(props){
        super(props);

        this.state = getState(this.props.id);

        this._onSubmit = this._onSubmit.bind(this);
        this._onCancel = this._onCancel.bind(this);
        this._onTimeChange = this._onTimeChange.bind(this);
        this._onNameChange = this._onNameChange.bind(this);
    }

    componentWillMount(){
        this.isEdit = this.props.id ? true : false;
    }

    _onSubmit(e){
        e.preventDefault();

        if( this.state.name.length === 0 ){
            this.setState({errorNameEmpty:true});
            return;
        }else{
            this.setState({errorNameEmpty:false});
            ApptActions.create(this.state.name,this.state.time,this.props.id);
        }
    }
    _onNameChange(e){
        var value = e.target.value.trim();
        this.setState({name:value,errorNameEmpty:false});
    }
    _onTimeChange(value){
        this.setState({time:value})
    }
    _onCancel(){
        if( this.isEdit ){
            ApptActions.toggleEditMode(false);
        }else{
            ApptActions.toggleAddMode(false);
        }
    }

    render(){

        var errorMessage = this.state.errorNameEmpty ? <small className="error">{_errorNameEmptyMessage}</small> : '';
        var panelClass = this.isEdit ? 'panel large-12' : 'panel large-8';

        return (
            <div className={panelClass}>
                <form>
                    <input
                        type="text" placeholder="name"
                        value={this.state.name}
                        onChange={this._onNameChange}
                        autoFocus={true}
                    />
                    {errorMessage}
                    <TimePicker onChange={this._onTimeChange} time={this.state.time} />
                    <input type="submit" className="button success" value="Save" onClick={this._onSubmit} />
                    <input type="button" className="button secondary" value="Cancel" onClick={this._onCancel} />
                </form>
            </div>
        )

    }

};
ApptEdit.propTypes = {
    id: React.PropTypes.string
};
ApptEdit.defaultProps = {
    id:null
};

export default ApptEdit;