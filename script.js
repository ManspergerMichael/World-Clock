//this event waits until the DOM is finished loading
//this allows the script to find the elements specified
window.onload = 

function init(){
    //Date object is generated from system time, and is where all the data comes from
    var time = new Date();
    var PST = document.getElementById("PST");
    var EST = document.getElementById("EST");
    //these variables are used to build the strings that will display the time
    var pstHours;
    var pstMinutes;
    var estHours;
    var estMinutes;
    var timeThing;
    var minutesPlace;

    //12 is subtracted to convert from 24 hour clock to 12 hour
    if(time.getHours() > 12)
    {
        //subtracting 15 to include time diffrence
        pstHours = time.getHours()- 15;
        estHours = time.getHours() - 12;
        timeThing = "PM";
    }
    else{
        //subtracting 3 for time diffrence
        pstHours = time.getHours()-3;
        estHours = time.getHours();
        timeThing = "AM";
    }
    //get minutes from time object
    pstMinutes = time.getMinutes();
    estMinutes = time.getMinutes();
    
    //if minutes is under 10 only one digit will display
    if(time.getMinutes() < 10)
    {
        minutesPlace = ":0";
    }
    else
    {
        minutesPlace = ":";
    }
    //build string and set to DOM
    PST.innerHTML = "" + pstHours + minutesPlace + pstMinutes + " " + timeThing;
    EST.innerHTML = "" + estHours + minutesPlace + estMinutes + " " + timeThing;

    //I'm hilarious!
    if(pstHours === 4 && pstMinutes === 20)
    {
        this.document.getElementById("blazeIt").innerHTML = "...Dave's not here man...";
    }
    console.log('http://api.timezonedb.com/v2.1/list-time-zone')
}
