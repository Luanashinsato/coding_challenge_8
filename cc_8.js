// Task 1: Function Declaration
// Writing a function that computes the net salary 
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
// Testing the function
calculateDiscount(100, 0.2); 
calculateDiscount(250, 0.15); 

// Task 3: Arrow Function
// Write an arrow function that applies a fee
const calculateServiceFee = (amount, serviceType) => {
    let fee = 0 
    if (serviceType === "Premium") fee = amount * 0.15; 
    else if (serviceType === "Standard") fee = amount * 0.10; 
    else fee = amount * 0.05; 
    console.log(`Service Fee: $${fee}`);
}
// Testing the function 
calculateServiceFee(200, "Premium"); 
calculateServiceFee(500, "Standard"); 

// Task 4: Parameters and Arguments
// Writing a function that calculates rental costs
function calculateRentalCost(days, carType, insurance = false) {
    let types = {"Economy": 40, "Premium": 60, "Luxury": 100};
    let totalCost = (types[carType] * days);
    if (insurance) {
        totalCost += 20 * days;
    }
    console.log(`Total Rental Cost: $${totalCost}`);
}
// Testing the function 
calculateRentalCost(3, "Economy", true); 
calculateRentalCost(5, "Luxury", false); 

// Task 5: Returning Values
// Writing a function that returns total loan payment
function calculateLoanPayment(principal, rate, time) {
    let totalPayment = principal + (principal * rate * time);
    return `Total Payment: $${totalPayment}`;
}
// Testing the function 
console.log (calculateLoanPayment(1000, 0.05, 2));
console.log (calculateLoanPayment(5000, 0.07, 3));
