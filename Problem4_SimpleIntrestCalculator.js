
function intrest(P,R,T){

  if(P<0 && R<0 &&T<0){
    console.log("Invalid input,all value must be non negative");
  }
  Z = (P*R*T/100);
  console.log("the simple intrest is "+Z);
}

intrest(1000,5,3);        //FIRST I CALL THE FUNCTION AND PASSES THE ARGUMENTS
                          //THEN FUNCTION WILL EXECUTE. AND GOT THE OUTPUT.
                          
intrest(1500,7,5);
intrest(0,6,2);