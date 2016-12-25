var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
    searchHeadLines: function() {

        AppDispatcher.handleViewAction({
            actionType: AppConstants.SEARCH_HEADLINES
        });
    },
    searchSpecific: function(name) {

        AppDispatcher.handleViewAction({
            actionType: AppConstants.SEARCH_SPECIFIC,
            name: name
        });
    },
    blank: function() {



        AppDispatcher.handleViewAction({
            actionType: AppConstants.BLANK
        });
    },
    sblank: function() {



        AppDispatcher.handleViewAction({
            actionType: AppConstants.SBLANK
        });
    },
    soblank: function() {



        AppDispatcher.handleViewAction({
            actionType: AppConstants.SOBLANK
        });
    },
    searchTop: function() {



        AppDispatcher.handleViewAction({
            actionType: AppConstants.SEARCH_TOP
        });
    },
    searchPopular: function() {



        AppDispatcher.handleViewAction({
            actionType: AppConstants.SEARCH_POPULAR
        });
    },

    sources: function() {



        AppDispatcher.handleViewAction({
            actionType: AppConstants.SOURCES
        });
    },

    receiveHeadLines: function(articles) {
        AppDispatcher.handleViewAction({
            actionType: AppConstants.RECEIVE_HEADLINES,
            articles: articles
        });
    },

    receiveSpecific: function(specific) {
        AppDispatcher.handleViewAction({
            actionType: AppConstants.RECEIVE_SPECIFIC,
            specific: specific
        });
    },

    receiveSources: function(sources) {
        AppDispatcher.handleViewAction({
            actionType: AppConstants.RECEIVE_SOURCES,
            sources: sources
        });
    }
}


module.exports = AppActions;