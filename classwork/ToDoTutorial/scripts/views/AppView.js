var AppView = Backbone.View.extend({
  el: '#app-view',
  initialize: function() {

    _.bindAll(
      this,
      'onPlayGame'
    );


    this.$textBox = $('#text-box');
    this.$clickButton = $('#click-button');

    this.$clickButton.on('click', this.onPlayGame);

    this.number = Math.round(Math.random() * (100 - 0) + 0);

    console.log(this.$guess);

  },

  onPlayGame: function() {


    var guess = this.$textBox.val();
    guess = parseInt(guess);



    if(isNaN(guess)) {
      alert("You must enter a number.");
    }

    else if (guess <0 || guess >100) {
      alert("You must enter a number between 0 and 100..");
    }

    else if (guess > this.number) {
      alert("Sorry, it's LOWER than that.");
    }

    else if (guess < this.number) {
      alert("Sorry, it's HIGHER than that.");
    }

    else if (guess === this.number) {
      alert("You found the number, well played!!");
    }

  }
});
