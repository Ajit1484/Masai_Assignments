
async function greet(){
  try{
   let result = await fetch("https://api.open-meteo.com/v1/forecast?latitude=28.6139&longitude=77.2090&daily=temperature_2m_max&timezone=Asia/Kolkata")
   let data = await result.json()
   console.log(data);

   // 1) daily temprature value
   let result1 = data.daily.temperature_2m_max;
   console.log(result1);

   //2) temp is above 35'c

    let res2 =data.daily.temperature_2m_max.filter((temp)=>{
      if(temp>35){
        console.log(res2);
      }
    })

    // 3) Map the remaining temp to object fromat
   
  }
 catch(error){
    console.log(error);
}
}
greet();