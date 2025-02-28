function abc(){
  console.log("message 1");

  setTimeout(()=>{
    console.log("Message 2 after 2 sec")
  },2000)

  console.log("Message 3");
}

abc();