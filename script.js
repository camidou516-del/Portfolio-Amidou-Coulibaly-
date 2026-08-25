const form = document.getElementById('contactForm');
const result = document.getElementById('formResult');
const submitBtn = document.getElementById('submitBtn');

if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // État de chargement
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
            let json = await response.json();
            if (response.status == 200) {
                result.style.color = '#4CAF50';
                result.innerHTML = 'Message envoyé avec succès !';
                form.reset();
            } else {
                console.log(response);
                result.style.color = '#f44336';
                result.innerHTML = json.message || 'Une erreur est survenue.';
            }
        })
        .catch(error => {
            console.log(error);
            result.style.color = '#f44336';
            result.innerHTML = 'Impossible d\'envoyer le message pour le moment.';
        })
        .then(function() {
            submitBtn.disabled = false;
            submitBtn.innerHTML = 'Envoyer le message <i class="fas fa-paper-plane"></i>';
            setTimeout(() => {
                result.style.display = 'none';
            }, 5000);
        });
    });
}