
// Order of booleans : CreditCard, Paypal, Orange Money
paymentMethodSelection = [false, false, false];

var creditCardBtn = $("#creditCardBtn");
var paypalBtn = $("#paypalBtn");
var orangeMoneyBtn = $("#orangeMoneyBtn"); 

function removeAllSelectClassFromBtn() {
    creditCardBtn.removeClass("selected");
    paypalBtn.removeClass("selected");
    orangeMoneyBtn.removeClass("selected");
}

$("#creditCardBtn").on( "click", function(){
    if(!(creditCardBtn.hasClass("selected"))) {
        removeAllSelectClassFromBtn();
        creditCardBtn.addClass("selected");
    }
});
$("#paypalBtn").on( "click", function(){
    if(!(paypalBtn.hasClass("selected"))) {
        removeAllSelectClassFromBtn();
        paypalBtn.addClass("selected");
    }
});
$("#orangeMoneyBtn").on( "click", function(){
    if(!(orangeMoneyBtn.hasClass("selected"))) {
        removeAllSelectClassFromBtn();
        orangeMoneyBtn.addClass("selected");
    }
});

