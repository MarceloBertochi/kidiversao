const imagens = document.querySelectorAll('.galeria img');
let imagemIndex = 0;

function showNextImagem() {
    imagens [imagemIndex].style.opacity = 0;
    imagemIndex = (imagemIndex + 1) % imagens.length;
    imagens[imagemIndex].style.opacity = 1;
}

setInterval(showNextImagem, 4000);