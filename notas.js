class SomadorDeNotas {
    constructor() {
        this.total = 0;
    }

    adicionarNota(nota) {
        this.total += nota;
    }

    verTotal() {
        console.log('A soma das notas totais é: ' + this.total);
    }
}

const somador = new SomadorDeNotas();
somador.adicionarNota(8);
somador.adicionarNota(7);
somador.adicionarNota(5);
somador.adicionarNota(9);
somador.verTotal();
