document.addEventListener('DOMContentLoaded', () => {
  const noButton = document.getElementById('noButton');
  const yesButton = document.getElementById('yesButton');

  if (noButton) {
    noButton.addEventListener('mouseover', moveNoButton);
  }

  if (yesButton) {
    yesButton.addEventListener('click', () => {
      window.location.href = 'date-time.html';
    });
  }

  if (document.querySelector('button[onclick="confirmDate()"]')) {
    document.querySelector('button[onclick="confirmDate()"]').addEventListener('click', confirmDate);
  }
});

function moveNoButton() {
  const noButton = document.getElementById('noButton');
  const x = Math.random() * (window.innerWidth - noButton.clientWidth);
  const y = Math.random() * (window.innerHeight - noButton.clientHeight);
  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;
}

function confirmDate() {
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  const location = document.getElementById('location').value;

  if (date && time && location) {
    // Store data in localStorage
    localStorage.setItem('date', date);
    localStorage.setItem('time', time);
    localStorage.setItem('location', location);

    // Send data to the server
    fetch(' https://three-aliens-itch.loca.lt', { // Update this URL if deploying the server
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ date, time, location })
    })
    .then(response => response.text())
    .then(data => {
      console.log(data);
      window.location.href = 'confirmation.html';
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  } else {
    alert('Please select a date, time, and location.');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname.endsWith('confirmation.html')) {
    const date = localStorage.getItem('date');
    const time = localStorage.getItem('time');
    const location = localStorage.getItem('location');
    const message = `Great! See you on ${date} at ${time} at ${location}!`;
    document.getElementById('confirmationMessage').innerText = message;
  }
});
