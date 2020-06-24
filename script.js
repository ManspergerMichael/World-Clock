$(document).ready(function(){
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var AM_PM = 'AM';
  if(hours > 12){
      AM_PM = 'PM';
      hours = hours - 12;
  }
  if(minutes < 10){
      minutes = ('0'+ minutes).slice(-2);
  }
  var Martin_Time = "" + hours + ":" + minutes + " " +AM_PM;
  var Michael_Time = "" + hours - 3 + ":" + minutes + " " +AM_PM;

  $('#EST').text(Martin_Time);
  $('#PST').text(Michael_Time);

  /*
    ideas:
    Happy birthday message,
    connect to weather api,
    ..
  */


});

