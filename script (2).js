// Função para salvar no LocalStorage
function salvarEstado() {
    const estados = {};
    document.querySelectorAll('.circle').forEach(circle => {
        estados[circle.dataset.info] = circle.className;
    });
    localStorage.setItem('estadoCirculos', JSON.stringify(estados));
}

// Função para restaurar do LocalStorage
function restaurarEstado() {
    const estados = JSON.parse(localStorage.getItem('estadoCirculos'));
    if (estados) {
        document.querySelectorAll('.circle').forEach(circle => {
            if (estados[circle.dataset.info]) {
                circle.className = estados[circle.dataset.info];
            }
        });
    }
}

// Modificar a função de clique para salvar alterações
function toggleCircle(event) {
    const senha = prompt("Digite a senha para modificar:");
    if (senha !== "123") {
        alert("Senha incorreta!");
        return;
    }

    const circle = event.target;

    if (circle.classList.contains('red')) {
        circle.classList.remove('red');
        circle.classList.add('yellow');
    } else if (circle.classList.contains('yellow')) {
        circle.classList.remove('yellow');
    } else {
        circle.classList.add('red');
    }

    salvarEstado();  // Salvar mudanças após clicar
}

// Restaurar estado ao carregar a página
document.addEventListener("DOMContentLoaded", restaurarEstado);
