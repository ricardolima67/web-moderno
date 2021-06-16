//12/06/2021: 110. Classe #01.
//
//Na versão do ECMA2015 surgiu um conceito de classe, onde é possível agora em JavaScript a gente construir uma estrutura semelhante a uma classe, 
//só que na verdade trata-se de um detalhe de sintaxe, porque a classe é convertida p/uma função.   
//Então a orientação a objeto em JavaScript é centrada em função, onde temos como criar objetos literais e tbm. temos como criar objetos a partir
//da instanciação de função.  
//vamos criar duas classes p/termos como exemplo:
//Criar uma classe chamada Lançamento(Financeiro)onde vamos ter o nome do lançamento junto com um determinado valor, p/isso: vamos criar uma fun-
//ção chamada CONSTRUCTOR() que por padrão é chamada no momento que a classe é instanciada usando um operador new, vale lembrar que essa classe 
//será transformada numa função construtora; cujo primeiro parâmetro vai ser nome que recebe por padrão 'Genérico', o valor vai ser tbm.p/padrão
//zerado(0), vamos usar o this.nome p/receber o valor nome do parâmetro do construtor, ou seja, estamos simplesmente dizendo que estamos adicio-
//nando ao objeto que está sendo instanciado um atributo nome que é exatamente o mesmo que foi recebido por parâmetro e this.valor recebe valor
//que estamos adicionando ao objeto que está sendo criado um novo atributo valor que recebe exatamente o mesmo valor informado no construtor que
//no final das contas vai virar uma função construtora; então essa é classe lançamento pronta. Em seguida vamos criar uma segunda classe chamada
//de Ciclo Financeiro que vamos definir o construtor que vai ter o mês e ano do ciclo financeiro colocando this.mês recebe mês e this.ano recebe
//ano, além desses dois parâmetros, vamos adicionar um terceiro chamado this.lançamentos que recebe um array vazio,onde esse array vai ser reini-
//cializado e a partir disso vamos criar duas funções dentro dessa classe ciclo financeiro chamada de addLançamentos()que vai receber um ou mais
//lançamentos que a gente queira passar e no final ele concatena todos esses parâmetros em uma array; então vamos fazer bem simples uma sintaxe 
//chamada laçamentos.forEach(l => this.lancamentos.push(l))pegando cada elemento e dar um push(empurre)no array que pertence ao objeto; o próxi-
//mo método será chamado de sumário que recebe um let chamado de valor consolidado que recebe zero(0), em seguida vamos usar o this.lançamentos
//p/cada um dos lançamentos vamos somar ao valor consolidado fazendo uma atribuição aditiva(+=)que seria valorConsolidado += l.valor e no final
//ele vai retornar(return)o valor consolidado; testando isso agora, vamos criar uma constante chamada salário que recebe um new lançamento pas-
//sando o salário e valor e depois uma constante chamada de conta de luz que recebe um new lançamento passando o nome da despesa(luz)menos o va-
//lor da despesa(-)R$220,00, se caso for receita, colocar o valor em forma de positivo; em seguida vamos criar o ciclo financeiro e no final va-
//mos colocar contas.add(adicionar)lançamentos podendo numa única chamada adicionar tanto o salário qto.a cta.de luz por conta desse operador 
//...lançamentos que aceita parâmetros variávies colocando salário, conta de luz. 
//P/finalizar digitar console.log(contas.sumario())p/impressão na tela onde vai retornar o valor de R$ 44.780,00(45000,00 - 220,00).  
class Lancamento {
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome 
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))    
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor 
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 45000)
const contaDeLuz = new Lancamento('Luz', -220)

const contas = new CicloFinanceiro(6, 2021)
contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sumario())
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js"
//44780
//
//[Done] exited with code=0 in 0.474 seconds