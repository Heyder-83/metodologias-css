const botones = document.querySelectorAll('.btn');

botones.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault(); // Evita navegación inmediata

        // Aplica el efecto visual
        btn.style.backgroundColor = '#ffac09';
        btn.style.boxShadow = '0 0 20px #ffac09';
        btn.style.transition = '.5s ease';

        const destino = btn.getAttribute('href');

        if (destino && destino !== '') {
            setTimeout(() => {
                window.location.href = destino;
            }, 500);
        }
    });
});
