var ToDoView = Backbone.View.extend({
	// template: _.template('<div><%= message %></div>'),
	el: '#todo-board',
	// el: '#app-view'
	initialize: function(newToDoModel) {


		_.bindAll(
			this,
			'onTextClick',
			'onModelChanged'
		);

		var itemTemplate = _.template($('#todo-item-view').html());
		this.$el = $(itemTemplate(this.model.attributes));

		this.$strikeText = $('.strike-text');
		this.$toDoItemText = $('.todo-item-text');

		this.$toDoItemText.on('click', this.onTextClick);


	},

	onTextClick: function() {
		console.log("you clicked me");
		if(this.model.get('completed')) {
			this.model.set({
				completed: false
			});
		} else {
			this.model.set({
				completed: true
			});
		}
		console.log(this.model.attributes);

	},

	onModelChanged: function() {
		this.$toDoItemText.toggleClass('strike-text');
	}

});
