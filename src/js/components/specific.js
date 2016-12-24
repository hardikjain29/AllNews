var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var Specific = React.createClass({
	render : function () {
		return(
		<div>
			<div className="col s12 m6">
              <div className="card large hcard">
                <div className="card-image">
                  <img src={this.props.specs.urlToImage}/>
                  <span className="card-title">{this.props.specs.title}</span>
                </div>
                <div className="card-content">
                  <p>{this.props.specs.description}</p>
                </div>
                <div className="card-action">
                  <a href={this.props.specs.url} target="_blank">Read full article</a>
                </div>
              </div>
            </div>
		</div>
		)
	}

});

module.exports = Specific;