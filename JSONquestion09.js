
let obj = {
  name : "AJIT"
}

function info(){
  console.log("Hello",this.name);
}

function setTimeoutgreeting(){
  let abc = info.bind(obj);
  setTimeout(abc,1000);
}

setTimeoutgreeting(obj);