//20/05/2021: 86. Classe vc Função Factory
//
//Nesta aula vamos comparar a função factory com a classe(é uma forma diferente de se construir função em JavaScript), a gente pega um pouco mais aquela idéia da 
//orientação a objeto que vem do Java, do CSharp e passamos a ter uma classe, onde têm atributos e comportamentos como uma forma p/instânciar objetos e sabemos q
//em JavaScript a gente usa essa estrutura como sendo uma função e a classe nada mais é que uma função escrita de uma forma diferente.).  
//Vou criar uma classe chamada pessoa e depois vou criar uma função construtora que tbm.vai ser responsável por criar o objeto tipo pessoa. 
//Criando uma classe chamada pessoa recebendo como objeto um construtor de uma classe, onde dentro de objeto recebe this.nome = nome, depois vou criar uma função 
//chamada falar()em seguida vou imprimir no console (`Meu nme é ${this.nome}`)sendo essa a classe a ser comparada com a função factory, continuando eu vou criar 
//uma constante p1 recebe p/instanciar new pessoa()passando o nome João e vou colocar p1/.falar; executando:
class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()                    //Linhas 10 a 21 trata-se de uma Classe.
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//Meu nome é João
//
//[Done] exited with code=0 in 0.475 seconds
//
//Continuando da linha 9: foi passado a instância new pessoa juntamente com a string(20)que foi passada p/o construtor(11) e no momento que eu coloquei this.nome
// = nome(12) significa que variável nome(this.nome)passou a ser pública, então eu vou ter acesso a essa variável sempre que eu quiser a partir da instância dessa
//classe const p1(20)e através da linha(21)p/chamar o método falar(15 a 17)onde ele executou o meu nome é: obviamente acessando o atributo nome a partir do this
//{this.nome}(16), caso executasse sem esse this, o sistema geraria um erro na impressão do console dizendo que nome não está definido dentro do escopo falar().
//Continuando eu vou colocar uma constante pessoa por meio de uma função arrow que recebe nome e no corpo da função(dentro desse objeto que acabei de criar essa
//função factory)eu vou colocar return juntamente com o método falar()que simplesmente vai imprimir no console(`Meu nome é ${nome}`)e vou acessar a variável nome
//que foi recebida na linha 35 como parâmetro, não preciso usar o this nesse contexto(37)onde posso usar simplesmente o valor de nome(35)p/acessar a variável, en-
//tão executando eu posso chamar de constante p2 recebe pessoa('João')e coloco p2.falar()
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('João')
p2.falar()                    //Linhas 35 a 42 trata-se de uma Função Construtora.
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//Meu nome é João
//
//[Done] exited with code=0 in 0.876 seconds
//
//Então vamos pegar a classe linhas 10 a 21: selecionar/copiar e colar no console do chrome(browser)em seguida executar: ele retorna conf.linha 43, ou seja, o 
//browser suporta a versão de definição de classe.
//Agora vou colocar document.getElementsByTagName vou passar a tag('body')e vou pegar o primeiro body[0]ponto on click passando p1 ponto falar
//document.getElementsByTagName('body') [0].onclick = p1.falar
//f falar () {
    // console.log('meu nome é ${this.nome}')
//      }
// Meu nome é undefined
//Fazendo o procedimento da linha 50, significa que qdo.eu clicar na parte superior do browser(parte branca)o sistema vai retornar no console de acordo com o p1.
//falar, pois como ele está acessando dentro de falar a variável {this.nome} vai apontar p/undefined, pois de acordo com a chamada dessa função, o this pode variar
//de valor; isso, entretanto não vai ocorrer com função Factory, se executarmos o código da linha 35 a 42 no browser clicando na parte branca superior da tela, o 
//sistema vai retornar a impressão no console como Meu nome é João e se colocar a sintaxe abaixo(62), não importa quem esteja chamando, o sistema sempre vai apontar 
//variável certa, porque dentro do p2.falar não foi preciso acessar o this, pois o objeto falar: () => console.log(`Meu nome é ${nome}`)linha36 tem ciência do con-
//p/o texto léxico no qual ele foi declarado dentro dessa função e tem acesso a esse escopo mais abrangente, por isso ele consegue mesmo tendo acesso apenas ao 
//objeto linhas 35 a 37 a essa variável do método no qual esse objeto foi criado, cuja função factory fica mais determinada nesse contexto.
//document.getElementsByTagName('body') [0].onclick = p2.falar
// () => console.log(`Meu nome é ${nome}`)        p/meio dessa reposta da linha 64 - após o enter do comando(63), ele vai mostrar no console Meu nome é João.