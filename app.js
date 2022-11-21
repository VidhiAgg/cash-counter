var billAmount = document.querySelector('#bill-amount');

var nextBtn = document.querySelector("#next-btn");

var cashAmntLabel = document.querySelector("#cash-amnt");

var cashGiven = document.querySelector('#cash-amount')
var checkBtn = document.querySelector("#check-btn");
var message = document.querySelector("#error-message");
var noteDisplayTable = document.querySelector("#noteTable");
var noOfNotes = document.querySelectorAll("#noOfNotes");

var availabelnotes = [2000, 500, 100, 50, 20, 10,5, 1];
cashAmntLabel.style.display = "none";
cashGiven.style.display = "none";
checkBtn.style.display = "none";
noteDisplayTable.style.display = "none";

nextBtn.addEventListener("click",function displayNext(){
    cashAmntLabel.style.display = "block";
    cashGiven.style.display = "block";
    checkBtn.style.display = "block";
    
})
checkBtn.addEventListener("click", function validateBillAndCashAmount() {
    noteDisplayTable.style.display = "table";
    message.style.display = "none";
    if (billAmount.value > 0) {
        if (billAmount.value < cashGiven.value) {
            calculateReturnNotes(cashGiven.value - billAmount.value)
        } else {
            printErrorMessage("Amount should be less than cash given.");
        }

    } else if (aaisNaN(billAmount.value)) {
        printErrorMessage("Please enter the number");

    } else {
        printErrorMessage("Amount should be atleast greter than 0.");
    }
    function printErrorMessage(msg) {
        message.style.display = "block";
        message.innerText = msg;
    }
    function calculateReturnNotes(amount) {
        for (let index = 0; index < availabelnotes.length; index++) {
const note = Math.trunc(amount/availabelnotes[index]);
amount %=availabelnotes[index];
noOfNotes[index].innerText = note;

        }
    }
});
