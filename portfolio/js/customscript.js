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
// This code is created by w3schools.
// Source: https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp



const $element = $('.animation');
const imagePath = '/png_sequence';
const totalFrames = 600;
const animationDuration = 600;
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


