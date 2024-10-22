/ Add event listener to button
document.querySelector('button').addEventListener('click', () => {
    alert('Thank you for ordering!');
});

// Validate form
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector('input[name="tamil"]').value;
    const email = document.querySelector('input[name="tamil@2004"]').value;
    const message = document.querySelector('textarea').value;
    if (name && email && message) {
        alert('Message sent!');
    } else {
        alert('Please fill out all fields.');
    }
});