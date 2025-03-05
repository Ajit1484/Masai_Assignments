fetch("https://fakestoreapi.com/productss")

.then((resolve)=>{
  return resolve.json()
})
.then((resolve)=>{
  console.log(resolve);
})
.catch((error)=>{
  console.log(error,"Failed to fetch product..............................")
})

