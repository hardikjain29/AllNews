var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var Source = require('./source.js');

var SourceResult = React.createClass ({
    render: function(){
        var t = 0;
        return(
            <div>
                <div className="row">
                {
                    this.props.sources.map(function(source, i){
                        return (
                                
                                <Source source = {source} key = {i} />
                             
                        )
                    })
                    
                }
                </div>
            </div>
        )
    },

});

module.exports = SourceResult;
