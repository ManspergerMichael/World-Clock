//this event waits until the DOM is finished loading
//this allows the script to find the elements specified
window.onload = 

function init(){
    var time = new Date();
    console.log(time.getHours().toString() + ":"+time.getMinutes().toString());
    var PST = document.getElementById("PST");
    var EST = document.getElementById("EST");
    PST.innerHTML = ""+((time.getHours()- 12)-3)+":"+time.getMinutes();
    EST.innerHTML = ""+(time.getHours()- 12)+":"+time.getMinutes();
    
}
