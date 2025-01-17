setTimeout(() => {
  const statusMessage = document.getElementById('status-message');
  statusMessage.textContent = "Safe! Redirecting you now...";
  document.body.classList.add('fade-out');
  setTimeout(() => {
    window.location.href = "https://phans.bio/1";
  }, 500);
}, 2000);