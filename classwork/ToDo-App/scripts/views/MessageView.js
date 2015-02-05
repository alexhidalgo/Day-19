var ToDoView = Backbone.View.extend({
	// template: _.template('<div><%= message %></div>'),
	el: '#todo-board',
	// el: '#app-view'
	initialize: function() {


		_.bindAll(
			this,
			'render'
		);
		// var innerHtml = $('todo-item-view').html();
		var itemTemplate = _.template($('todo-item-view').html());
		this.$el = $(itemTemplate(this.model.attributes));


		// this.$el.html(template(options));

		// this.$el.on('click', this.onMessageClick);
	},

	render: function() {

	}

});
