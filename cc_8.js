// Task 1: Function Declaration
// Writinng a function that computes the net salary 
function calculateSalary(baseSalary, bonus, taxRate) {
    let netSalary = (baseSalary + bonus) - (baseSalary * taxRate);
    console.log (`Net Salary: $${netSalary}`);
}
// Testing the function 
calculateSalary(5000, 500, 0.1); 
calculateSalary(7000, 1000, 0.15); 

// Task 2: Function Expression
// Declaring a function expression to determine the final price
const calculateDiscount = function(price, discountRate) {
    let finalPrice = price - (price * discountRate);
    console.log(`Sales Tax: $${finalPrice}`);
}
// Testing the data 
calculateDiscount(100, 0.2); 
calculateDiscount(250, 0.15); 

