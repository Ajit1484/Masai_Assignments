
function bankAccount(balance){

  let obj = {
    deposit : function(amount){

        if(amount > 0){
          balance = balance + amount;
          console.log("deposit balance :"+amount);
        }
    },

    withdraw : function(amount){

      if(amount>0 && amount<=balance){
        balance = balance - amount;
        console.log("withdraw balance :" + amount);
      }
    },

    getBalance : function(){
        console.log("total balance :"+balance);
    }
  }
}

let call = bankAccount("10000");
console.log(call.withdraw());