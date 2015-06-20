/**
 * Created by idams on 6/20/15.
 */

import AppDispatcher from '../dispatcher/AppDispatcher.js';
import ApptConstants from '../constants/ApptConstants.js';

var ApptActions = {

    create(name,date){

        AppDispatcher.dispatch({
            actionType: ApptConstants.APPT_CREATE,
            name: name,
            date: date
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