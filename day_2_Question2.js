const people = [ 
  {  name: "Alice", 
    address: { 
      city: "New York", 
      street: { name: "Broadway", number: 123 } } }, 
        
  { name: "Bob",
     address: { 
      city: "Los Angeles",
       street: { name: "Sunset Boulevard",  number: 456 } } } 
      ]

      let [{name:firstname, address:{city:firstcity,street:{name:city1name,number:city1number}}},{name:secondname,address:{city:secondcity,street:{name:city2name,number:city2number}}}] = people

      let greet = () => `${firstname} lives in ${firstcity} on ${city1name} , ${secondname} lives in ${secondcity} on ${city2name}`
      
     console.log(greet());

