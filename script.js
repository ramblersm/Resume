document.getElementById("openModal").onclick = function() {
    document.getElementById("myModal").style.display = "flex";
}

document.getElementById("closeModal").onclick = function() {
    document.getElementById("myModal").style.display = "none";
}

window.onclick = function(event) {
    if (event.target == document.getElementById("myModal")) {
        document.getElementById("myModal").style.display = "none";
    }
}
