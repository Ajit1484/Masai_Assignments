
let n=5;

for(let i=1;i<n-1;i++){
  let bag=""

  for(let j=0; j<(n-1)-i;j++){
    bag+=" "
  }

  for(let j=0 ; j<(2*i)-1 ;j++){
    bag+="*"
  }
  console.log(bag);

}
