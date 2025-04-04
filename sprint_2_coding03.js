let setId = setInterval(()=>{
  console.log("Loading...")
},1000)

let timeID =setTimeout(()=>{
clearInterval(setId);
console.log("Loaded sucessfully");
},5000)