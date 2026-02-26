function percorrerCarros() {
    // 1. Lista predefinida de carros
    const carros = ["Fusca", "Civic", "Mustang", "Corolla", "Lamborghini"];
    
    let i = 0;
    let continuar;


    do {
        continuar = confirm(`Carro atual: ${carros[i]}\n\nDeseja ver o próximo?`);
        
        i++;
    } while (continuar === true && i < carros.length);

    if (i === carros.length && continuar) {
        alert("Fim da lista!");
    } else {
        alert("Busca encerrada pelo usuário.");
    }
}