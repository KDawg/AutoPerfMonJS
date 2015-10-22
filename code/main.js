requirejs(['meld', 'server'], function(meld, ServerVM) {

  console.log('!!!main.js is loaded');


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
