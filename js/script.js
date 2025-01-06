document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const fecha = document.getElementById('fecha').value;
    const correo = document.getElementById('correo').value;
    const mensaje = document.getElementById('mensaje').value;

    const responseMessage = document.getElementById('responseMessage');

    try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbzUDkyWnPwRaSaNUBu1BtKfAYKCo6iocPAGLeuxuNjGDVxY2ZPE4BKthQxE30VRPa5p/exec', {
            redirect: "follow",
            method: 'POST',
            headers: {
                "Content-Type": "text/plain;charset=utf-8",
              },
            body: JSON.stringify({ nombre, fecha, correo, mensaje }),
        });

        if (response.ok) {
            responseMessage.textContent = 'Formulario enviado con éxito.';
            responseMessage.style.color = 'green';
            document.getElementById('contactForm').reset();
        } else {
            throw new Error('Error al enviar el formulario.');
        }
    } catch (error) {
        responseMessage.textContent = 'Hubo un problema al enviar el formulario.';
        responseMessage.style.color = 'red';
    }
});


//https://script.google.com/macros/s/AKfycbzUDkyWnPwRaSaNUBu1BtKfAYKCo6iocPAGLeuxuNjGDVxY2ZPE4BKthQxE30VRPa5p/exec
