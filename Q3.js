let Student_Score = [80,35,87,56,78,93];
let count = 0;

for(let i=0; i<=Student_Score.length; i++){

 if ( Student_Score[i] > 90){
    Student_Score[i] = 90;
  }

  if(Student_Score[i] < 40){
    Student_Score[i] =  Student_Score[i] + 20;
  }
  
  else if( Student_Score[i] >=50){
    count++;
  }
  
}
console.log( Student_Score);
console.log("Student passed",count);