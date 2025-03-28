// Create a closure that simulates a simple counter. Implement a function createCounter that has a private count variable. The function should return two methods: increment to increase the count by 1 and getCount to return the current value of the counter. Ensure that count cannot be accessed directly from outside the closure.

function createCounter(){
  let count=0;

  return {
    increment : function(){
      count++;
    },

    getCount : function(){
      return count;
    }
  }
}

let result = createCounter();
//console.log(count);   count is not accessed

console.log(result.increment()); //1
console.log(result.getCount());  //1
result.increment();
console.log(result.getCount());
