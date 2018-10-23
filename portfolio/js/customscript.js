/*This is the Javascript*/

/*This function allows the works to toggle the subnav when on mobile mode*/
function myFunction() {
    var x = document.getElementById("subnav_mobile");
    var y = document.getElementById("grid-wrapper");

    if (x.style.display === "none") {
        x.style.display = "block";

       document.getElementById("grid-wrapper").style.paddingTop = "150px";

    } 
    
    else {
        x.style.display = "none";
        document.getElementById("grid-wrapper").style.paddingTop = "0";
    }
}
// This code is created by w3schools.
// Source: https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp


/*This function allows the works to toggle the side bar of the 
Main Characters when on mobile mode*/
function side_bar() {
  var x = document.getElementById("sub_section");

  if (x.style.display === "none") {
      x.style.display = "block";
  } 
  
  else {
      x.style.display = "none";
  }
}
// This code is created by w3schools.
// Source: https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp


/***********************************************************
------------------- JQuery --------------------------------
*****************************************************************/


const $element = $('.animation');
const imagePath = '/png_sequence';
const totalFrames = 600;
const animationDuration = 1300;
const timePerFrame = animationDuration / totalFrames;
let timeWhenLastUpdate;
let timeFromLastUpdate;
let frameNumber = 1;

function step(startTime) {
  if (!timeWhenLastUpdate) timeWhenLastUpdate = startTime;

  timeFromLastUpdate = startTime - timeWhenLastUpdate;

  if (timeFromLastUpdate > timePerFrame) {
    $element.attr('src', imagePath + `/homescreen${frameNumber}.png`);
    timeWhenLastUpdate = startTime;

    if (frameNumber >= totalFrames) {
      frameNumber = 1;
    } else {
       frameNumber = frameNumber + 1;
    }        
  }

  requestAnimationFrame(step);
}
//This JQuery is made by: sitepoint
//Source: https://www.sitepoint.com/frame-by-frame-animation-css-javascript/

