input = [
  { name: "Alice", tasksCompleted: 8, rating: 4.7 },
  { name: "Bob", tasksCompleted: 4, rating: 4.0 },
  { name: "Charlie", tasksCompleted: 6, rating: 3.5 },
  { name: "David", tasksCompleted: 10, rating: 4.9 },
  { name: "Eve", tasksCompleted: 7, rating: 2.8 }
  ];

  let filterEmployee = input.filter((ele)=>ele.tasksCompleted>5)
 // console.log(filterEmployee);

  let mapEmployee = filterEmployee.map((ele)=>{
    let performanceLevel ;
    if(ele.rating>4.5){
    performanceLevel = "Excellent";
    }
    else if(ele.rating>=3 && ele.rating<=4.5){
      performanceLevel = "Good"
    }
    else {
      performanceLevel="Need improvement"
    }
    return {"name":ele.name, performanceLevel}
  })

 // console.log(mapEmployee)

 let sorArray=mapEmployee.sort((a,b)=>a.performanceLevel.localeCompare(b.performanceLevel))
  console.log(sorArray);