/**
 * Created by idams on 6/20/15.
 */

'use strict'

import AppDispatcher from '../dispatcher/AppDispatcher.js';
import ApptConstants from '../constants/ApptConstants.js';

var ApptActions = {

    create(name,time){

        AppDispatcher.dispatch({
            actionType: ApptConstants.APPT_CREATE,
            name: name,
            time: time
        });

    },

    destroy(id){

        AppDispatcher.dispatch({
            actionType: ApptConstants.APPT_DESTROY,
            id: id
        });

    }

};

export default ApptActions;