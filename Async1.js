// Create a function timer that takes a duration in milliseconds and a callback function onComplete. The function should use setTimeout to simulate a countdown, and when the timer ends, it should execute the onComplete callback with a message: "Timer of <duration> ms finished".

// Steps:

// Define timer that accepts duration and onComplete.
// Use setTimeout to delay for duration, then call onComplete with the finish messag

function onComplete(str){
  console.log(str);
}
function timer(duration,onComplete){
  setTimeout(()=>{
    let message = "Timer of"+duration+" ms finished";
onComplete(message);
  },duration)
}
timer(2000,onComplete);