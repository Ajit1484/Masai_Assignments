let n = 5;
let bag ="";
for(let i=n.length-1; i>0; i--){

  for(let j=0; j<i ; i++){
    
    bag = bag + "* ";
  }
  console.log(bag);
}
