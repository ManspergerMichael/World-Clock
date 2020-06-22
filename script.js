$(document).ready(function(){
    /* 
    -- First attempt with Google TimeZone API
    //Richmond corrdanates
    var location = "47.260653, -122.493906";
    //'37.740226, -84.2897087';
    //create new Date object
    var Target_Date = new Date();
    //get timecode
    var Target_Time = Target_Date.getTime()/1000 + Target_Date.getTimezoneOffset() * 60;

    var API_KEY = '';

    //create API URL 
    var GAPI_Call =
    'https://maps.googleapis.com/maps/api/timezone/json?location=' + location + '&timestamp='+ Target_Time + '&key='+ API_KEY; 
    */

    //Free world clock API
    var Pacific_Time = 'http://worldtimeapi.org/api/timezone/America/Los_Angeles';
    
    var East_time = 'http://worldtimeapi.org/api/timezone/AMERICA/KENTUCKY/LOUISVILLE';

    $.get(Pacific_Time, function(West_data){
        console.log(West_data);
        var unixtime = West_data.unixtime;
        console.log(unixtime);
        var date = new Date(unixtime * 1000);
        var AM_PM = 'AM';
        var hours = date.getHours();
        if(hours >= 12){
            hours = hours - 12;
            AM_PM = 'PM';
        }

        var PST = "" + hours + ":"+date.getMinutes() + " " + AM_PM;
        $('#PST').text(PST);
    });

    $.get(East_time, function(East_data){
        console.log(East_data);
        var unixtime = East_data.unixtime;
        console.log(unixtime);
        var date = new Date(unixtime * 1000);
        var hours = date.getHours();
        if(hours >= 12){
            hours = hours - 12;
            AM_PM = 'PM';
        }

        var EST = "" + hours + ":"+date.getMinutes() + " " + AM_PM;
        $('#EST').text(EST);
    });
    

});

