import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 9999;
let pinAnswer = await inquirer.prompt({
    name: "pin",
    message: 'Enter your PIN',
    type: "number"
});
if (pinAnswer.pin === myPin) {
    console.log("Correct PIN");
    let operationAnswer = await inquirer.prompt([{
            name: "operation",
            message: "select option",
            type: "list",
            choices: ["withdraw", "Fast cash", "check cash"]
        }]);
    //user select withdraw
    if (operationAnswer.operation === "withdraw") {
        let amountAns = await inquirer.prompt([{
                name: "amount",
                message: "Enter your amount",
                type: "number"
            }]);
        if (amountAns.amount <= myBalance) {
            let balance = myBalance - amountAns.amount;
            console.log(`the remaining balance is ${balance}`);
        }
        else {
            console.log('You have insufficient balance');
        }
    }
    // if user select fast cash
    else if (operationAnswer.operation === "Fast cash") {
        let fastcashAns = await inquirer.prompt([{
                name: "amount",
                type: "list",
                choices: ["1000", "3000", "5000", "15000"]
            }]);
        if (fastcashAns.amount <= myBalance) {
            let balance2 = myBalance - fastcashAns.amount;
            console.log(`the remaining balance is ${balance2}`);
        }
        else {
            console.log('You have insufficient balance');
        }
    }
    // if user select check balance
    else if (operationAnswer.operation === "check cash") {
        console.log(myBalance);
    }
}
else {
    console.log("Incorrect Pin");
}
