const form = document.getElementById('upload-form');
const fileInput = document.getElementById('file-input');
const loadingContainer = document.getElementById('loading-container');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  if (fileInput.files.length === 0) {
    alert('Please select a file to upload!');
    return;
  }

  loadingContainer.style.display = 'block'; // Show loading animation
  // Simulate upload time (remove for actual upload)
  setTimeout(() => {
    loadingContainer.style.display = 'none'; // Hide loading animation
    form.submit(); // Submit the form after simulated upload
  }, 2000); // Replace 2000 with actual upload time (if known)
});
