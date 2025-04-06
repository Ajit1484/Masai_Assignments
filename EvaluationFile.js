let arr = [
  {name : "Ajit",sub:"Math",score:80},
  {name : "Govind",sub:"Math",score:70},
  {name : "Krishna",sub:"Math",score:90},
]

function createStudentManager(){

return {

   addStudent: function(StudentName,sub,score){
      arr.push(StudentName,sub,score)
     
  },

   updateScore: function(updatescore,givenSub){
    arr.map((ele)=>{
      if(ele.sub==givenSub){
        ele.score = updatescore;
      }
    })
   
  },

   getStudentDetail: function(username){
       return arr.filter((ele)=>{
        if(ele.name==username){
          console.log(ele.name);
        }
        else{
          console.log("student not found");
        }
      })
  },
  
  addSubject: function(newSub,score){
    arr.map((ele)=>{
      arr.push(newSub=score)
    })
  }
}

}
let result = createStudentManager();
console.log(result.addStudent("Amit","Math",90));

//=========================================================================================



let array = [
  {name : "renu",score:{ math:90, science:80, chemistry:20}},
   {name : "Ajit",score:{ math:40, science:50, chemistry:70}},
    {name : "Govind",score:{ math:40, science:70, chemistry:20}},
     {name : "Rohit",score:{ math:60, science:40, chemistry:50}},
]


// calculate the average score of given students;

function abc(){
  array.reduce((acc,curr)=>{
  acc+=curr.score:
  },0)
}

array.filter((ele)=>{
  if(ele.avgscore > 85){
    console.log("Top performer "+ele);
  }
})

array.filter((ele)=>{
ele.score > 
})


