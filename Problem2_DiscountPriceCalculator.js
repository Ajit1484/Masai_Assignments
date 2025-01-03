
let shooping_price = -5;

if(shooping_price == 20){
  console.log("No discount applied");
}

else if(shooping_price<0){
  console.log("Invalid price,the price must be non negative number");
}

else if(shooping_price > 20){

  let discount = (shooping_price*.10);

  shooping_price = shooping_price - discount;

  console.log("the final price of the item is:"+shooping_price);

}
else{
  console.log("No discount");
}