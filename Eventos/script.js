let btn_motrar = document.getElementById("btn-mostrar");
let p = document.getElementById("p");
const body = document.getElementById("body");
const btn_cor = document.getElementById("cor")
const tom = document.getElementById("spider3-img")
const tobey = document.getElementById("spider1-img")


function mostrarDataAtual() {
            const hoje = new Date();
            const opcoes = { day: '2-digit', month: '2-digit', year: 'numeric' };
            const dataFormatada = hoje.toLocaleDateString('pt-BR', opcoes);
            document.getElementById('dataAtual').textContent = dataFormatada;
        }


        mostrarDataAtual();



btn_motrar.addEventListener("click",()=>{

p.classList.toggle("show");

})

btn_cor.addEventListener("click",()=>{

if (body.style.backgroundColor ==="rgb(141, 255, 206)") {
    body.style.backgroundColor = "white";
} else {
    body.style.backgroundColor = "rgb(141, 255, 206)";
}    
})

tom.addEventListener("click",()=>{

tom.style.display = "none"
tobey.style.display = "block"

})

tobey.addEventListener("click",()=>{

tobey.style.display = "none"
tom.style.display = "block"

})