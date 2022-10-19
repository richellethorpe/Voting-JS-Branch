window.onload = function() {

  const form = document.querySelector("form");
  // we create an event handler for the form's submission
  form.onsubmit = function(event) {
    event.preventDefault();


    let voterinfo = document.getElementById("voterinfo");
    voterinfo.setAttribute("class", "hidden");
    let under18Message = document.getElementById("youngster");
    under18Message.setAttribute("class", "hidden");

    // find age value
    const age = parseInt(document.querySelector("input#age").value);

    // we check if the age is greater than 18
    if (age > 21) {  // updated to check if age is greater than 18
      voterinfo.removeAttribute("class");
    } else if (age === 18) { // new else if statement
      window.alert("Congrats on getting to vote!");
      voterinfo.removeAttribute("class");
    } else {
      under18Message.removeAttribute("class");
    }
  };
};