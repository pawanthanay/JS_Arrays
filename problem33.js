function calculateBMI(weight, height) {
    const bmi = weight / (height * height);
    
    if (bmi < 18.5) {
      return 'Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      return 'Normal weight';
    } else if (bmi >= 25 && bmi <= 29.9) {
      return 'Overweight';
    } else {
      return 'Obese';
    }
}

  
const weight = 67; // in kilograms
const height = 1.7; // in meters
const bmi = calculateBMI(weight, height);
console.log(`BMI: ${bmi}`);
