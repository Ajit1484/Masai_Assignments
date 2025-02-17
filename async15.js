function timer(duration,oncomplete){
  setTimeout(()=>{
    oncomplete(`timer of ${duration} ms finished`);
  }, duration)
}

timer(3000,(statement)=>{
  console.log(statement);
});