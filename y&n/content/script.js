console.log("nokturnalplague");


const nao = document.getElementById("nao");

nao.addEventListener("mouseover", () => {
    const maxW = window.innerWidth - 370; //120 é a largura do botão, 250 o tamanho da borda dele
    const maxH = window.innerHeight - 100; //40 é a altura do botão
    //Diminuímos esses valores para que ele não vá para fora da tela atual e expanda a página

    const randomX = Math.floor(Math.random() * maxW);
    const randomY = Math.floor(Math.random() * maxH);

    //Mudar no CSS, precisa da "position: absolute" para funcionar
    nao.style.left = randomX + "px";
    nao.style.top = randomY + "px";
});

