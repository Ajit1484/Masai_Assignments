const userProfile = {
  name : "Alice",
  age : 28,
  
  detail : function(){
      return`${this.name} is ${this.age} year old`
  },
  
 updateAge:function(newAge){
      if(newAge<=0){
          console.log("invalid age");
      }
      this.age = newAge;
      console.log(this.detail())
      return;
  }
}
let res=userProfile.updateAge(30)
console.log(userProfile.detail())
