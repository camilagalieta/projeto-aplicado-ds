document.addEventListener('DOMContentLoaded', function(){
    const sobre = document.getElementById("sobre");
    const produtos = document.getElementById("produtos");
    const contato = document.getElementById("contato");

    sobre.addEventListener('click', function(e) {
        e.preventDefault();
        scrollToSection('sobre');
    });

    produtos.addEventListener('click', function(e) {
        e.preventDefault();
        scrollToSection('produtos');    
    });

    contato.addEventListener('click', function(e) {
        e.preventDefault();
        scrollToSection('contato');
    });

    function scrollToSection(sectionId){
        const section = document.getElementById(sectionId);
        if (section){
            section.scrollIntoView({behavior: 'smooth'});
        }
    }
});