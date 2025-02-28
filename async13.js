let count=0;
function abc(){
  let setId = setInterval(()=>{
    console.log("Loading...");
    count++
    if(count===5){
      console.log("Loaded sucessfully...");
      clearInterval(setId);
        }
  },1000)
}

abc();