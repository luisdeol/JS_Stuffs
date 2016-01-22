var keys = document.querySelectorAll('#calculator span');
var operators = ['+', '-', 'x', '/'];
var decimalAdded = false;


for (var i = 0; i < keys.length; i++){
    keys[i].onclick = function (e) {
        var input = document.querySelector(".screen"); 
        var inputVal = input.innerHTML; //Getting the innerHTML of the .screen 
        var btnVal = this.innerHTML; //Getting the selected button text

        if (btnVal == 'C') {
            input.innerHTML = ''; //Cleaning the .screen
            decimalAdded = false;
        }
        else if (btnVal == "=") {
            var equation = inputVal;
            var lastChar = equation[equation.length - 1];

            //Replacing x in the .screen for * to allow the operation
            equation = equation.replace(/x/g, '*');

            if (operators.indexOf(lastChar) > -1 || lastChar == '.')
                equation = equation.replace(/.$/, '');
            
            if (equation)
                input.innerHTML = eval(equation);

            decimalAdded = false;
        }
        else if (operators.indexOf(btnVal) > -1) {
            var lastChar = inputVal[inputVal.length - 1];

            if (inputVal != '' && operators.indexOf(lastChar) == -1)
                input.innerHTML += btnVal;

            else if (inputVal == '' && btnVal == '-')
                input.innerHTML += btnVal;

            if (operators.indexOf(lastChar) > -1 && inputVal.length > 1)
                input.innerHTML = inputVal.replace(/.$/, btnVal);
        }
        else if (btnVal == '.') {
            if (!decimalAdded) {
                input.innerHTML = btnVal;
                decimalAdded = true;
            }
        }
        else {
            input.innerHTML += btnVal;
        }
    }
}