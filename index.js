const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click' ,()=> {
     navMenu.classList.toggle('nav-menu_visible');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('nav-menu_visible');
    });
});


contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    validateForm();
});

function validateForm() {
    const fullname = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    let isValid = true;

    // Validate Fullname
    if (!/^[a-zA-Z\s]+$/.test(fullname)) {
        alert('El nombre completo solo debe contener letras y espacios.');
        isValid = false;
    }

    // Validate Email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert('Por favor, ingrese un correo electrónico válido.');
        isValid = false;
    }

    // Validate Phone
    if (!/^\d+$/.test(phone)) {
        alert('El número telefónico solo debe contener números.');
        isValid = false;
    }

    // If all validations pass
    if (isValid) {
        contactForm.submit();
    }
}
