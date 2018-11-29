/*This is the Javascript*/

/*This function allows the works to toggle the subnav when on mobile mode*/

 window.onscroll = function() {scrollFunction()};

 function scrollFunction() {
   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
     document.querySelector(".cpu_nav").style.top = "-50px";
     //document.querySelector(".nav_container").style.paddingTop = "30px";
   } 
  
   else {
     document.querySelector(".cpu_nav").style.top = "0";
     //document.querySelector(".nav_container").style.paddingTop = "40px";
   }
 }

function nav_button() {
    let x = document.querySelector(".mobile_nav"); //Grab the subnav for mobile
    if (x.style.display === "none") {
        x.style.display = "block";  

    }  
    else {
        x.style.display = "none";
    }
}


//---------------------------------------------------------------------------------
//These bottom code was used before adding jquery just for the animation.
//-------------------------------------------------------------------------------

//function nav_button() {
//    var x = document.getElementById("subnav_mobile"); //Grab the subnav for mobile
//    if (x.style.display === "none") {
//        x.style.display = "block";
//
//       document.getElementById("moving").style.paddingTop = "150px";    
//
//    }  
//    else {
//        x.style.display = "none";
//        document.getElementById("moving").style.paddingTop = "0";
//    }
//}

/*This function allows the works to toggle the side bar of the 
Main Characters when on mobile mode*/
 //function side_bar() {
 //  var x = document.getElementById("sub_section");
//
 //  if (x.style.display === "none") {
 //      x.style.display = "block";
 //  } 
 // 
 //  else {
 //      x.style.display = "none";
 //  }
 //}


// function section_button() {
//     var x = document.getElementById("section")
//     if (x.style.display === "none") {
//         x.style.display = "block";
//     }  
//     else {
//         x.style.display = "none";
//     }
//  }
//   // This code is created by w3schools.
//   // Source: https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp

//   function section_button1() {
//     var x = document.getElementById("section1");
  
  
//     if (x.style.display === "none") {
//         x.style.display = "block";
//     } 
    
//     else {
//         x.style.display = "none";
//     }
//   }
//   // This code is created by w3schools.
//   // Source: https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp

//   function section_button2() {
//     var x = document.getElementById("section2");
  
  
//     if (x.style.display === "none") {
//         x.style.display = "block";
//     } 
    
//     else {
//         x.style.display = "none";
//     }
//   }
//   // This code is created by w3schools.
//   // Source: https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp

//   function section_button3() {
//     var x = document.getElementById("section3");
  
  
//     if (x.style.display === "none") {
//         x.style.display = "block";
//     } 
    
//     else {
//         x.style.display = "none";
//     }
//   }
  // This code is created by w3schools.
  // Source: https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp

//   function back() {
//     var x = document.getElementById("side_sub");
  
  
//     if (x.style.left === "-330px") {
//         x.style.left = "0";
//         console.log("working");
 
//     } 
    
//     else {
//         x.style.left = "-330px";

//         console.log("not working");
//     }
//   }
  // This code is created by w3schools.
  // Source: https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp
/***********************************************************
------------------- JQuery --------------------------------
*****************************************************************/

//This JQuery allow to animate toggle on my side bar.
$(document).ready(function(){


    $("#mobile_button").click(function(){
        $("#subnav_mobile").toggle(300);});

        /*if(!$(this).hasTag('nav')){

            //This code is made by: OptimusCrime
            //Source: https://stackoverflow.com/questions/7806637/jquery-animate-margin-top
            $(this).find('nav').animate({'margin-bottom': '250px', opacity: 0.5 }, 1000);
            console.log("It works");
        }

        else{
            $(this).find('nav').animate({'margin-bottom': '0', opacity: 0.5 }, 1000);
            console.log("It works again");
        }*/

   

    $("#toggle_button0").click(function(){
        $("#sub_section").toggle(300);});

    /* This is used for the side bar */

    $("#toggle_button1").click(function(){
        $("#section1").toggle(300);});

    $("#toggle_button2").click(function(){
        $("#section2").toggle(300);});

    $("#toggle_button3").click(function(){
        $("#section3").toggle(300);});

    $("#toggle_button4").click(function(){
        $("#section4").toggle(300);});

    $("#toggle_button5").click(function(){
        $("#section5").toggle(300);});

    /* Scrolling animation */
    
    //This code is credited by: Joseph Silber
    //Source: https://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link
    $(document).on('click', 'a[href^="#"]', function (event) { //this tells the user, For every
                                                               // a tag that links to an
                                                               //id, use this function
        event.preventDefault(); //Prevent default from happening
    
        $('html, body').animate({ //Use animation
            scrollTop: $($.attr(this, 'href')).offset().top //Scrolling at an attribute this with link
        }, 500);
    });
});
    


// const $element = $('.animation');
// const imagePath = '/png_sequence';
// const totalFrames = 600;
// const animationDuration = 1300;
// const timePerFrame = animationDuration / totalFrames;
// let timeWhenLastUpdate;
// let timeFromLastUpdate;
// let frameNumber = 1;

// function step(startTime) {
//   if (!timeWhenLastUpdate) timeWhenLastUpdate = startTime;

//   timeFromLastUpdate = startTime - timeWhenLastUpdate;

//   if (timeFromLastUpdate > timePerFrame) {
//     $element.attr('src', imagePath + `/homescreen${frameNumber}.png`);
//     timeWhenLastUpdate = startTime;

//     if (frameNumber >= totalFrames) {
//       frameNumber = 1;
//     } else {
//        frameNumber = frameNumber + 1;
//     }        
//   }

//   requestAnimationFrame(step);
// }
//This JQuery is made by: sitepoint
//Source: https://www.sitepoint.com/frame-by-frame-animation-css-javascript/

