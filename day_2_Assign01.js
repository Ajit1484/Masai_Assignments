
let age = 25;

function displayAge(){
  console.log(age);
}

function changeAge(newage){
  age = newage;
  console.log("update age is :"+age)
}

displayAge();
changeAge(30)
displayAge()