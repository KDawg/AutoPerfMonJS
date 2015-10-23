define(function() {

  var ComputeObject = {
    defaultComputeCount: 100,

    getNumber: function() {
      var randomNumber = Math.random();

      return randomNumber;
    },

    computeMather: function(numComputes) {
      var i;

      numComputes = numComputes || this.defaultComputeCount;
      for (i = 0; i < numComputes; i++) {
        Math.cos(this.getNumber());
        Math.sqrt(this.getNumber());
        Math.sin(this.getNumber());
      }
    },

    runTestSuite: function() {
      this.computeMather();
      this.computeMather(1000);
      this.computeMather(10000);
      this.computeMather(100000);
      this.computeMather(1000000);
    }
  };

  return ComputeObject;

});