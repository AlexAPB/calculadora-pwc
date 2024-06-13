const coworkersTextField = document.querySelector("#coworkers-text-field");
const salaryByHourTextField = document.querySelector("#salary-by-hour-text-field");

const coworkersResult = document.querySelector("#coworkers-result");
const distractedCoworkersResult = document.querySelector("#distracted-coworkers-result");

const distractedCoworkersInput = document.querySelector("#distracted-coworkers-input");
const wastingTimeCoworkersResult = document.querySelector("#wasting-time-coworkers-result");

const wastingTimeCoworkersInput = document.querySelector("#wasting-time-coworkers-input");
const lostHoursResult = document.querySelector("#lost-hours-result");

const lostHoursInput = document.querySelector("#lost-hours-input");
const salaryByHourInput = document.querySelector("#salary-by-hour-input");
const lostMoneyResult = document.querySelector("#lost-money-result");

const errorMessage = document.querySelector("#error-message");

var container = document.querySelector(".hidden");
var showing = false;

function calculate() {
    if(verifyInput()) {
        errorMessage.className = "error-showing";
        return;
    } else {
        errorMessage.className = "error-hidden";
    }

    var coworkersNumber = coworkersTextField.value;
    var salary = salaryByHourTextField.value;
    var salaryByHour = salary * 1.8 / 21 / 8;
    var distractedCoworkers = Math.round(coworkersNumber * 0.26);
    var wastingTimeCoworkers = Math.round(distractedCoworkers * 0.56);
    var lostHours = wastingTimeCoworkers * 156;
    var lostMoney = salaryByHour * lostHours;

    coworkersResult.textContent = coworkersNumber.toLocaleString("pt-BR");
    distractedCoworkersResult.textContent = distractedCoworkers.toLocaleString("pt-BR");

    distractedCoworkersInput.textContent = distractedCoworkers.toLocaleString("pt-BR");
    wastingTimeCoworkersResult.textContent = wastingTimeCoworkers.toLocaleString("pt-BR");

    wastingTimeCoworkersInput.textContent = wastingTimeCoworkers.toLocaleString("pt-BR");
    lostHoursResult.textContent = lostHours.toLocaleString("pt-BR");

    lostHoursInput.textContent = lostHours.toLocaleString("pt-BR");
    salaryByHourInput.textContent = salaryByHour.toLocaleString("pt-BR", {style: "currency", currency: "BRL"});
    lostMoneyResult.textContent = lostMoney.toLocaleString("pt-BR", {style: "currency", currency: "BRL"});

    if(showing == false) {
        container.className = "showing";
        showing = true;
    }

    var pageHeight = document.body.scrollHeight || document.documentElement.scrollHeight;

    window.scrollTo({
    top: pageHeight,
    behavior: 'smooth'
    });
}

function verifyInput() {
    var coworkersNumber = parseInt(coworkersTextField.value);
    var salary = parseInt(salaryByHourTextField.value);

    if(!Number.isInteger(coworkersNumber)) {
        errorMessage.textContent = "Preencha o campo de funcionários com números!";
        return true;
    } else if(coworkersNumber <= 0) {
        errorMessage.textContent = "O campo de funcionários deve ser maior que 0!";
        return true;
    }

    if(!Number.isInteger(salary)) {
        errorMessage.textContent = "Preencha o campo de salário com números!";
        return true;
    } else if(salary <= 0) {
        errorMessage.textContent = "O campo de salário deve ser maior que 0!";
        return true;
    }

    return false;
}

function clearInput() {
    coworkersTextField.value = "";
    salaryByHourTextField.value = "";
}