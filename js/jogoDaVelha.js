document.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector("body");
    const table = document.querySelector("table");
    const recomecar = document.querySelector("aside");
    const cells = document.querySelectorAll("td");
    const msgVitoria = document.querySelector(".msg-vitoria");
    const msgEmpate = document.querySelector(".msg-empate");
    const dark = document.querySelector(".dark");
    const vitoriasX = document.querySelector(".vitorias-x");
    const vitoriasO = document.querySelector(".vitorias-o");
    
    let contVitoriasX = 0;
    let contVitoriasO = 0;

    let jogadorAtual = "X";
    let tempoRestante = 10;
    let cronometro = false;
    let tempoTrocar;
    let idTempo; // Variável para manter o ID do intervalo
    let jogoIniciado = false;

    // Função para atualizar o tempo restante na interface
    function atualizarTempoRestante() {
        const tempoRestanteElement = document.querySelector(".tempo");
        tempoRestanteElement.textContent = `Tempo: ${tempoRestante}`;
    }
    // Função para iniciar o cronômetro
    function iniciarCronometro() {
        clearInterval(idTempo); // Limpa o intervalo anterior, se houver
        tempoRestante = 10;
        atualizarTempoRestante();

        idTempo = setInterval(() => {
            if (tempoRestante <= 0) {
                clearInterval(idTempo);
                cronometro = false; // Define o cronômetro como inativo
                // Executar a lógica de troca de jogador ou fim do jogo aqui
                trocaJogador();
            } else {
                tempoRestante--;
                atualizarTempoRestante();
            }
        }, 1000);
        cronometro = true; // Define o cronômetro como ativo
    }

    // Recomeçar o jogo
    recomecar.addEventListener("click", () => {
        cells.forEach(cell => {
            // Pausar o cronômetro
            clearInterval(idTempo);

            const circuloImg = cell.querySelector(".circulo");
            const xImg = cell.querySelector(".x");

            table.classList.add("tremer");

            //Setar jogador X pra sempre começar
            jogadorAtual = "X";

            // Voltar ao tema padrão
            body.classList.remove("vez-circulo");
            body.classList.remove("vez-x");

            //Sumindo todas as jogadas (X e O colocados)
            circuloImg.classList.remove("ativado");
            circuloImg.classList.add("desativado");
            xImg.classList.remove("ativado");
            xImg.classList.add("desativado");

            //Ativar novamente o jogo
            cell.style.pointerEvents = "auto";

            setTimeout(() => {
                table.classList.remove("tremer");
            }, 100);
        });

        // Resetar o jogo iniciado quando reiniciar
        jogoIniciado = false;
        clearTimeout(tempoTrocar);
    });

    // Trocar jogador
    function trocaJogador() {
        if (jogadorAtual === "X") {
            jogadorAtual = "O";
            body.classList.add("vez-circulo");
            body.classList.remove("vez-x");
        } else {
            jogadorAtual = "X";
            body.classList.remove("vez-circulo");
            body.classList.add("vez-x");
        }

        iniciarCronometro();
    }

    cells.forEach(cell => {
        const circuloImg = cell.querySelector(".circulo");
        const xImg = cell.querySelector(".x");

        cell.addEventListener("click", () => {
            // Iniciar o cronômetro novamente
            iniciarCronometro();

            if (circuloImg.classList.contains("ativado") || xImg.classList.contains("ativado")) {
                cell.style.pointerEvents = "none";
            } else {
                clearTimeout(tempoTrocar);

                if (!jogoIniciado) {
                    jogoIniciado = true;
                }

                if (jogadorAtual == "X") {
                    xImg.classList.remove("desativado");
                    xImg.classList.add("ativado");
                } else {
                    circuloImg.classList.remove("desativado");
                    circuloImg.classList.add("ativado");
                }

                verificarVitoria();
                trocaJogador();

                // Configurar a próxima troca de jogador
                tempoTrocar = setTimeout(() => {
                    trocaJogador();
                }, 10000); // 10 segundos
            }
        });
    
        /*-----===FUNÇÕES===-----*/
        function verificarVitoria() {
            const combinacoes = [
                [0, 1, 2], [3, 4, 5], [6, 7, 8], // Linhas
                [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colunas
                [0, 4, 8], [2, 4, 6] // Diagonais
            ];
    
            for (const combinacao of combinacoes) {
                const [a, b, c] = combinacao;
    
                const cellA = cells[a];
                const cellB = cells[b];
                const cellC = cells[c];
    
                let symbolA = "";
                let symbolB = "";
                let symbolC = "";
    
                if (cellA.querySelector(".x.ativado")) {
                    symbolA = "X";
                } else if (cellA.querySelector(".circulo.ativado")) {
                    symbolA = "O";
                }
                if (cellB.querySelector(".x.ativado")) {
                    symbolB = "X";
                } else if (cellB.querySelector(".circulo.ativado")) {
                    symbolB = "O";
                }
                if (cellC.querySelector(".x.ativado")) {
                    symbolC = "X";
                } else if (cellC.querySelector(".circulo.ativado")) {
                    symbolC = "O";
                }
    
                if (symbolA === symbolB && symbolB === symbolC && symbolA !== "") {
                    if(symbolA == "O"){
                        document.querySelector(".msg-vitoria h1").innerHTML = "O VENCEU!";
                        document.querySelector(".msg-vitoria h1").style.color = "var(--vermelho-pastel)";
                        
                        //conta e exibe quantidade de vitórias
                        contVitoriasO++;
                        vitoriasO.innerHTML = "O : "+ contVitoriasO;
                    }
                    else{
                        document.querySelector(".msg-vitoria h1").innerHTML = "X VENCEU!";
                        document.querySelector(".msg-vitoria h1").style.color = "var(--azul-pastel)";
                        
                        //conta e exibe quantidade de vitórias
                        contVitoriasX++;
                        vitoriasX.innerHTML = "X : "+ contVitoriasX;
                    }
                    
                    //Abre mensagem de vitoria
                    msgVitoria.classList.remove("hidden");
                    msgVitoria.classList.add("active");
                    dark.style.transform = "translateX(0)";
                    
                    
                    // Desativar msg e background escuro
                    setTimeout(() => {
                        // Pausar o cronômetro
                        clearInterval(idTempo);
                        cronometro = false;

                        //Setando como jogo não inciado, para parar os eventos
                        jogoIniciado = false;
                        clearTimeout(tempoTrocar);

                        //Setar jogador X pra sempre começar
                        jogadorAtual = "X";

                        // Voltar ao tema padrão
                        body.classList.remove("vez-circulo");
                        body.classList.remove("vez-x");

                        // Desativar depois de ganhar
                        cells.forEach(cell => {
                            cell.style.pointerEvents = "none";
        
                            const circuloImg = cell.querySelector(".circulo");
                            const xImg = cell.querySelector(".x");
        
                            circuloImg.classList.remove("ativado");
                            circuloImg.classList.add("desativado");
                            xImg.classList.remove("ativado");
                            xImg.classList.add("desativado");
                        });
    
    
                        //fecha mensagem de vitoria
                        msgVitoria.classList.add("hidden");
    
                        setTimeout(() => {
                            msgVitoria.classList.remove("active");
                        }, 200);
    
                        dark.style.transform = "translateX(-100%)";
    
                        cells.forEach(cell =>{
                            cell.style.pointerEvents = "auto";
                        });
                    }, 3000);

                    //Saindo da função assim que verificar a vitória
                    return;
                }

                verificarEmpate();
            }
        }

        // Função para vereficar Empate
        function verificarEmpate() {
            const todasPreenchidas = Array.from(cells).every(cell => {
                const circuloImg = cell.querySelector(".circulo");
                const xImg = cell.querySelector(".x");
                return circuloImg.classList.contains("ativado") || xImg.classList.contains("ativado");
            });
        
            if (todasPreenchidas) {
                // Todas as células estão preenchidas, mas não houve um vencedor
                // abre mensagem de empate
                msgEmpate.classList.remove("hidden");
                msgEmpate.classList.add("active");
                dark.style.transform = "translateX(0)";
        
                // Desativar msg e background escuro após algum tempo
                setTimeout(() => {
                    // Pausar o cronômetro
                    clearInterval(idTempo);
                    cronometro = false;

                    //Setando como jogo não inciado, para parar os eventos
                    jogoIniciado = false;
                    clearTimeout(tempoTrocar);

                    // Voltar ao tema padrão
                    body.classList.remove("vez-circulo");
                    body.classList.remove("vez-x");

                    // Desativar depois de ganhar
                    cells.forEach(cell => {
                        cell.style.pointerEvents = "none";
    
                        const circuloImg = cell.querySelector(".circulo");
                        const xImg = cell.querySelector(".x");
    
                        circuloImg.classList.remove("ativado");
                        circuloImg.classList.add("desativado");
                        xImg.classList.remove("ativado");
                        xImg.classList.add("desativado");
                    });

                    // fecha mensagem de empate
                    msgEmpate.classList.add("hidden");
    
                        setTimeout(() => {
                            msgEmpate.classList.remove("active");
                        }, 200);
    
                        dark.style.transform = "translateX(-100%)";
    
                        cells.forEach(cell =>{
                            cell.style.pointerEvents = "auto";
                        });
                }, 3000);
            }
        }
    });
});
