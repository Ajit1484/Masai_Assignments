let arr = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"]

let result = arr.reduce((acc,curr)=>{
  if(!acc[curr]){
    acc[curr]=1;
  }
  else{
    acc[curr]++;
  }
  return acc;
},{})

console.log(result);