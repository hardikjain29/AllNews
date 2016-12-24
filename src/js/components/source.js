var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');


var Source = React.createClass({
	render : function() {
		return(
			<div>
		        <div className="col s12 m4">
		          <div className="card scard">
		            <div className="card-image">
		              <img src={this.props.source.urlsToLogos.medium}/>
		            </div>
		            <div className="card-content">
		              <p>{this.props.source.description}</p>
		            </div>
		            <div className="card-action">
		              <a className="pointer" onClick={() => this.getSpecificChannels(this.props.source.id)}>Get Articles</a>
		            </div>
		          </div>
		        </div>
			</div>
		)
	},
	getSpecificChannels: function (name) {
		AppActions.searchSpecific(name);
		this.setState({sources:'',articles:''});
	}
});

module.exports = Source;