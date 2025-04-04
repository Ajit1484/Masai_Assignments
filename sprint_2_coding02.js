console.log("Message 1");
function abc(delay){
let settimeout = setTimeout(()=>{
  console.log("Message 2 after "+delay+"ms")
},delay)
}
console.log("Message 3");

abc(2000);