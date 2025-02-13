function outerFunction(){

  let message = "Hello Ajit";

  function innerFunction(){
    console.log(message);
  }
  innerFunction();
}

let fun = outerFunction();