function showPrompt() {
    const userInput = window.prompt(`
    Pilih menu :
    1. Penjumlahan
    2. Pengurangan
    3. Pembagian
    4. Perkalian
    5. Pangkat 2
    6. Akar pangkat 2
    7. Akar pangkat 3
    `);

    function showMenuAgain() {
        const showMenuAgain = confirm("Do you want to show the menu again?");
        if (showMenuAgain) {
            showPrompt();
        }
    }

    if (userInput !== null) {
        switch (userInput) {
            case "1":
                calculate("add")
                break;
            case "2":
                calculate("substract");
                break;
            case "3":
                calculate("divide");
                break;
            case "4":
                calculate("multiply");
                break;
            case "5":
                calculate2("secondPow");
                break;
            case "6":
                calculate2("rootSecondPow");
                break;
            case "7":
                calculate2("rootThirdPow");
                break;
            default:
                alert("Invalid menu")
                showMenuAgain()
        }
    }
    function calculate(operation) {
        const value1 = parseFloat(window.prompt("Enter the first value:"));
        const value2 = parseFloat(window.prompt("Enter the second value:"));
        let result;
        if (value1 !== NaN && value2 !== NaN) {
            switch (operation) {
                case "add":
                    result = value1 + value2;
                    break;
                case "substract":
                    result = value1 - value2;
                    break;
                case "divide":
                    result = value1 / value2;
                    break;
                case "multiply":
                    result = value1 * value2;
                    break;
            }
            alert(`${value1} ${operation} by ${value2} = ${result}`)
            showMenuAgain()
        } else {
            alert("Invalid input!")
            showMenuAgain()
        }

        function calculate2(operation) {
            const value1 = parseFloat(window.prompt("Enter the value:"))
            let result;
            let operationName
            if (value1 !== NaN) {
                switch (operation) {
                    case "secondPow":
                        operationName = "Second pow of";
                        result = Math.pow(value1, 2);
                        break;
                    case "rootSecondPow":
                        operationName = "Root second pow of";
                        result = Math.sqrt(value1);
                        break;
                    case "rootThirdPow":
                        operationName = "Root third pow of"
                        result = Math.cbrt(value1)
                        break;
                }
                alert(`${operationName} ${value1} is ${result}`)
                showMenuAgain()
            } else {
                alert("Invalid inputted value!")
                showMenuAgain()
            }
        }
    }
}