var AppView = Backbone.View.extend({
  el: '#app-view',
  initialize: function() {


    _.bindAll(
      this,
      'onCreateButtonClick',
      'onToDoAdd'

    );
    this.$createButton = $('#create-button');
    this.$createButton.on('click', this.onCreateButtonClick);

    this.$itemName = $('#item-name');
    this.createToDoCollection = new myToDoCollection();
    this.createToDoCollection.on('add', this.onToDoAdd);

    this.$toDoBoard = $('#todo-board');



  },

  onCreateButtonClick: function () {

    var newToDoModel = new myToDoModel();
    newToDoModel.set({
      todo: this.$itemName.val()
    });
    this.createToDoCollection.add(this.newToDoModel);
  },

  // onCollectionAdd: function() {

  // },

  onToDoAdd: function(myToDoModel) {
    // console.log(myToDoModel.attributes);
    var newToDoView = new ToDoView({model: myToDoModel});
    this.$toDoBoard.append(newToDoView.$el);

  }

  // displayMessages: function(messages) {
  //   var messageRow = _.template('<div class="well well-lg user1"><dl class="dl-horizontal"><dt><%= name %><%= time %></dt><dd><%= message %></dd></dl></div>');
  //   this.$('.message-board').html('');

  //   this.$('.message-board').append(messageRow(messages[i]));
  // }




});


