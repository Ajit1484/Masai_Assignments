let n = 5;
let bag = "";
for(let i=0; i<n ; i++){
  bag = bag + "* ";
}
console.log(bag);

let bag1 = "";
for(let i=1; i<=n-2;i++){

  for(let j=1; j<=n-4;j++){
    console.log("* ");
  }
}


console.log(bag);