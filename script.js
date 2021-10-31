const JOGADOR_X = 'X';
const JOGADOR_O = 'O';
let jogoAcontecendo = true;
let checarTurno = true;
let jogadorDaVez = document.getElementById('turno1');
let resultado = document.querySelector('.resultado');
const restartBtn = document.querySelector('.restart');

/*    
    [0][1][2]
    [3][4][5]
    [6][7][8]
*/ 



const combinacoes = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],

]


let jogadas = ['', '', '', '', '', '', '', '', '']


document.addEventListener('click', (event) => {
    if(event.target.classList.contains('celula')) {
        jogar(event.target.id);

    }
})

function jogar(id) {
    turno = checarTurno ? JOGADOR_X : JOGADOR_O;
    
    trocaJogador(turno);


    if(jogadas[id] != JOGADOR_X && jogadas[id] != JOGADOR_O){

        jogadas.splice(id, 1, turno)
        const celula = document.getElementById(id);

        celula.textContent = turno;
        checarTurno = !checarTurno;
       
        
        
        checarVencedor(turno, jogadas)
    }
  
}

function trocaJogador(turno){
     if(turno == JOGADOR_X){
        jogadorDaVez.innerHTML = JOGADOR_O;
     }else {
        jogadorDaVez.innerHTML = JOGADOR_X;
     }
}


function checarVencedor(jogador, listajogadas) {
    
 
   for (i in combinacoes) {
       if( listajogadas[ combinacoes[i][0] ] == jogador &&
           listajogadas[ combinacoes[i][1] ] == jogador && 
           listajogadas[ combinacoes[i][2] ] == jogador  ){
            jogoAcontecendo = false;  
            mostraResultado(jogador)  
       } 
   }   
    
}


function mostraResultado(jogador){
    resultado.innerHTML = "O JOGADOR '" + jogador +"' VENCEU";
}


restartBtn.addEventListener('click', () => {
    restart();
})


function restart() {
    jogadas = ['', '', '', '', '', '', '', '', ''];
    for(i=0; i<9; i++){
        const celula = document.getElementById(i);
        celula.textContent = '';
    }

    resultado.innerHTML = "";
}