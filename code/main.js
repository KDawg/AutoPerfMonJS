requirejs(['meld'], function(meld) {

  console.log('!!!main.js is loaded');


  var ServerVM = function(ipAddr, machineName) {
    this.ipAddr = ipAddr || '';
    this.machineName = machineName || '';
  };


  ServerVM.prototype.timeSuck = function(howMuchSuck) {
    var randomNumber = Math.random();

    console.log('>>[' + this.machineName + '] tickSuck takes a long time to run!!!');
    for (var i = 0; i < howMuchSuck; i++) {
      Math.cos(randomNumber);
      Math.sqrt(randomNumber);
      Math.sin(randomNumber);
    }
  };


  meld.before(ServerVM.prototype, 'timeSuck', function() {
    performance.mark('timeSuck:before');
  });

  meld.after(ServerVM.prototype, 'timeSuck', function() {
    performance.mark('timeSuck:after');
    performance.measure('timeSuck', 'timeSuck:before', 'timeSuck:after');
  });


  function ReportOnTimeSuckage() {
    var measures = performance.getEntriesByType('measure');

    console.log(measures);

    measures.forEach(function(entry, index, allEntries) {
      console.log('duration[' + index + '] was ' + entry.duration + ' ms');
    })
  }


  var newUser = new ServerVM('127.0.0.1', 'localhost');

  newUser.timeSuck(10);
  newUser.timeSuck(100);
  newUser.timeSuck(1000);
  newUser.timeSuck(10000);
  newUser.timeSuck(100000);
  newUser.timeSuck(1000000);
  newUser.timeSuck(10000000);
  newUser.timeSuck(100000000);

  ReportOnTimeSuckage();

});
