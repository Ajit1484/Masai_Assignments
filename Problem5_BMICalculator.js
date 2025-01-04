function BMICalculator(weight,height){

  if(height == 0){
    console.log("Invalid input, height cannot be zero");
  }
  else if(height < 0 && weight < 0){
    console.log("Invalid input, height and weight musrt be positive numver");
  }

  let BMI = weight/(height*height);
  console.log("Your BMI is "+BMI);

}

BMICalculator(70,1.75);
BMICalculator(55,1.60);
BMICalculator(90,1.80);