// Create a closure that represents a bank account. Implement a function createBankAccount that initializes an account with a balance (input by the user) and returns methods to deposit, withdraw, and getBalance. Ensure that the balance cannot be accessed or modified directly from outside the closure.

// deposit(amount): Increases the balance by the given amount.
// withdraw(amount): Decreases the balance by the given amount, if there are sufficient funds.
// getBalance(): Returns the current balance.

function createBankAccount(){
  let balance = 0;
  return {
      deposit : function(amt){
        return("you deposit "+(balance+=amt)+" rupee");
    },

    withdraw : function(amt){
      if(amt>0 && amt<=balance){
        return ("withdraw amount is"+(balance-=amt))
      }
     else{
      return("amount is high "+amt)
     }
    },

    getBalance : function(){
      return( "current balance is "+balance);
    }
  }
}

let result = createBankAccount();
console.log(result.deposit(2000))
console.log(result.withdraw(2001));
console.log(result.getBalance())