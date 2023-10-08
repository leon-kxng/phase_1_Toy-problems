const calculateGrade = (userInput) => {
    // Convert the user input to a number using the unary plus operator (+)
    const userMarks = +userInput;
  
    // Check if the input is a number and within the valid range
    if (userMarks >= 0 && userMarks <= 100) {
      const grade =
        userMarks > 79 ? 'A' :
        userMarks >= 60 ? 'B' :
        userMarks >= 50 ? 'C' :
        userMarks >= 40 ? 'D' : 'E';
  
      console.log(`Grade: ${grade}`);
    } else {
      console.log('Invalid input. Marks should be between 0 and 100.');
    }
  };
  
  // Example usage: Calculate the grade using the provided input (90)
  const userInput = '90';
  calculateGrade(userInput);
  

