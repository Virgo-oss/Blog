

var warning = document.getElementById("warn");
warning.onclick = function() {
    let tip = document.getElementById("tooltip");
    if (tip.style.display == "none") {
        tip.style.display = "block";
    }else{
        tip.style.display = "none";
    }
}