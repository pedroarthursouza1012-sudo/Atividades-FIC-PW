const div_media = document.getElementById("media");

let materiaSelecionada = "Português"; // valor inicial

function mostrar() {

    let n1 = Number(document.getElementById("nota1").value);
    let n2 = Number(document.getElementById("nota2").value);
    let n3 = Number(document.getElementById("nota3").value);
    let n4 = Number(document.getElementById("nota4").value);

    if (
        isNaN(n1) || n1 < 0 || n1 > 10 ||
        isNaN(n2) || n2 < 0 || n2 > 10 ||
        isNaN(n3) || n3 < 0 || n3 > 10 ||
        isNaN(n4) || n4 < 0 || n4 > 10
    ) {
        alert("Preencha os campos corretamente");
        return;
    }

    let media = (n1 + n2 + n3 + n4) / 4;

    div_media.innerHTML = `
        <p>
            Média em <strong>${materiaSelecionada}</strong>:
            ${media.toFixed(2)}
        </p>
    `;
}

const opcoes = document.querySelectorAll(".opcao");

opcoes.forEach(opcao => {
    opcao.addEventListener("click", () => {

        document.querySelector(".opcao.ativa")
            ?.classList.remove("ativa");

        opcao.classList.add("ativa");

        materiaSelecionada = opcao.textContent.trim();
    });
});
