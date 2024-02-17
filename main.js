document.addEventListener('DOMContentLoaded', function() {
    let countdownTime = 600; // 10 minutes in seconds
  
    function updateTimer() {
      let minutes = Math.floor(countdownTime / 60);
      let seconds = countdownTime % 60;
  
      document.getElementById('minutes').textContent = minutes < 10 ? '0' + minutes : minutes;
      document.getElementById('seconds').textContent = seconds < 10 ? '0' + seconds : seconds;
  
      countdownTime--;
  
      if (countdownTime < 0) {
        clearInterval(timerInterval);
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
      }
    }
  
    let timerInterval = setInterval(updateTimer, 1000);
  });

  function triggerAction() {
    // This function can be used to trigger an action, such as opening a signup form or performing some other action.
    alert('You clicked the Sign Up button!');
    // You can replace the alert with your desired action.
  }

  document.addEventListener('DOMContentLoaded', function() {
    setTimeout(showForm, 15000); // Show the form after 15 seconds
  });
  
  function showForm() {
    var formContainer = document.getElementById('formContainer');
    formContainer.style.bottom = '0'; // Slide up the form container
  }