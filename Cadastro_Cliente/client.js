//Calendario
document.addEventListener("DOMcontentLoaded", function(){
    const calendarioButton = document.getElementById("calendario");
    const datepicker = new Pikaday({ field: calendarioButton});

    calendarioButton.addEventListener("click", function(){
        datepicker.show();
    });
});



//Função Open Certificado
document.getElementById("btnModal1").addEventListener("click", function() {
    document.getElementById("modal1").style.display = "block";
});

//Função Close Certificado
document.getElementById("closeModal1").addEventListener("click", function(){
    document.getElementById("modal1").style.display = "none";
});

//Função Open Revendedor
document.getElementById("btnModal2").addEventListener("click", function() {
    document.getElementById("modal2").style.display = "block";
});

//Função Close Revendedor
document.getElementById("closeModal2").addEventListener("click", function(){
    document.getElementById("modal2").style.display = "none";
});

//Fechar ao Clicar fora 
window.addEventListener("click", function(event) {
    if (event.target == document.getElementById("modal")) {
        document.getElementById("modal1").style.display = "none";
    }
    if (event.target == document.getElementById("modal2")) {
        document.getElementById("modal2").style.display = "none";
    }
});