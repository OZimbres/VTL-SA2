document.addEventListener("DOMContentLoaded", () =>{
    /*-----===VARIÁVEIS===-----*/
    const cards = document.querySelectorAll("section");
    
    cards.forEach(card => {
        card.addEventListener("click", function (){
            const pagina = this.getAttribute("class");

            // Levar o usuário à respectiva página clicada
            if(pagina == "lampada"){
                window.location.href = "./html/lampada.html";
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
