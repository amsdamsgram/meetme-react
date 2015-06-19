/**
 * Created by idams on 6/19/15.
 */

'use strict'

import React from 'react';
import ApptList from './ApptList.jsx';

class HomePageContent extends React.Component{

    constructor(props){
        super(props);
    }

    render(){

        return (
            <section className="row content">
                <a href="#" className="button btn-add-appt">Add Appointment</a>
                <ApptList />
            </section>
        )

    }

};

export default HomePageContent;