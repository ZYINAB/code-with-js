var result =1;
const num = 5;
 function factorial (x)
 { 
     if (x == 0)
     {
         return result;
  }
     else if (x== 1)
     {
         return result;
     }
     else
     {
      result = x * factorial(x - 1);
      return result;
     }
 }
result = factorial(num)
// console.log("The factorial of 5 is: ", result);
console.log(`The factorial of ${num} is ${result}`);