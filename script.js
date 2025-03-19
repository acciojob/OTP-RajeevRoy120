//your JS code here. If required.
const inputs = document.querySelectorAll('.code');

    // Focus on the first input field when the page loads
    window.addEventListener('load', () => inputs[0].focus());

    // Handle typing and backspace
    inputs.forEach((input, index) => {
      input.addEventListener('input', (e) => {
        // Allow only numeric input
        const value = e.target.value;
        if (!/^[0-9]$/.test(value)) {
          e.target.value = ''; // Clear non-numeric characters
          return;
        }

        // Move to the next input if available
        if (value && index < inputs.length - 1) {
          inputs[index + 1].focus();
        }
      });

      // Handle backspace and delete keys
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace') {
          if (input.value === '') {
            // If empty, go to previous input
            if (index > 0) {
              inputs[index - 1].focus();
            }
          } else {
            // If not empty, clear the value
            input.value = '';
          }
        }
      });

      // Handle arrow keys for better navigation
      input.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft' && index > 0) {
          inputs[index - 1].focus();
        }
        if (e.key === 'ArrowRight' && index < inputs.length - 1) {
          inputs[index + 1].focus();
        }
      });
