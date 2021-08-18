function getPin4() {
    // this is number 
    const pin = Math.round(Math.random() * 10000);
    // convert to string 
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    } else {
        console.log('you got ', pin);
        // this is recursive way bro 
        return getPin4();

    }
}

function getPin() {
    const pinNumber = getPin4();
    document.getElementById('display-pin').value = pinNumber;
}
document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText
    const calc = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calc.value = '';
        }
    }
    else {
        const previousCalc = calc.value;
        const currentCalc = previousCalc + number;
        calc.value = currentCalc;
    }

});
function veriyfiPin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const successMessage = document.getElementById('notify-succes');
    const failMessage = document.getElementById('notify-fail');
    if (pin == typedNumbers) {

        successMessage.style.display = 'block';
        failMessage.style.display = 'none'
    } else {

        failMessage.style.display = 'block'
        successMessage.style.display = 'none';
    }
}