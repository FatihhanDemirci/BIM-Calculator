const inputWt = document.querySelector(".weight");
const inputHt = document.querySelector(".height");
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");
const bmi = document.querySelector(".bmi");

const run = () => {
  const weight = parseFloat(inputWt.value);
  const height = parseFloat(inputHt.value) / 100;
  if (isNaN(weight) || weight <= 0) {
    result.textContent = "Please enter a valid weight.";
    bmi.textContent = "";
    return;
  }

  if (isNaN(height) || height <= 0) {
    result.textContent = "Please enter a valid height.";
    bmi.textContent = "";
    return;
  }
  const calc = weight / (height * height);
  bmi.textContent = `BMİ = ${calc.toFixed(2)}`;
  if (calc < 18.5) {
    result.textContent = `Weight Condition: Weak`;
  } else if (calc >= 18.5 && calc <= 24.9) {
    result.textContent = `Weight Condition: Normal`;
  } else if (calc >= 25.0 && calc <= 29.9) {
    result.textContent = `Weight Condition: Overweight`;
  } else if (calc >= 30.0 && calc <= 34.9) {
    result.textContent = `Weight Condition: Obese`;
  } else if (calc >= 35.0 && calc <= 39.9) {
    result.textContent = `Weight Condition: Severely Obese`;
  } else if (calc >= 40) {
    result.textContent = `Weight Condition: Morbid Obese`;
  }
};
btn.addEventListener("click", run);
