/**
 * Created by idams on 6/20/15.
 */

'use strict'

import AppDispatcher from '../dispatcher/AppDispatcher.js';
import ApptConstants from '../constants/ApptConstants.js';
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var _appts = {};
var _addMode = false;
var _editMode = false;
var _ls = window.localStorage;
var _lsSupport = false;

var LSKEY = 'meetme';

function setItemLS(item){
    if( _lsSupport ) _ls.setItem(LSKEY,JSON.stringify(item));
}

function getItemLS(){
    return JSON.parse(_ls.getItem(LSKEY)) || {};
}

function createAppt(name,time,id){

    var id = id || 'id_'+ (Date.now() + Math.floor(Math.random() * 1000)).toString();

    _appts[id] = {
        id: id,
        name: name,
        time: time
    }

    setItemLS(_appts);

    _addMode = _editMode = false;
}

function destroy(id){
    delete _appts[id];

    setItemLS(_appts);
}

var ApptStore = assign({},EventEmitter.prototype,{

    getApptById(id){
      return _appts[id];
    },
    getAllAppts(fromLS){
        if( fromLS ) this.initAppts();

        return _appts;
    },
    initAppts(){
        if( 'localStorage' in window && window.localStorage !== null ){
            _lsSupport = true;
            _appts = getItemLS();
        }
    },
    getAddMode(){
        return _addMode;
    },
    getEditMode(){
        return _editMode;
    },

    emitEvent(eventName){
        this.emit(eventName);
    },

    addEventListener(eventName,callback){
        this.on(eventName,callback);
    },

    removeEventListener(eventName,callback){
        this.removeListener(eventName,callback);
    },

    dispatcherIndex:AppDispatcher.register(function(action){

        switch(action.actionType){
            case(ApptConstants.APPT_CREATE):
                var name = action.name,
                    time = action.time,
                    id = action.id

                createAppt(name,time,id);
                ApptStore.emitEvent(ApptConstants.CHANGE_EVENT);

                break;

            case(ApptConstants.APPT_DESTROY):
                destroy(action.id);
                ApptStore.emitEvent(ApptConstants.CHANGE_EVENT);
                break;

            case(ApptConstants.APPT_ADDMODE):
                _addMode = action.mode;
                _editMode = false;
                ApptStore.emitEvent(ApptConstants.CHANGE_EVENT);
                break;

            case(ApptConstants.APPT_EDITMODE):
                _editMode = action.id;
                _addMode = false;
                ApptStore.emitEvent(ApptConstants.CHANGE_EVENT);
                break;
        }

    })

});

export default ApptStore;

