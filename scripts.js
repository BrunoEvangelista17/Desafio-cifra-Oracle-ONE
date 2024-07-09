function criptografar() {
    const input = document.getElementById("inputText").value;
    let output = input
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById("outputText").innerText = output;

    if (input) {
        document.getElementById("placeholderImg").style.display = 'none';
        document.getElementById("instructionText").style.display = 'none';
        document.getElementById("outputText").style.display = 'block';
        document.getElementById("copyButton").style.display = 'inline-block'; // Exibe o botão copiar
    }
}

function descriptografar() {
    const input = document.getElementById("inputText").value;
    let output = input
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById("outputText").innerText = output;

    if (input) {
        document.getElementById("placeholderImg").style.display = 'none';
        document.getElementById("instructionText").style.display = 'none';
        document.getElementById("outputText").style.display = 'block';
        document.getElementById("copyButton").style.display = 'inline-block'; // Exibe o botão copiar
    }
}

function copiarTexto() {
    const outputText = document.getElementById("outputText").innerText;
    navigator.clipboard.writeText(outputText).then(() => {
        alert("Texto copiado para a área de transferência!");
    }).catch(err => {
        alert("Erro ao copiar texto: ", err);
    });
}
