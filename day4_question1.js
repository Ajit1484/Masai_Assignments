function outerFuntion(message){
  return function inner(){
    console.log("Hello "+message);
  }
}

let result = outerFuntion("Ajit")
console.log(result());