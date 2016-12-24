var AppDispatcher =  require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
    searchHeadLines: function(){

        // console.log('Searching for movie ' + movie.title);

        AppDispatcher.handleViewAction({
            actionType: AppConstants.SEARCH_HEADLINES
        });
    },
    searchSpecific: function(name){

        // console.log('Searching for movie ' + movie.title);

        AppDispatcher.handleViewAction({
            actionType: AppConstants.SEARCH_SPECIFIC,
            name:name
        });
    },
    blank: function(){

        // console.log('Searching for movie ' + movie.title);

        AppDispatcher.handleViewAction({
            actionType: AppConstants.BLANK
        });
    },
    searchTop: function(){

        // console.log('Searching for movie ' + movie.title);

        AppDispatcher.handleViewAction({
            actionType: AppConstants.SEARCH_TOP
        });
    },
    searchPopular: function(){

        // console.log('Searching for movie ' + movie.title);

        AppDispatcher.handleViewAction({
            actionType: AppConstants.SEARCH_POPULAR
        });
    },

    sources: function(){

        // console.log('Searching for movie ' + movie.title);

        AppDispatcher.handleViewAction({
            actionType: AppConstants.SOURCES
        });
    },    

    receiveHeadLines: function(articles){
        AppDispatcher.handleViewAction({
            actionType: AppConstants.RECEIVE_HEADLINES,
            articles: articles
        });
    }, 

    receiveSpecific: function(specific){
        AppDispatcher.handleViewAction({
            actionType: AppConstants.RECEIVE_SPECIFIC,
            specific: specific
        });
    },   

    receiveSources: function(sources){
        AppDispatcher.handleViewAction({
            actionType: AppConstants.RECEIVE_SOURCES,
            sources: sources
        });
    }
}


module.exports = AppActions;
