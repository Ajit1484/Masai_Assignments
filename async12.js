function abc (){
  let count =0;
  let interval = setInterval(()=>{
    console.log("Loading.....");
    count++;

    if(count===5){
      console.log("Loaded sucessfully....")
      clearInterval(interval);
    }
  },1000)
}

abc();