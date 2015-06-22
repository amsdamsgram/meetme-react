/**
 * Created by idams on 6/20/15.
 */

'use strict'

import AppDispatcher from '../dispatcher/AppDispatcher.js';
import ApptConstants from '../constants/ApptConstants.js';

var ApptActions = {

    create(name,time,id){

        AppDispatcher.dispatch({
            actionType: ApptConstants.APPT_CREATE,
            name: name,
            time: time,
            id: id
        });

    },

    destroy(id){

        AppDispatcher.dispatch({
            actionType: ApptConstants.APPT_DESTROY,
            id: id
        });

    },

    toggleAddMode(mode){

        AppDispatcher.dispatch({
            actionType: ApptConstants.APPT_ADDMODE,
            mode: mode
        })

    },

    toggleEditMode(mode){

        AppDispatcher.dispatch({
            actionType: ApptConstants.APPT_EDITMODE,
            mode: mode
        })

    }

};

export default ApptActions;