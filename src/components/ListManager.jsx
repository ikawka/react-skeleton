var React = require('react');
var List  = require('./List.jsx')

var ListManager = React.createClass({
	getInitialState: function(){
		return {items:[], newItemText: ''};
	},
	handleSubmit: function(event){
		event.preventDefault();
		if(this.state.newItemText != ''){
			var currentItems = this.state.items;
			currentItems.push(this.state.newItemText);

			this.setState({items: currentItems, newItemText: ''});
		}
	},
	onChange: function(event){
		this.setState({newItemText: event.target.value});
	},
	render: function(){

		var divStyle = {
			marginTop: 10
		};
		
		return(
			<div style={divStyle} className="col-sm-4">
				<div className="panel panel-default">
					<div className="panel-heading">{this.props.title}</div>
						<div className="panel-body">
							<form className="form" onSubmit={this.handleSubmit}>
								<div className="input-group">
									<input className="form-control" type="text" onChange={this.onChange} value={this.state.newItemText} />
									<span className="input-group-btn">
										<button className="btn btn-primary">Add</button>
									</span>
								</div>
							</form>
						</div>
					<List items={this.state.items} />
				</div>
			</div>
		)
	}
});


module.exports = ListManager;