/**
 * Created by idams on 6/19/15.
 */

'use strict'

import React from 'react';
import Header from './Header.jsx';
import HomePageContent from './HomePageContent.jsx';

class HomePage extends React.Component{
    
    constructor(props){
        super(props);
    }

    render(){

        return (
            <div id="homepage">
                <Header />
                <HomePageContent />
            </div>
        )

    }

}

export default HomePage;