// Library Management System
function Book(title,author,year,isCheckOut="false"){
    let obj = {};

    obj.title = title
    obj.author = author
    obj.year = year
    obj.isCheckOut = isCheckOut;

  obj. getBookInfo = function(){
      console.log(`book title is ${obj.title}, written by ${obj.author}, in the year ${obj.year}, checkout ${obj.isCheckOut}`);
    }
    

    return obj;
}

let object1 = new Book("The Alchemist", "Paulo Coelho", 1988,true)
object1.getBookInfo();