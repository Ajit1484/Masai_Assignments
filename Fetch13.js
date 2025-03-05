//=====================================================
fetch("https://fakestoreapi.com/products")

.then((resolve)=>{
  return resolve.json()
})
.then((resolve)=>{
  console.log(resolve);
})
.catch((error)=>{
  console.log(error,"Failed to fetch product");
})


// =======================================================

async function trycatch(){

  try{
    let resolve = await fetch("https://fakestoreapi.com/products")
    let data = await resolve.json();
    console.log(data);

  }catch(error){
      console.log(error,"Failed to fetch product")

  }finally{
    console.log("Fimally Done");
  }
 
}

trycatch();


//  4)  ===================================================================

async function abc(){
  let respond =await fetch("https://fakestoreapi.com/products")
  let data = await respond.json()

   let totalsum = data.reduce((Acc,data)=>{
      return Acc = Acc + data.price
  },0)

  console.log(totalsum)

}

abc();

