/**
 * Created by idams on 7/23/15.
 */

import React from 'react/addons';
import Appt from '../components/Appt.jsx';

var TestUtils = React.addons.TestUtils;

jest.dontMock('../components/Appt.jsx');

describe('Appt',() => {

    it('Appointment name',() => {
        var opt = {id:1, name:"appt-name",time:''};
        var appt = TestUtils.renderIntoDocument(
            <Appt appt={opt} />
        )

        var apptName = TestUtils.findRenderedDOMComponentWithClass(appt,'apptName');

        expect(apptName.getDOMNode().textContent).toEqual(opt.name);
    })
})
