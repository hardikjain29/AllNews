var AppDispatcher =  require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppAPI = require('../utils/AppAPI.js');

var CHANGE_EVENT = 'change';

var _articles = [];
var _sources = [];
var _specific = [];
var _selected = '';

var AppStore = assign({}, EventEmitter.prototype, {

    setHeadLines: function(articles){
        _articles = articles;
    },
    setSpecific: function(specific){
        _sources = [];
        _specific = specific;
    },
    setSources: function(sources){
        _articles = [];
        _specific = [];
        _sources = sources; 
    },
    getHeadLines: function(){
        return _articles;
    },
    getSources: function(){
        return _sources;
    },
    getSpecificChannel: function(){
        return _specific;
    },
    emitChange: function(){
        this.emit(CHANGE_EVENT);
    },
    addChangeListener: function(callback){
        this.on('change', callback);
    },
    removeChangeListener: function(callback){
        this.removeListener('change', callback);
    }
});


AppDispatcher.register(function(payload){
    var action = payload.action;

    switch(action.actionType){
        case AppConstants.SEARCH_HEADLINES:
            AppAPI.searchNews();
            AppStore.emit(CHANGE_EVENT);
            break;

        case AppConstants.SEARCH_TOP:
            AppAPI.searchTop();
            AppStore.emit(CHANGE_EVENT);
            break;

        case AppConstants.SEARCH_POPULAR:
            AppAPI.searchPopular();
            AppStore.emit(CHANGE_EVENT);
            break;

        case AppConstants.SEARCH_SPECIFIC:
            AppAPI.searchSpecific(action.name);
            AppStore.emit(CHANGE_EVENT);
            break;

        case AppConstants.SOURCES:
            AppAPI.sources();
            AppStore.emit(CHANGE_EVENT);
            break;

        case AppConstants.RECEIVE_SOURCES:
            AppStore.setSources(action.sources);
            break;

        case AppConstants.RECEIVE_HEADLINES:
            AppStore.setHeadLines(action.articles);
            AppStore.emit(CHANGE_EVENT);
            break;

        case AppConstants.RECEIVE_SPECIFIC:
            AppStore.setSpecific(action.specific);
            AppStore.emit(CHANGE_EVENT);
            break;

        case AppConstants.BLANK:
            AppAPI.blank();
            AppStore.emit(CHANGE_EVENT);
            break;

        case AppConstants.SBLANK:
            AppAPI.sblank();
            AppStore.emit(CHANGE_EVENT);
            break;

        case AppConstants.SOBLANK:
            AppAPI.soblank();
            AppStore.emit(CHANGE_EVENT);
            break;
    }

    return true;
});


module.exports = AppStore;
