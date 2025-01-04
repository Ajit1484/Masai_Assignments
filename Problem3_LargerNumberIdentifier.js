
function identifier(num1, num2){

  if(num1 > num2){
    console.log(num1+" is larger");
  }
  else if(num1 == num2){
    console.log("both no are equal");
  }
  else if(num1<num2){
    console.log(num2,+"is larger");
  }
}

identifier(5,10);      // 10 is larger
identifier(7,7);       //both are equal number
identifier(-1,-10)    // -1 is lager