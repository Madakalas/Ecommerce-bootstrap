
var button = document.getElementById('showButton');
var content = document.getElementById('content');

// Add click event listener to the button
button.addEventListener('click', function() {
    // Toggle the display of the content
    if (content.style.display === 'none') {
        content.style.display = 'block';
    } else {
        content.style.display = 'none';
    }
});
