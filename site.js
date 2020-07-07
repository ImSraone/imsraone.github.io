function ShowOrHide(Id) {
    var x = document.getElementById(Id);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}