let salary = 55000;
let payeAmount, NHIF, nssfDeductions, totalTaxes, netSalary;

const calculateTax = () => {
  // Calculate PAYE (Pay As You Earn) based on salary
  const calculatePaye = () => {
    let paye;
    if (salary < 24000) {
      paye = salary * 0.01;
    } else if (salary >= 24001 && salary <= 32333) {
      paye = salary * 0.25;
    } else if (salary >= 32333) {
      paye = salary * 0.3;
    }
    return paye;
  };

  // Calculate NSSF (National Social Security Fund) deductions based on salary
  const NSSFCalculator = () => {
    nssfDeductions = salary * 0.06;
    return nssfDeductions;
  };

  // Calculate NHIF (National Hospital Insurance Fund) contributions based on salary
  const nhifCalculator = () => {
    if (salary < 5999) {
      NHIF = 150;
    } 
    else if (salary >= 6000 && salary <= 7999) {
      NHIF = 300;
    }
    else if (salary>=8000 && salary <=11999){
        NHIF = 400
    }
    else if (salary>=12000 && salary <=14999){
        NHIF = 500
    }
    else if (salary>=15000 && salary <=19999){
        NHIF = 600
    }
    else if (salary>=20000 && salary <=24999){
        NHIF = 750
    }
    else if (salary>=25000 && salary <=29999){
        NHIF = 850
    }
    else if (salary>=30000 && salary <=34999){
        NHIF = 900
    }
    else if (salary>=35000 && salary <=39999){
        NHIF = 950
    }
    else if (salary>=40000 && salary <=44999){
        NHIF = 1000
    }
    else if (salary>=45000 && salary <=49999){
        NHIF = 1100
    }
    else if (salary>=50000 && salary <=59999){
        NHIF = 1200
    }
    else if (salary>=60000 && salary <=69999){
        NHIF = 1300
    }
    else if (salary>=70000 && salary<=79999){
        NHIF = 1400
    }
    else if (salary>=80000 && salary<=89999){
        NHIF = 1500
    }
    else if (salary>=90000 && salary<=99999){
        NHIF = 1600
    }
    else if (salary>=100000){
        NHIF = 1700
    } 

    return NHIF;
  };

  // Calculate values
  payeAmount = calculatePaye();
  nssfDeductions = NSSFCalculator();
  NHIF = nhifCalculator();
  totalTaxes = payeAmount + NHIF + nssfDeductions;
  netSalary = salary - totalTaxes;

  // Display the result
  console.log(`Hello, your salary is ${salary}, NHIF is ${NHIF}, PAYE is ${payeAmount}, and your NSSF deduction is ${nssfDeductions}. Therefore, your total taxes are ${totalTaxes} and your net salary is ${netSalary}`);
};

// Call the function to calculate and display the tax information
calculateTax();
