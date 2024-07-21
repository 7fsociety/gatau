document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById('load-button');
    const content = document.getElementById('content');

    button.addEventListener('click', function() {
        fetch('piss.html')
            .then(response => response.text())
            .then(data => {
                content.innerHTML = data;
            })
            .catch(error => console.error('Error:', error));
    });
});
