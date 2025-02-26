let arr = [1,4,2,6,4,8,5];
let arr1 = [2,4,5,7,3,3]

let res1= arr.filter((x)=>{
    return x%2==0
})

console.log(res1);

let res2 = arr.reduce((acc,curr)=>{
      return acc+=curr
},0)

console.log(res2);

let res3 = arr.sort()
console.log(res3);