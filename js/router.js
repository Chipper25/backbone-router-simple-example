Router = Backbone.Router.extend({

	initialize: function () {
		console.log('Router initialized...');
	},

	routes: {
		'dogs': 'index',  		// exact match to #dogs on the url
		'dogs/:id': 'show',		// match param #dogs/1 etc... 1=id changable
		'dogs/:id/*action': 'behavior'  //match #dogs/1/bark ... 
	},

	index: function () {
		console.log('showing all dogs. ');
	},

	show: function (id) {
		console.log('Showing Dog '+id);
	},

	behavior: function (id, action) {
		console.log('Dog '+id+' '+action);
	}

});

var router = new Router();
Backbone.history.start(); //track changes in url