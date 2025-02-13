
let product = [{name : "laptop" , price : "1000"}, {name : "mouse", price : "123"}, {name :"keyboard", price:"700"}];


function processproduct(product){

  let productname = product.map(pro =>product.name);
  return productname;

  product.forEach(pro =>{
    if(pro.price > 50){
      console.log(product.name);
    }
});
}
processproduct(product);