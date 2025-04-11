// Create a product listing page that fetches data from the FakeStoreAPI (https://fakestoreapi.com/products) and displays the product details in a grid format. Each product should show its image, title, price, and a button labeled "View Details". If the API call fails (e.g., an incorrect URL is used), display a user-friendly error message.

// Key Requirements:
// Fetch data from the API using the Fetch API and display the products in console dynamically.
// Implement error handling to display a message like "Failed to fetch products. Please try again later" when the API call fails.
// Use a try-catch block to handle errors with async/await.
// Finally implement reduce method to calculate the sum of all the products price . But make sure that you're using reduce method to do so , if not then the assignment will be flagged as Not - Submitted

// let API = fetch("https://fakestoreapi.com/products")

// API
// .then((res)=>res.json())
// .then((data)=>{
//   console.log(data);
//   return data
// })
// .then((data1)=>{
//   let result = data1.reduce((acc,curr)=>{
//     return acc+=curr.price
//   },0)
//   console.log(result);
// })
// .catch((error)=>console.log("failed to fetch the product price,Please try again"));


// by using async/await

async function greet(){

  try{
    let API = await fetch("https://fakestoreapi.com/products")
    let data = await API.json()
    console.log(data)

    let result = data.reduce((acc,curr)=>{
      return acc+=curr.price
    },0)
    console.log(result);

  }catch(error){
    console.log(error+"errorFailed to fetch products. Please try again later");
  }
}
greet();