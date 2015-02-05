var AppView = Backbone.View.extend({
  el: '#app-view',
  initialize: function() {


    _.bindAll(
      this,
      'onCreateButtonClick',
      'onToDoAdd'

    );
    this.$createButton = $('#create-button');
    this.$toDoBoard = $('#todo-board');
    this.$itemName = $('#item-name');
    this.createToDoCollection = new myToDoCollection();


    this.$createButton.on('click', this.onCreateButtonClick);

    this.createToDoCollection.on('add', this.onToDoAdd);
    console.log('initliaze appview done');

  },

  onCreateButtonClick: function () {

    var newToDoModel = new myToDoModel();
    newToDoModel.set({
      todo: this.$itemName.val()
    });
    this.createToDoCollection.add(newToDoModel);
    console.log('create button clicked');
  },


  onToDoAdd: function(newToDoModel) {
    console.log('ToDo Model created');
    // console.log(myToDoModel.attributes);
    var newToDoView = new ToDoView({model: newToDoModel});
    this.$toDoBoard.append(newToDoView.$el);

  }
});


