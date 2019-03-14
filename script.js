//this event waits until the DOM is finished loading
//this allows the script to find the elements specified
window.onload = 

function init(){
    var time = new Date();
    //var TacomaTime = time.setHours(time.getHours - 3);
    var PST = document.getElementById("PST");
    var EST = document.getElementById("EST");
    PST.innerHTML = time.setHours(21);
    EST.innerHTML = time.toTimeString();
    
}
