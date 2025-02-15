
function multiplynNumber(a,b){

  return a*b;

}

function mult(x,y){
  return multiplynNumber.apply(undefined,[x,y])
}

console.log(mult(2,3));

