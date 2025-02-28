function abc(){
  let counter = 0;
    let setId = setInterval(()=>{
      console.log("Loading...");
      counter++;
      if(counter===5){
        console.log("Loaded sucessfully...");
        clearInterval(setId);
      }
    },1000);
  }
  
  abc();