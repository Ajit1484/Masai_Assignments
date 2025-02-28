function abc(){

  let timer = 5;
  let setId = setInterval(()=>{
    console.log(`Remaining time is: ${timer--}`);

    if(timer===0){
      console.log("countdown complete");
      clearInterval(setId);
    }
  },1000);
}

abc();