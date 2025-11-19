// Vanilla JS logic
document.addEventListener('DOMContentLoaded', () => {
  // Update copyright year dynamically
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear().toString();
  }
  
  console.log('Jérôme Audiard landing page loaded.');
});
