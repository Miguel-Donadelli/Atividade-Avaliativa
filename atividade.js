let placarTime1 = 0;
let placarTime2 = 0;
let txtTime1 = document.getElementById("placar-time1");
let txtTime2 = document.getElementById("placar-time2");
let txtmensagem = document.getElementById("txtmensagem");
let buttonsTime1 = document.querySelectorAll("#placar .time:nth-child(1) .botoes-time button");
let buttonsTime2 = document.querySelectorAll("#placar .time:nth-child(2) .botoes-time button");
let finalizarButton = document.querySelector(".finalizar button");
let reiniciarButton = document.querySelector(".reiniciar button");

function aumentar(time) {
    if (time === 'time1') {
        placarTime1++;
    } else if (time === 'time2') {
        placarTime2++;
    }
    atualizarPlacar();
}

function diminuir(time) {
    if (time === 'time1' && placarTime1 > 0) {
        placarTime1--;
    } else if (time === 'time2' && placarTime2 > 0) {
        placarTime2--;
    }
    atualizarPlacar();
}

function aumentarDois(time) {
    if (time === 'time1') {
        placarTime1 += 2;
    } else if (time === 'time2') {
        placarTime2 += 2;
    }
    atualizarPlacar();
}

function diminuirDois(time) {
    if (time === 'time1' && placarTime1 >= 2) {
        placarTime1 -= 2;
    } else if (time === 'time2' && placarTime2 >= 2) {
        placarTime2 -= 2;
    }
    atualizarPlacar();
}

function atualizarPlacar() {
    txtTime1.innerText = placarTime1;
    txtTime2.innerText = placarTime2;
    mostrarMensagem();
}

function mostrarMensagem() {
    if (placarTime1 > placarTime2) {
        txtmensagem.innerText = "Sorocaba está ganhando!";
    } else if (placarTime2 > placarTime1) {
        txtmensagem.innerText = "Itapetininga está ganhando!";
    } else {
        txtmensagem.innerText = "Está empatado!";
    }
}

function finalizarPartida() {
   
    buttonsTime1.forEach(button => button.disabled = true);
    buttonsTime2.forEach(button => button.disabled = true);

    if (placarTime1 > placarTime2) {
        txtmensagem.innerText = "Sorocaba venceu!";
    } else if (placarTime2 > placarTime1) {
        txtmensagem.innerText = "Itapetininga venceu!";
    } else {
        txtmensagem.innerText = "Empate!";
    }


    finalizarButton.disabled = true;
}

function iniciarNovoJogo() {
 
    placarTime1 = 0;
    placarTime2 = 0;
    txtTime1.innerText = placarTime1;
    txtTime2.innerText = placarTime2;

  
    buttonsTime1.forEach(button => button.disabled = false);
    buttonsTime2.forEach(button => button.disabled = false);

  
    finalizarButton.disabled = false;

    txtmensagem.innerText = "Novo jogo iniciado!";
}
