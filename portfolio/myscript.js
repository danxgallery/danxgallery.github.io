/*This is the Javascript*/

/*This function allows the works to toggle the subnav when on mobile mode*/
function myFunction() {
    var x = document.getElementById("subnav_mobile");
    

    if (x.style.display === "none") {
        x.style.display = "block";

        // document.getElementById("wrapper").style.marginTop = "60px";

    } 
    
    else {
        x.style.display = "none";
        // document.getElementById("wrapper").style.marginTop = "0";
    }
}
