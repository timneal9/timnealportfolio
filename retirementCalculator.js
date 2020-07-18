//Timothy Neal - MMRWebApp - WPC 430 - Online

"use strict";

// Setting up variables
var startingAge = 0;
var retirementAge = 0;
var startingSalary = 0;
var annualSavingsPercent = 0;
var annualRaisePercent = 0;
var interestRatePercent = 0;

var totalYearsToInvest = 0;
var totalRetirementFund = 0;
var totalLifetimeSalary = 0;
var totalAmountSaved = 0;
var totalEarnedInterest = 0;

var currentSalary = 0;
var currentSavings = 0;
var currentInterest = 0;
var currentRetirement = 0;

// Function to clear all input fields in form
function clearInputs(form) {
    for (var i = 0; i < form.elements.length; i++) {
        form.elements[i].value = "";
    }
}

// Function to load default values into form and tables
function loadDefaults(form) {

    form.elements[0].value = "25";
    form.elements[1].value = "65";
    form.elements[2].value = "50000";
    form.elements[3].value = "10.0";
    form.elements[4].value = "2.0";
    form.elements[5].value = "7.0";

    runCalculations(form);
}

// Function to calculate values and populate tables 
function runCalculations(form) {
    if (!form.checkValidity()) {
        alert("See highlighted input boxes, there are input errors");
    } else {
        // Get inputs from form
        startingAge = Number(form.elements[0].value);
        retirementAge = Number(form.elements[1].value);
        startingSalary = Number(form.elements[2].value);
        annualSavingsPercent = Number(form.elements[3].value);
        annualRaisePercent = Number(form.elements[4].value);
        interestRatePercent = Number(form.elements[5].value);

        // Initial variable calculations 
        totalYearsToInvest = retirementAge - startingAge;
        currentSalary = startingSalary;
        annualSavingsPercent *= 0.01;
        annualRaisePercent *= 0.01;
        interestRatePercent *= 0.01;

        for (var year = startingAge; year <= retirementAge; year++) {

            currentSavings = currentSalary * annualSavingsPercent;
            currentInterest = (currentSavings + currentRetirement) * interestRatePercent;
            currentRetirement += (currentSavings + currentInterest);

            // Update summary table variables
            totalRetirementFund += (currentSavings + currentInterest);
            totalLifetimeSalary += currentSalary;
            totalAmountSaved += currentSavings;
            totalEarnedInterest += currentInterest;

            // Update current salary
            currentSalary += (currentSalary * annualRaisePercent);
        }

        // Update Summary Table
        updateSummaryTable();

        // Reset variables
        currentSavings = 0;
        currentInterest = 0;
        currentRetirement = 0;
        totalYearsToInvest = 0;
        totalRetirementFund = 0;
        totalLifetimeSalary = 0;
        totalAmountSaved = 0;
        totalEarnedInterest = 0;
    } // end else
} // end run calcuations function

function updateSummaryTable() {
    // Format numbers and update elements
    document.getElementById("yearsToInvestCellId").innerHTML = formatNumberWithCommas(totalYearsToInvest);
    document.getElementById("retirementCellId").innerHTML = formatNumberWithCommas(totalRetirementFund);
    document.getElementById("salaryCellId").innerHTML = formatNumberWithCommas(totalLifetimeSalary);
    document.getElementById("savingsCellId").innerHTML = formatNumberWithCommas(totalAmountSaved);
    document.getElementById("interestCellId").innerHTML = formatNumberWithCommas(totalEarnedInterest);
}

function formatNumberWithCommas(num) {
    var resultString = "";
    var numString    = num.toFixed(0);
    var commaArray   = [];
    var revArray     = numString.split("").reverse();
    var i = 1;

    while (revArray.length > 0) {
        commaArray = commaArray.concat(revArray.shift())
        if (i%3 === 0 && revArray.length !== 0) { 
            commaArray = commaArray.concat([","]);
        }
        i=i+1;
    }
    resultString = commaArray.reverse().join('');
    return resultString;
}