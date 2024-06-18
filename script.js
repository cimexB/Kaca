document.addEventListener('DOMContentLoaded', (event) => {
    const startButton = document.getElementById('Zacni_z_igro');

    if (startButton) {
        startButton.addEventListener('click', () => {
            window.location.href = "igra.html";
        });
    }
});
