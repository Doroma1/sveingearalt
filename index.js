// Helper function to calculate the square of a number
function calculateSquare(number) {
    return number * number;
  }
  
  // Helper function to check if a number is even
  function isEven(number) {
    return number % 2 === 0;
  }
  
  // Helper function to generate a random number between a minimum and maximum value
  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Main function to demonstrate the helper functions
  function main() {
    // Calculate the square of a number
    const num = 5;
    const square = calculateSquare(num);
    console.log(`The square of ${num} is: ${square}`);
  
    // Check if a number is even
    const num2 = 10;
    if (isEven(num2)) {
      console.log(`${num2} is an even number.`);
    } else {
      console.log(`${num2} is an odd number.`);
    }
  
    // Generate a random number between 1 and 100
    const randomNum = generateRandomNumber(1, 100);
    console.log(`Random number between 1 and 100: ${randomNum}`);
  }
  
  // Call the main function to run the code
  main();
  