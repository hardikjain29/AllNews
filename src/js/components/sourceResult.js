var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var Source = require('./source.js');

var SourceResult = React.createClass ({
    render: function(){
        var t = this.props.setLoaders;
        return(
            <div>
                <div className="row">
                {
                    this.props.sources.map(function(source, i){
                        return (
                                
                                <Source setLoaders={t} source = {source} key = {i} />
                             
                        )
                    })
                    
                }
                </div>
            </div>
        )
    },

});

module.exports = SourceResult;
