// Coutdown Function 

$(document).ready(function() {
    // Set the date you're counting down to
    var countDownDate = new Date("Dec 22, 2023 20:00:00").getTime();

    // Utility function to format numbers below 10 with a leading zero
    function formatNumber(n) {
        return n < 10 ? '0' + n : n;
    }

    // Update the countdown every 1 second
    var interval = setInterval(function() {

        // Get the current date and time
        var now = new Date().getTime();

        // Find the time difference between now and the countdown date
        var distance = countDownDate - now;

        // Calculate days, hours, minutes, and seconds
        var days = formatNumber(Math.floor(distance / (1000 * 60 * 60 * 24)));
        var hours = formatNumber(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        var minutes = formatNumber(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
        var seconds = formatNumber(Math.floor((distance % (1000 * 60)) / 1000));

        // Display the results in the elements with id="days", "hours", "minutes", and "seconds"
        $("#days").text(days);
        $("#hours").text(hours);
        $("#minutes").text(minutes);
        $("#seconds").text(seconds);

        // If the countdown is finished, display some text
        if (distance < 0) {
            clearInterval(interval);
            $(".countdown-row-container").html("<h3>It's time!</h3>");
        }
    }, 1000);
});