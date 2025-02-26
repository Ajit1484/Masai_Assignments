let book = ["book1","book2","book3","book4","book5","book6"]

function addBook(newbook){
  book.push(newbook);
  console.log(book);
}

function removeBook(removebook){
let res1 = book.pop(removebook);
console.log(res1);
console.log(book);
}

function searchBook(bookname){
let res1=book.include(bookname);
console.log(res1);
}

function specificbook(){
  let res = book.indexOf(2)
  console.log(res);
}

function extractbook(){
  let res = slice(1,3)
  console.log(res);
}

function sortlocalecompare(){
  book.sort((a,b)=>a.localeCompare(b))
  console.log(book)
}

function removeAdd(){
  let res = book.splice(1,1,"book10");
  console.log(res);
}

function joinbook(){
  let res = book.join(",");
  console.log(res);
}

joinbook();
removeBook();