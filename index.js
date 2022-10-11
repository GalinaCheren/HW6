const fistNumber = +prompt("Write your fist number here:");
const secondNumber = +prompt("Write your second number here:");
if (fistNumber && secondNumber) {
  alert(`The person is write ${fistNumber} and ${fistNumber} :
 ${fistNumber} + ${secondNumber} = ${fistNumber + secondNumber}
 ${fistNumber} - ${secondNumber} = ${fistNumber - secondNumber}
 ${fistNumber} * ${secondNumber} = ${fistNumber * secondNumber}
 ${fistNumber} / ${secondNumber} = ${fistNumber / secondNumber}`);
} else {
  alert("Wron!");
}
