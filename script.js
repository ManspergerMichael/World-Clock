//this event waits until the DOM is finished loading
//this allows the script to find the elements specified
window.onload = 

function init(){
    var UTCTime = new Date().UTC();
    console.log(UTCTime);
    var PST = document.getElementById("PST");
    var EST = document.getElementById("EST");
    PST.innerHTML = TacomaTime.toTimeString();
    EST.innerHTML = time.toTimeString();
    
}
