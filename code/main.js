requirejs(['meld', 'server', 'compute'], function(meld, ServerVM, compute) {

  console.log('============================================');
  console.log('!!!run performance on the Time Sucker Class Object');


  var serverPerfMonBeforeBehaviorRemover, serverPerfMonAfterBehaviorRemover;


  function ServerChangeBehaviorWithPerfMon() {
    serverPerfMonBeforeBehaviorRemover = meld.before(ServerVM.prototype, 'timeSuck', function() {
      performance.mark('timeSuck:before');
    });

    serverPerfMonAfterBehaviorRemover = meld.after(ServerVM.prototype, 'timeSuck', function() {
      performance.mark('timeSuck:after');
      performance.measure('timeSuck', 'timeSuck:before', 'timeSuck:after');
    });
  }


  function ServerRun() {
    var newUser = new ServerVM('127.0.0.1', 'localhost');

    newUser.timeSuck(10);
    newUser.timeSuck(100);
    newUser.timeSuck(1000);
    newUser.timeSuck(10000);
    newUser.timeSuck(100000);
    newUser.timeSuck(1000000);
    newUser.timeSuck(10000000);
    //newUser.timeSuck(100000000);
  }


  function ServerReportPerfMon() {
    var measures = performance.getEntriesByType('measure');

    measures.forEach(function(entry, index, allEntries) {
      console.log('duration[' + index + '] was ' + entry.duration + ' ms', entry);
    });
  }


  function ServerRestoreBehaviorWithoutPerfMon() {
    serverPerfMonBeforeBehaviorRemover.remove();
    serverPerfMonAfterBehaviorRemover.remove();
  }


  ServerChangeBehaviorWithPerfMon();
  ServerRun();
  ServerReportPerfMon();
  ServerRestoreBehaviorWithoutPerfMon();


  console.log('============================================');
  console.log('!!!run performance on the Compute Test Suite');

  function ComputeChangeBehaviorWithPerfMon() {
    meld.before(compute, 'computeMather', function() {
      performance.mark('computeMather:before');
    });

    meld.after(compute, 'computeMather', function() {
      performance.mark('computeMather:after');
      performance.measure('computeMather', 'computeMather:before', 'computeMather:after');
    });
  }


  function ComputeRun() {
    compute.runTestSuite();
  }


  function ComputeReportPerfMon() {
    var measures = performance.getEntriesByName('computeMather');

    measures.forEach(function(entry, index, allEntries) {
      console.log(entry.name + ' duration[' + index + '] was ' + entry.duration + ' ms', entry);
    });
  }


  ComputeChangeBehaviorWithPerfMon();
  ComputeRun();
  ComputeReportPerfMon();

});
