var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var ArticleResult = require('./articleResult.js');
var SourceResult = require('./sourceResult.js');

function getAppState(){
    return {
        articles: AppStore.getHeadLines(),
        sources: AppStore.getSources(),
        specific: AppStore.getSpecificChannel()
    }
}



var App = React.createClass ({

    getInitialState: function(){
        AppActions.searchHeadLines();
        return {active:true,articles:'',sources:'',specific:''};
    },

    componentDidMount: function(){
        console.log("did");
        AppStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function(){
        console.log("will");
        AppStore.removeChangeListener(this._onChange);
    },

    render: function(){
        if(this.state.articles == ''){
            var articleResults = ''
        } else {
            var articleResults = <ArticleResult articles={this.state.articles} />
        }

        if(this.state.sources == ''){
            var sourceResults = ''
        } else {
            var sourceResults = <SourceResult sources={this.state.sources} />
        }

        var headActive = '';
        var sourceActive = '';
        var sortDisplay = '';

        if(this.state.active)
            {
                headActive  = 'active';
                sortDisplay =  {display:'block'};
            }
        else
            {
                sourceActive = 'active';
                sortDisplay = {display:'none'};
            }

        return(
            <div>
                <nav>
                    <div className="nav-wrapper">
                      <a href="#" className="brand-logo">All News</a>
                      <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
                      <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li className={headActive}><a href="#" onClick={this.getHeadLines}>Headlines</a></li>
                        <li className={sourceActive}><a href="#" onClick={this.getSpecific}>Specific</a></li>
                      </ul>
                    </div>
                </nav>
                <a className='dropdown-button btn' style={sortDisplay} href='#' data-activates='dropdown1'>Sort &dArr;</a>
                        <ul id='dropdown1' className='dropdown-content'>
                            <li><a href="#" onClick={this.getTop}>Top</a></li>
                            <li><a href="#" onClick={this.getHeadLines}>Latest</a></li>
                            <li><a href="#" onClick={this.getPopular}>Popular</a></li>
                          </ul>
                 <div className="container">
                    {articleResults}
                    {sourceResults}
                </div>
            </div>
        )
    },

    _onChange: function(){
        console.log("change");
        this.setState(getAppState());
    },

    getHeadLines: function() {
            this.setState({active:true});
            AppActions.searchHeadLines();
        },
    getTop: function() {
            AppActions.searchTop();
        },
    getPopular: function() {
            AppActions.searchPopular();
        },
    getSpecific: function(){
        AppActions.sources();
        AppActions.blank();
        this.setState({articles:'',active:false});
    }

});

module.exports = App;
