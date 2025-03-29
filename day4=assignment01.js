
let obj = [{ name: "Laptop", price: 1000 }, { name: "Mouse", price: 20 }];

let processProduct = obj.map((prodName)=>prodName.name)
console.log(processProduct);

obj.forEach((ele)=>{
  if(ele.price>50){
    console.log(ele.name+" is above $50");
  }
  else{
    console.log(ele.name+" is below $50");
  }
})