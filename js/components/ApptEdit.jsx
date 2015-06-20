/**
 * Created by idams on 6/20/15.
 */

import React from 'react';
import ApptActions from '../actions/ApptActions.js';

class ApptEdit extends React.Component{

    constructor(props){
        super(props);

        this._onSubmit = this._onSubmit.bind(this);
        this._onCancel = this._onCancel.bind(this);
    }

    _onSubmit(e){

        e.preventDefault();
        var name = React.findDOMNode(this.refs.name).value.trim();
        var date = null;

        ApptActions.create(name,date);
    }
    _onCancel(){
        this.props.onCancel(this);
    }

    render(){

        return (
            <form>
                <input type="text" placeholder="name" ref="name" />
                <input type="datetime" placeholder="date" ref="date" />
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
        date: null
    }
};

export default ApptEdit;