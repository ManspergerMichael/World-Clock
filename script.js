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

        //noticed a bug. If minutes was under 10, only one digit would display
        //if minutes is under 10, include a 0 in the string
        if(time.getMinutes() < 10)
        {
            PST.innerHTML = ""+((time.getHours()- 12)-3)+":0"+time.getMinutes()+" PM";
            EST.innerHTML = ""+(time.getHours()- 12)+":0"+time.getMinutes()+" PM";
        }
        else
        {
            PST.innerHTML = ""+((time.getHours()- 12)-3)+":"+time.getMinutes()+" PM";
            EST.innerHTML = ""+(time.getHours()- 12)+":"+time.getMinutes()+" PM";
        }
        
        
    }
    else
    {
        if(time.getMinutes() < 10)
        {
            PST.innerHTML = ""+time.getHours()-3+":0"+time.getMinutes()+" AM";
            EST.innerHTML = ""+time.getHours()+":0"+time.getMinutes()+" AM";
        }
        else
        {
            {
                PST.innerHTML = ""+time.getHours()-3+":"+time.getMinutes()+" AM";
                EST.innerHTML = ""+time.getHours()+":"+time.getMinutes()+" AM";
            }
        }
    }
    
    
}
