let hr=document.getElementById('b1')
let min=document.getElementById('b2')
let sec=document.getElementById('b3')

function countdown() {
    // Set the date we're counting down to
    var countDownDate = new Date("July 29, 2025 15:00:00").getTime(); // Replace with your target date and time

    // Update the countdown every 1 second
    var x = setInterval(function() {

        // Get the current date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for hours, minutes and seconds
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="countdown"
        // document.getElementById("countdown").innerHTML = hours + "h "
        // + minutes + "m " + seconds + "s ";


        hr.innerHTML=hours
        min.innerHTML=minutes
        sec.innerHTML=seconds
        // If the countdown is finished, display a message
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "EXPIRED";
        }
    }, 1000); // Update every 1 second
}

// Call the countdown function
countdown();
