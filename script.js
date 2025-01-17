// Generate random Ray ID
function generateRayId() {
  const chars = '0123456789abcdef';
  let result = '';
  for (let i = 0; i < 16; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
}

// Update Ray ID on page load
document.addEventListener('DOMContentLoaded', () => {
  const rayIdSpan = document.querySelector('.ray-id span');
  rayIdSpan.textContent = generateRayId();
});