window.onload = 

function init(){
    var time = new Date();
    var PST = document.getElementById("PST");
    var EST = document.getElementById("EST");
    PST.innerHTML = time.toTimeString();
    EST.innerHTML = time.toTimeString();
    
}
