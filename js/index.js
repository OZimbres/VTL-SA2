document.addEventListener("DOMContentLoaded", () =>{
    /*-----===VARIÁVEIS===-----*/
    const cards = document.querySelectorAll("section");
    
    cards.forEach(card => {
        card.addEventListener("click", function (){
            const pagina = this.getAttribute("class");
    
            if(pagina == "lampada"){
                window.location.reload();
            }
            else if(pagina == "cronometro"){
                window.location.reload();
            }
            else{
                window.location.href = "html/jogoDaVelha.html";
            }
        });
    });
});
