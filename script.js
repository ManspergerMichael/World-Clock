//this event waits until the DOM is finished loading
//this allows the script to find the elements specified
window.onload = 

function init(){
    var time = new Date();
    var PST = document.getElementById("PST");
    var EST = document.getElementById("EST");

    //12 is subtracted to convert from 24 hour clock to 12 hour
    if(time.getHours() > 12)
    {
        //system time is used, because M is in the eastrn time zone 
        //EST will use system time and PST will display system time - 3 hours
        
        PST.innerHTML = ""+((time.getHours()- 12)-3)+":"+time.getMinutes()+" PM";
        EST.innerHTML = ""+(time.getHours()- 12)+":"+time.getMinutes()+" PM";
    }
    else
    {
        PST.innerHTML = ""+time.getHours()-3+":"+time.getMinutes()+" AM";
        EST.innerHTML = ""+time.getHours()+":"+time.getMinutes()+" AM";
    }
    
    
}
