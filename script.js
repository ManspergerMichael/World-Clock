$(document).ready(function(){
    var PST = "http://worldtimeapi.org/api/America/Los_Angeles";
    var EST = "http://worldtimeapi.org/api/America/Kentucky/Louisville";
 $.get(PST, function(Data){
    console.log(Data);
    var datetime = Data.datetime;
    console.log(datetime);
    var Jdate = new Date(datetime);
    console.log(Jdate);
    console.log(Jdate.getHours);
 });
});

/* if(hours > 12){
      AM_PM = 'PM';
      hours = hours - 12;
  }
  if(minutes < 10){
      minutes = ('0'+ minutes).slice(-2);
  }
  var Martin_Time = "" + hours + ":" + minutes + " " +AM_PM;
  var Michael_Time = "" + hours - 3 + ":" + minutes + " " +AM_PM;

  $('#EST').text(Martin_Time);
  $('#PST').text(Michael_Time); */

  /*
    ideas:
    Happy birthday message,
    connect to weather api,
    ..
  */