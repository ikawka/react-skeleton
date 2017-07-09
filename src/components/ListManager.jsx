var React = require('react');
var List  = require('./List.jsx')

var ListManager = React.createClass({
	getInitialState: function(){
		return {items:[], newItemText: ''};
	},
	handleSubmit: function(event){
		event.preventDefault();

		var currentItems = this.state.items;
		currentItems.push(this.state.newItemText);

		this.setState({items: currentItems, newItemText: ''});
	},
	onChange: function(event){
		this.setState({newItemText: event.target.value});
	},
	render: function(){
		return(
			<div>
				<h3>{this.props.title}</h3>
				<form onSubmit={this.handleSubmit}>
					<input type="text" onChange={this.onChange} value={this.state.newItemText} />
					<button>Add</button>
				</form>
				<List items={this.state.items} />
			</div>
		)
	}
});


module.exports = ListManager;