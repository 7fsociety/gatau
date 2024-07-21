document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('.nav-link');
    const content = document.getElementById('content');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const url = this.getAttribute('href');

            fetch(url)
                .then(response => response.text())
                .then(data => {
                    content.innerHTML = data;
                })
                .catch(error => console.error('Error:', error));
        });
    });
});