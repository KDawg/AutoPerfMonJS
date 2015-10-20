(function() {
  var measures;

  console.log('blarg');


  TimeSucker(10);
  ReportOnTimeSucker();

  TimeSucker(100);
  ReportOnTimeSucker();

  TimeSucker(1000);
  ReportOnTimeSucker();

  TimeSucker(10000);
  ReportOnTimeSucker();

  TimeSucker(100000);
  ReportOnTimeSucker();

  TimeSucker(1000000);
  ReportOnTimeSucker();

  TimeSucker(10000000);
  ReportOnTimeSucker();

  TimeSucker(100000000);
  ReportOnTimeSucker();


  function TimeSucker(howMuchSuck) {
    performance.mark('ts:before');

    var i;
    var randomNumber = Math.random();

    for (i = 0; i < howMuchSuck; i++) {
      Math.cos(randomNumber);
      Math.sqrt(randomNumber);
      Math.sin(randomNumber);
    }

    performance.mark('ts:after');
    performance.measure('ts', 'ts:before', 'ts:after');
  }


  function ReportOnTimeSucker() {
    console.log('ReportOnTimeSucker...');
  }


  measures = performance.getEntriesByType('measure');
  console.log(measures);

})();
