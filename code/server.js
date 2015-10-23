define(function() {

  var ServerVMClass = function(ipAddr, machineName) {
    this.ipAddr = ipAddr || '';
    this.machineName = machineName || '';
  };


  ServerVMClass.prototype.timeSuck = function(howMuchSuck) {
    var randomNumber = Math.random();

    console.log('>>[' + this.machineName + '] timeSuck takes a while to run!!!');
    for (var i = 0; i < howMuchSuck; i++) {
      Math.cos(randomNumber);
      Math.sqrt(randomNumber);
      Math.sin(randomNumber);
    }
  };

  return ServerVMClass;

});