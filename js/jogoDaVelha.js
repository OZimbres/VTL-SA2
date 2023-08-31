document.addEventListener("DOMContentLoaded", () => {
    /*-----===VARIÁVEIS===-----*/
    const table = document.querySelector("table");
    const recomecar = document.querySelector("aside");
    const cells = document.querySelectorAll("td");
    let currentPlayer = "X";

    recomecar.addEventListener("click", () => {
        cells.forEach(cell => {
            const circuloImg = cell.querySelector(".circulo");
            const xImg = cell.querySelector(".x");

            table.classList.add("tremer");

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
    });

    cells.forEach(cell => {
        const circuloImg = cell.querySelector(".circulo");
        const xImg = cell.querySelector(".x");

        cell.addEventListener("click", () => {
            if(circuloImg.classList.contains("ativado") || xImg.classList.contains("ativado")){
                cell.style.pointerEvents = "none";
            }
            else{
                if(currentPlayer == "X"){
                    xImg.classList.remove("desativado");
                    xImg.classList.add("ativado");
                    currentPlayer = "O";
                }
                else{
                    circuloImg.classList.remove("desativado");
                    circuloImg.classList.add("ativado");
                    currentPlayer = "X";
                }

                verificarVitoria();
            }
        });
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
                document.querySelector("body").classList.add("tremer");
                setTimeout(() => {
                    document.querySelector("body").classList.remove("tremer");
                }, 100);

                console.log(`${symbolA} ganhou!`);
                // Desativar depois de ganhar
                cells.forEach(cell => {
                    cell.style.pointerEvents = "none";
                });
                //Saindo da função assim que verificar a vitŕoia
                return;
            }
        }
    }
});