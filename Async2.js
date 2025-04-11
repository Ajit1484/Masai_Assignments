// Create a webpage that fetches a list of users from the JSONPlaceholder API (https://jsonplaceholder.typicode.com/users) and displays their names in console.

let fetchAPI = fetch("https://jsonplaceholder.typicode.com/users")

fetchAPI
.then((res)=>res.json())
.then((data)=>{
  //console.log(data);
  let result =data.map((ele)=>{
    return ele.name
  })
  console.log(result);
})