$("#decreaseBtn").on( "click", function() {
    let ticketNumber = parseInt($("#ticketNumber").html());
    
    if (ticketNumber <= 0) {
        console.log("Can't have negative ticket");
        return;
    } else {
        decreaseTicket = ticketNumber-1;
        $("#ticketNumber").html(decreaseTicket);
        console.log("Ticket number increased");
    }
    
});

$("#increaseBtn").on( "click", function() {
    let ticketNumber = parseInt($("#ticketNumber").html());

    increasedTicketNumber = ticketNumber+1;
    $("#ticketNumber").html(increasedTicketNumber);
    console.log("Ticket number increased");  
    
});