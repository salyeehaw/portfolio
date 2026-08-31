function openArduinoDrawer() {
    const modal = document.getElementById('arduino-modal');
    if (modal) {
        modal.style.display = 'flex';
    }
}

function closeArduinoDrawer() {
    const modal = document.getElementById('arduino-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

window.addEventListener('click', function(event) {
    const modal = document.getElementById('arduino-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

const easterEggBtn = document.getElementById('easter-egg-btn');
const secretYapBox = document.getElementById('secret-yap');

if (easterEggBtn && secretYapBox) {
    easterEggBtn.addEventListener('click', function(e) {
        e.preventDefault(); // Stop instant anchor jump
        if (secretYapBox.style.display === 'block') {
            secretYapBox.style.display = 'none';
        } else {
            secretYapBox.style.display = 'block';
        }
    });
}

const contactForm = document.getElementById('contact-form');
const formResult = document.getElementById('form-result');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); 
        
        const formData = new FormData(contactForm);
        formResult.textContent = "Sending message...";

        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status === 200) {
                formResult.textContent = "Success! Message sent.";
                contactForm.reset();
            } else {
                formResult.textContent = json.message || "Something went wrong!";
            }
        })
        .catch(error => {
            console.error(error);
            formResult.textContent = "Network error! Please try again.";
        });
    });
}