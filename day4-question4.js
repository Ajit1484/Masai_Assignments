function createFunctionList() {

  let functions = [];
  
  for (let i = 0; i < 5; i++) {
  
  functions.push(function () {
  
  console.log("Index:", i);
  
  });
  
  }
  
  return functions; }

  const functionList = createFunctionList();

functionList[0]();    // Expected Output: "Index: 0", Actual Output: "Index: 5"

functionList[1]();   // Expected Output: "Index: 1", Actual Output: "Index: 5"

functionList[2]();   // Expected Output: "Index: 2", Actual Output: "Index: 5"
