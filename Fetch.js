fetch("https://jsonplaceholder.typicode.com/users")
.then((res)=>{
  return res.json();
})
.then((res)=>{
  let mapvar = res.map(ele=>ele.name);
  console.log(mapvar);
})