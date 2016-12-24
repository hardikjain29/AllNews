var React = require('react');
var AppStore = require('../stores/AppStore');
var AppActions = require('../actions/AppActions');
var Specific = require('./specific.js');

var SpecificResult = React.createClass({

	render : function () {
		return(
			<div>
				<div className="row">
					{
						this.props.specific.map(function(specs,i){
							return(
								<Specific specs={specs} key={i} />
							)
						})
					}
				</div>
			</div>
		)
	}


});

module.exports = SpecificResult;