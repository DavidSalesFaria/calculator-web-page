function displayCalculation(calc){
        document.body.querySelector('.calculation-paragraph')
          .innerText = calc;
      };

function updateCalculation(digit){
  if ((typeof digit) != 'string'){
    digit = `${digit}`
  }
  calculation += digit;
  displayCalculation(calculation);
  localStorage.setItem('calculation', calculation); 
}






let calculation = localStorage.getItem('calculation') || '';

// Display calculation whenever page loads
displayCalculation(calculation);