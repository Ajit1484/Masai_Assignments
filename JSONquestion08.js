
let person = {
  name : "AJit",
  age : 25
}

function personinfo(){
  console.log("name :" + this.name +" "+ "age :"+this.age );
}

personinfo.call(person);