document.getElementById('btn_modoOscuro').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    
    // Cambiar el texto del botón según el modo
    if (document.body.classList.contains('dark-mode')) {
        this.textContent = 'Modo Claro';
    } else {
        this.textContent = 'Modo Oscuro';
    }
});
