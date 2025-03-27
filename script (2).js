function salvarEstado() {
    const estados = {};
    document.querySelectorAll('.circle').forEach(circle => {
        estados[circle.dataset.info] = circle.className;
    });
    localStorage.setItem('estadoCirculos', JSON.stringify(estados));
    console.log("Estado salvo:", estados);
}

function restaurarEstado() {
    const estados = JSON.parse(localStorage.getItem('estadoCirculos'));
    console.log("Estado restaurado:", estados);
    if (estados) {
        document.querySelectorAll('.circle').forEach(circle => {
            if (estados[circle.dataset.info]) {
                circle.className = estados[circle.dataset.info];
            }
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("Página carregada!");
    restaurarEstado();
});

