//this event waits until the DOM is finished loading
//this allows the script to find the elements specified
window.onload = 

function init(){
    var time = new Date();
    var PST = document.getElementById("PST");
    var EST = document.getElementById("EST");
    var pstHours;
    var pstMinutes;
    var estHours;
    var estMinutes;
    var timeThing;
    var minutesPlace;

    //12 is subtracted to convert from 24 hour clock to 12 hour
    if(time.getHours() > 12)
    {
        pstHours = (time.getHours()- 12)-3;
        estHours = time.getHours() - 12;
        timeThing = "PM";
    }
    else{
        pstHours = time.getHours()-3;
        estHours = time.getHours();
        timeThing = "AM";
    }

    pstMinutes = time.getMinutes();
    estMinutes = time.getMinutes();
    
    if(time.getMinutes() < 10)
    {
        minutesPlace = ":0";
    }
    else
    {
        minutesPlace = ":";
    }
    PST.innerHTML = "" + pstHours + minutesPlace + pstMinutes + " " + timeThing;
    EST.innerHTML = "" + estHours + minutesPlace + estMinutes + " " + timeThing;
     
}
