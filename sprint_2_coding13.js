let obj = {
  name : "Ajit",
  age:25
}

function personInfo(){
console.log(this.name+" age is "+this.age);
}

personInfo.call(obj);