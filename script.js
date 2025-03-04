document.getElementById('sheetdb-form').addEventListener('submit', function (e) {
    e.preventDefault();

    fetch(this.action, {
        method: 'POST',
        body: new FormData(this),
    })
        .then(response => response.json())
        .then(data => {
            if (data.created) {
                document.getElementById("popup").classList.add("show");

                // Limpar o formulário
                document.getElementById('sheetdb-form').reset();

                // Fechar automaticamente após 3 segundos
                setTimeout(() => {
                    document.getElementById("popup").classList.remove("show");
                }, 3000);
            }
        })
        .catch(error => alert('Erro na conexão. Verifique sua internet.'));
});

// Fechar popup manualmente
document.getElementById("close-popup").addEventListener("click", function () {
    document.getElementById("popup").classList.remove("show");
});