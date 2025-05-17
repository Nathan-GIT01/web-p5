document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('suggestion-form');
    const input = document.getElementById('suggestion-input');
    const list = document.getElementById('suggestion-list');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const suggestion = input.value.trim();
        if (suggestion) {
            const li = document.createElement('li');
            li.textContent = suggestion;
            list.appendChild(li);
            input.value = '';
        }
    });
});