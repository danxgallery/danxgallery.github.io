$(".mainmenu").click(function(){
    $(this).next(".submenu").slideToggle(300);});

    let verse = ("article0.txt")  // sets default verse element

    $("input").val(verse); // changes menu option to default
    $("article").load(verse);   // retrieves only default element

    $("input").change(function() {
     verse = $(this).val();
        $("article").load(verse); });

//function clickCount() {
//    let click = 0;
//    click = document.querySelector("#count");
//    click += 1;
//    document.querySelector("button").innerHTML = clicks;
//    console.log("Working");
//}

