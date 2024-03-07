class funcionarios {
    constructor(nome, idade, salarioBase) {
        this.nome = nome
        this.idade = idade
        this.salarioBase = salarioBase
    }

    calcularSalario(valor) {
        this.salarioBase += valor
    }
}

class professor extends funcionarios {

    constructor(nome, idade, salarioBase, disciplina, horasAula) {
        super(nome, idade, salarioBase);
        this.disciplina = disciplina
        this.horasAula = horasAula
    }

    calcularSalario(valor) {
        valor = this.horasAula * 10
        this.salarioBase += valor
    }
}

const kizzy = new professor("kizzy", 20, 1000, "Computação", 200);
const prof2 = new professor("João", 32, 900, "linguagem", 100);

kizzy.calcularSalario();
prof2.calcularSalario();
console.log(kizzy.salarioBase);
console.log(prof2.salarioBase);