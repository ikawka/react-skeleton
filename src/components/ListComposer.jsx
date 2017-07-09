var React = require('react');
var ListManager = require('./ListManager.jsx');

var ListComposer = React.createClass({
	getInitialState: function(){
		return {todos:[], todoTitle: ''};
	},
	handleSubmit: function(event){
		event.preventDefault();

		console.log(this.state.todoTitle);
		if(this.state.todoTitle != ''){
			var currentTodo = this.state.todos;
			currentTodo.push(this.state.todoTitle);

			this.setState({todos: currentTodo, todoTitle: ''});
		}
	},
	onChange: function(event){
			this.setState({todoTitle: event.target.value});
	},
	render: function(){

		var createItem = function(text, index){
			return( <ListManager key={index + text} title={text} /> );
		}

		return(
			<div>
				<nav className="navbar navbar-default">
				  <div className="container-fluid">
				    <div className="navbar-header">
				      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
				        <span className="sr-only">Toggle navigation</span>
				        <span className="icon-bar"></span>
				        <span className="icon-bar"></span>
				        <span className="icon-bar"></span>
				      </button>
				      <a className="navbar-brand" href="#">ToDo Factory</a>
				    </div>
				    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				    	<form className="navbar-form navbar-right" onSubmit={this.handleSubmit}>
					        <div className="form-group">
					        	<div className="input-group">
					          		<input type="text" className="form-control" placeholder="Todo List Title" onChange={this.onChange} value={this.state.todoTitle} />
					          		<span className="input-group-btn">
					          			<button type="submit" className="btn btn-success">Create</button>
					          		</span>
					          	</div>
					        </div>
					     </form>
				    </div>
				  </div>
				</nav>
				<div className="container" id="todo-container">
					{this.state.todos.map(createItem)}
				</div>
			</div>
		);
	}
});

module.exports = ListComposer;