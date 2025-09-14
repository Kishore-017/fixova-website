document.addEventListener('DOMContentLoaded', () => {
    const projectForm = document.getElementById('projectForm');
    const submitButton = projectForm.querySelector('.submit-btn');
    const loadingSpinner = document.getElementById('loading');

    projectForm.addEventListener('submit', async (event) => {
        // Prevent the default form submission which reloads the page
        event.preventDefault();

        // Show loading spinner and disable the button
        submitButton.style.display = 'none';
        loadingSpinner.style.display = 'flex';

        // Get the form data
        const formData = new FormData(projectForm);
        const data = Object.fromEntries(formData.entries());

        try {
            // Send the data to your backend API endpoint
            const response = await fetch('http://localhost:5500/api/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok) {
                // If successful, show a success message and reset the form
                alert('Success! Your request has been submitted.');
                projectForm.reset();
            } else {
                // If the server returns an error, show it
                alert(`Error: ${result.message || 'Something went wrong.'}`);
            }

        } catch (error) {
            // If there's a network error or the server is down
            console.error('Submission error:', error);
            alert('Could not connect to the server. Please try again later.');
        } finally {
            // Hide the loading spinner and re-enable the button
            submitButton.style.display = 'block';
            loadingSpinner.style.display = 'none';
        }
    });
});