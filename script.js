document.addEventListener("DOMContentLoaded", function() {
    const passwordForm = document.getElementById("passwordForm");
    const passwordOutput = document.getElementById("passwordOutput");

    passwordForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const length = document.getElementById("length").value;

        fetch("/generate-password", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ length: length })
        })
        .then(response => response.json())
        .then(data => {
            passwordOutput.innerHTML = "<strong>Senha Gerada:</strong> " + data.password;
        })
        .catch(error => {
            console.error("Erro ao gerar a senha:", error);
        });
    });
});
