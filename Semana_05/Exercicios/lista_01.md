# Instruções

- Faça uma cópia deste arquivo .md para um repositório próprio
- Resolva as 6 questões objetivas assinalando a alternativa correta
- Resolva as 4 questões dissertativas escrevendo no próprio arquivo .md
  - lembre-se de utilizar as estruturas de código como ``esta aqui com ` `` ou
```javascript
//esta aqui com ```
let a = "olá"
let b = 10
print(a)
```
- Resolva as questões com uso do Visual Studio Code ou ambiente similar.
- Teste seus códigos antes de trazer a resposta para cá.
- Cuidado com ChatGPT e afins: entregar algo só para ganhar nota não faz você aprender e ficar mais inteligente. Não seja dependente da máquina!
- ao final, publique seu arquivo lista_01.md com as respostas em seu repositório, e envie o link pela Adalove. 

# Questões objetivas

**1)** O que o código a seguir faz?

![Uma imagem](assets/ex01.PNG)

Escolha a opção que responde corretamente:

a) Imprime os números pares de 1 a 10. 
//alternativa A  

b) Imprime os números ímpares de 1 a 10.

c) Imprime os números pares de 2 a 10.

d) Imprime os números ímpares de 2 a 10.

______

**2)** Identificar a linha que falta no código para criar uma classe Veiculo com atributo marca, e uma classe Carro que herda de Veiculo com um método ligar(). 

![Uma imagem](assets/ex02.PNG)

No lugar onde está escrito “// linha” qual das opções abaixo deve estar para funcionar corretamente o código?

A) let carro = new Carro("Toyota");
//alternativa A

B) let ligar = new ligar("Toyota");

C) class Moto extends Veiculo {};

D) carro1.ligar();

______

**3)** Qual é o valor de resultado após a execução deste código?

![Uma imagem](assets/ex03.PNG)

Escolha a opção que responde corretamente:

A) 18
//alternativa A

B) 16

C) 14

D) 12

______

**4)** Como você criaria um método `acelerar()` em uma classe `Carro`, que recebe um parâmetro `velocidade` e o adiciona a um atributo `velocidadeAtual`?

A) ![Uma imagem](assets/ex04_1.PNG)
//alternativa A

B) ![Uma imagem](assets/ex04_2.PNG)

C) ![Uma imagem](assets/ex04_3.PNG)

D) ![Uma imagem](assets/ex04_4.PNG)

______

**5)** Qual a forma correta de definir uma classe Carro em JavaScript, com um método ligar() e um atributo marca?

A) ![Uma imagem](assets/ex05_1.PNG)
//alternativa A

B) ![Uma imagem](assets/ex05_2.PNG)

C) ![Uma imagem](assets/ex05_3.PNG)

D) ![Uma imagem](assets/ex05_4.PNG)

______

**6)** Observe o código abaixo:

![Uma imagem](assets/ex06.PNG)

Qual será a saída do código acima?

A) "Olá, meu nome é João. Olá, meu nome é Maria."
//alternativa A

B) "Olá, meu nome é ."

C) "João Maria"

D) "undefined undefined"

______

# Questões dissertativas

**7)** Vamos criar um programa em JavaScript para entender classes, métodos e atributos!
Classe Animal:
- Crie uma classe chamada Animal.
- Adicione dois atributos: nome e idade.
- Adicione um método chamado descrever() na classe Animal.
  - Este método deve exibir no console uma descrição do animal com seu nome e idade.

Criando e manipulando Animais:
- Crie dois objetos da classe Animal: um chamado "cachorro" e outro "gato", com idades distintas.
- Para cada animal, chame o método descrever() para ver a descrição no console.

Dica: Utilize `console.log()` para exibir as informações!

RESPOSTA: 

class animal {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }

    descrever() {
        console.log('Esse animal é o(a) ' + this.nome + ' e possui ' + this.idade + ' anos de idade');
    }
}

const animal1 = new animal("Girafa", "34");
const animal2 = new animal("tigre", "23");

animal1.descrever()
animal2.descrever()

______

**8)** Nos últimos dias tivemos a oportunidade de ter contato com Programação Orientada a Objetos, e tivemos contato com o tema "herança". Herança é um princípio de orientação a objetos, que permite que classes compartilhem atributos e métodos. Ela é usada na intenção de reaproveitar código ou comportamento generalizado ou especializar operações ou atributos. Então vamos praticar esse conteúdo nessa questão.
Vamos criar um programa em JavaScript para entender classes, métodos, atributos e herança!

Classe Animal:
- Crie uma classe chamada Animal.
- Adicione dois atributos: nome e idade.
- Adicione um método descrever() que exiba no console uma descrição do animal com seu nome e idade.

Classe Gato (Herda de Animal):
- Crie uma classe chamada Gato que herda da classe Animal.
- Adicione um atributo extra cor específico para gatos.
- Adicione um método miar() que exiba no console o som que um gato faz.

Criando Animais:
- Crie dois objetos da classe Animal: um chamado cachorro e outro gato, com idades distintas.
- Para o gato, também defina a cor.

Chamando os Métodos:
- Para cada animal, chame o método descrever() para ver a descrição no console.
- Para o gato, chame o método miar() para "ouvir" o som que ele faz (é também para ver o som no console).

Dica: Utilize console.log() para exibir as informações!

RESPOSTA

class animal {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }

    descrever() {
        console.log('Esse animal é o(a) ' + this.nome + ' e possui ' + this.idade + ' anos de idade');
    }
}

class gato extends animal {
    constructor(nome, idade, cor){
        super(nome, idade); // Chama o construtor da classe pai
        this.cor = cor
    }

    miar() {
        console.log('o(a) gato(a) ' + this.nome + ' é ' + this.cor + ' e ' + 'faz MIIAUuUUuuu');
    }
}

const cachorrinho = new animal("Floquinho", "4");
const gatinho = new gato("Tom", "1", "ciames");

cachorrinho.descrever()
gatinho.descrever()
gatinho.miar()

______

**9)** Vamos criar um programa em JavaScript para somar notas!

Classe SomadorDeNotas:
- Crie uma classe chamada SomadorDeNotas.
- Adicione um atributo total inicializado com 0 para armazenar a soma das notas.

Método adicionarNota:
- Adicione um método chamado adicionarNota(nota) na classe SomadorDeNotas.
- Este método deve receber um parâmetro nota e somá-lo ao atributo total.

Criando o Somador e Adicionando Notas:
- Crie um objeto da classe SomadorDeNotas, chamado somador.
- Utilize o método adicionarNota(nota) para adicionar algumas notas ao somador.

Chamando o Método para Ver o Total:
- Após adicionar todas as notas, chame um método verTotal() para exibir o total das notas adicionadas.

Dica: Utilize console.log() para exibir as informações!

RESPOSTA:


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
______

**10)** Imagine que você está criando um programa em JavaScript para uma escola. Neste programa, existem diferentes tipos de funcionários, cada um com suas próprias características. Considere as seguintes classes:

Funcionário:
- atributo: Nome
- atributo: Idade
- atributo: Salário base
- método: calcularSalario() - Este método calcula o salário total do funcionário. Para cada tipo de funcionário, o cálculo será diferente.

Professor (herança de Funcionário):
- atributo: Disciplina
- atributo: Horas de aula por semana
- método: calcularSalario() - Para calcular o salário do professor, multiplicamos suas horas de aula pelo valor da hora/aula.

Agora, sua tarefa é escrever um código em JavaScript que crie as classes Funcionário e Professor, com suas características e métodos descritos acima. Depois de criar as classes, crie:
- Dois objetos do tipo Professor com informações fictícias.
- Para cada objeto, chame o método calcularSalario() e mostre o salário calculado no console.

Certifique-se de explicar cada parte do código utilizando comentários, explicando para que serve cada atributo e método, bem como a lógica por trás do cálculo de salário para o tipo de funcionário Professor.

//criando a classe funcionários com contrutor atribuindo nome, idade e salário Base
class funcionarios { 
    constructor(nome, idade, salarioBase) {
        this.nome = nome
        this.idade = idade
        this.salarioBase = salarioBase
    }

//Criando o método CalcularSalario para adicionar o valor no salário dele
    calcularSalario(valor) {
        this.salarioBase += valor
    }
}

//Criando uma classe professor extendida de funcionários e puxando no super seus atributos
class professor extends funcionarios {


//construtor que conta com o super e atributos extras como disciplina e horasAula
    constructor(nome, idade, salarioBase, disciplina, horasAula) {
        super(nome, idade, salarioBase);
        this.disciplina = disciplina
        this.horasAula = horasAula
    }

//Adicionando ao método CalcularSalario uma função que atribui valor a variável "valor"
    calcularSalario(valor) {
        valor = this.horasAula * 10
        this.salarioBase += valor
    }
}

// Criação dos objetos da classe professor e atribuindo atributos

const kizzy = new professor("kizzy", 20, 1000, "Computação", 200);
const prof2 = new professor("João", 32, 900, "linguagem", 100);

//pedindo para o console apresentar o salário base dps de calculá-lo

kizzy.calcularSalario();
prof2.calcularSalario();
console.log(kizzy.salarioBase);
console.log(prof2.salarioBase);