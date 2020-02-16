import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import AddContact from './components/AddContact';
import List from './components/List';
import Modal from './components/Modal'

function Routes() {
        return (
            <>
               <Route exact path="/list" component={List}/>
               <Route exact path="/">
                   <AddContact/>
                   <List/>
               </Route> 
               <Route exact path="/edit" component ={Modal}/>
            </>
        );
    
}

export default Routes;