document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const result = document.getElementById('formResult');
    const submitBtn = document.getElementById('submitBtn');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Empêche la redirection
            
            submitBtn.disabled = true;
            submitBtn.innerHTML = 'Envoi en cours... <i class="fas fa-spinner fa-spin"></i>';
            result.style.display = 'block';
            result.style.color = '#e5a93c';
            result.innerHTML = 'Veuillez patienter...';

            const formData = new FormData(form);
            const object = Object.fromEntries(formData);
            const json = JSON.stringify(object);

            fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: json
            })
            .then(async (response) => {
                let jsonResponse = await response.json();
                if (response.status === 200) {
                    result.style.color = '#4CAF50';
                    result.innerHTML = 'Message envoyé avec succès !';
                    form.reset();
                } else {
                    result.style.color = '#f44336';
                    result.innerHTML = jsonResponse.message || 'Une erreur est survenue.';
                }
            })
            .catch(error => {
                console.error(error);
                result.style.color = '#f44336';
                result.innerHTML = 'Impossible d\'envoyer le message pour le moment.';
            })
            .then(() => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = 'Envoyer le message <i class="fas fa-paper-plane"></i>';
                setTimeout(() => {
                    result.style.display = 'none';
                }, 5000);
            });
        });
    }
});