const listeLi = document.querySelectorAll('li');

listeLi.forEach((li) => {
    console.log("Entre dans le li");
    li.addEventListener('click', (e) => {
        console.log("Clique dans le li");
        // Faire en sorte que le li selectionner herite de la class "active"
        // Et que l'otre qui l'avait avant ne la possède pas
    });
});

