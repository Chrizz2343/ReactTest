(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* [TODO APP] */
var TodoApp = React.createClass({displayName: "TodoApp", 
getInitialState: function(){
		return {items: []};
	},
    
	updateItems: function(newItem){
		var allItems = this.state.items.concat([newItem]);
		this.setState({items: allItems});
	},
    
	render: function(){
		return (
			React.createElement("div", null, 
				React.createElement(TodoBanner, null), 
				React.createElement(TodoList, {items: this.state.items}), 
			    React.createElement(TodoForm, {onFormSubmit: this.updateItems})
			)
		);
	  }
    });


/* [TODO BANNER] && [TODO LIST] */
	var TodoBanner = React.createClass({displayName: "TodoBanner",
    render: function(){
		return (
			React.createElement("h3", null, "TODO")
		);
	  }
    });
    
	var TodoList = React.createClass({displayName: "TodoList",
    render: function() {
		var createItem = function(itemText) {
			return (
				React.createElement(TodoListItem, null, itemText)
			);
		};
		return React.createElement("ul", null, this.props.items.map(createItem));
	  }
    });

		/* [TODO LIST ITEM] */
		var TodoListItem = React.createClass({displayName: "TodoListItem",
        render: function(){
		return (
			React.createElement("li", null, this.props.children)
		);
	  }
    });

	/* [TODO FORM] */
	var TodoForm = React.createClass({displayName: "TodoForm",
    getInitialState: function() {
		return {item: ''};
	},
	handleSubmit: function(e){
		e.preventDefault();
		this.props.onFormSubmit(this.state.item);
		this.setState({item: ''});
		ReactDom.findDOMNode(this.refs.item).focus();
		return;
	},
	onChange: function(e){
		this.setState({
			item: e.target.value
		});
	},
	render: function(){
		return (
			React.createElement("form", {onSubmit: this.handleSubmit}, 
				React.createElement("input", {type: "text", ref: "item", onChange: this.onChange, value: this.state.item}), 
				React.createElement("input", {type: "submit", value: "Add"})
			)
		);
	  }
    });

ReactDOM.render(React.createElement(TodoApp, null), document.getElementById('reactdiv'));
//ReactDOM.render(<div>Testing...</div>, document.getElementById("reactdiv")

},{}]},{},[1]);
