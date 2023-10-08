const carSpeed = 100; // Speed of the car
function calculateDemeritPoints (speed) {
    const speedLimit = 70;
    const demeritPointsPer5KmHr = 1;
  
    if (speed < speedLimit) {
      return 'Ok';
    }
  
    // Calculate demerit points for exceeding the speed limit
    const demeritPoints = ((speed - speedLimit) / 5) 
    return `Demerit points: ${demeritPoints}`;
  };
  
  const demeritPointsResult = calculateDemeritPoints(carSpeed);
  
  console.log(demeritPointsResult); // Print the result
  
  