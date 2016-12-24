var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var Article = require('./article.js');

var ArticleResult = React.createClass ({
    render: function(){
        var t = 0;
        return(
            <div>
                <div className="row">
                {
                    this.props.articles.map(function(article, i){
                        return (
                                
                                <Article article = {article} key = {i} />
                             
                        )
                    })
                    
                }
                </div>
            </div>
        )
    },

});

module.exports = ArticleResult;
