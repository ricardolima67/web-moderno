//03/06/2021: 97. Getters/Setters
//
//Uma das técnicas p/termos encapsulamento de código, em uma estrutura(como objeto), é a gente colocar os atributos privados e termos métodos que alterem e leiam
//o valor desses atributos de uma forma mais controlada. Qdo.alteramos um atributo diretamente do tipo pessoa.idade, não há como a gente impedir a priori que al-
//gum código coloque uma idade negativa p/uma pessoa, pois trata-se de um dado inconsistente(não é válido), o mesmo ocorre com o objeto data e colocar o dia 40, 
//tbm.teremos uma inconsistência e assim sucessivamente; então muita gente p/ter um encapsulamento um pouco maior, pega os atributos de um objeto tornando-os pri-
//vados(que é algo que JavaScript não tem)e a gente acessa esses atributos a partir de métodos, mais conhecidos por Getters e Setters(um método Get p/ler o valor
//de uma variável e um método Set p/alterar o valor de uma variável).    
//Existem críticas p/esse modelo(de métodos), onde Martin Fowler fala que esse modelo representa uma sacola de gets e sets que é um objeto totalmente burro, pois
//coloca-se todas essas variávies privadas e enche a classe/estrutura de gets e sets p/acessar esses atributos, mesmo que não se faça absolutamente nada, tem-se 
//lá dentro um monte de gets e sets. O JavaScript tbm.tem esse conceito de get e set, porém, é um conceito mais interessante porque a priori a gente trabalha di-
//retamente com atributo e se quisérmos interceptar alteração do atributo, colocamos um get/set p/interceptar isso; e nessa aula será mostrado uma convenção que 
//existe no JavaScript(que não é uma variável privada), mas uma convenção que deve ser respeitada no software p/não se acessar variáveis deste tipo diretamente.
//Vamos criar uma constante chamada sequência recebe chaves e dentro dessas chaves(sequência)vamos definir um atributo underline valor recebe um, o fato da gente
//colocar o underline antes de uma variável não quer dizer que essa é uma variável privada, ou seja, vamos continuar acessando ela normalmente sem nenhum proble-
//ma, a linguagem não vai barrar isso da gente, mas isso é uma convenção, ou seja, estamos convencionando, mostrando p/os desenvolvedores que(_valor)é uma variá-
//vel que é pretendida se acessada apenas internamente dentro do objeto sequência.
//Então vamos criar dentro desse objeto usando a palavra GET e em seguida vamos criar uma função chamada valor, como a gente quer pegar o valor, então a gente 
//não precisa colocar nenhum atributo nessa função e essa função vai retornar this._valor++(o mais mais é p/acrescentar um valor seguinte, p/ex.:dar um novo ID)
//em seguida vamos usar a palavra reservada SET p/colocar valor, onde agora eu vou passar um atributo p/essa função valor(usando o mesmo nome de função), ou se-
//ja, com parâmetro e em seguida vamos atribuir p/esse parâmetro(this._valor = valor); o professor achou melhor fazer de outra forma esse registro, ou seja, i-
//dentando a função usando if(se)o valor for maior do que o valor atual(this._valor), ou seja, a gente quer colocar um valor p/frente na sequência, então neste 
//caso é um benefício o fato de se ter o set porque a gente consegue aplicar algum tipo de validação e só atribuir o valor qdo.se achar necessário; obviamente 
//como não há nenhuma restrição da linguagem, o fato de se colocar underline na frente da variável(valor)não significa que é privado, mas se o usuário respei-
//tar o desejo de quem construiu o objeto, vai acessar sempre a partir do método get/set e p/acessá-lo é muito simples: colocar console.log(sequência.valor e 
//novamente sequência.valor); nota-se que não se está acessando underline valor, simplesmente foi chamado o atributo(valor), pois o JavaScript vai entender que
//se a gente está tentando ler o valor, ele vai chamar o método(get valor() { return this._valor++ }), executando, ele vai retornar informando o valor 1 e em
//seguida o sistema já incrementou p/o valor 2(47), porque embora, a gente esteja aparentemente acessando um atributo, ele internamente está chamando o método
//GET e o método SET .    
//Nota:
//[(os getters and setters são funções e que dentro delas os valores são acessados) e qual a vantagem da gente acessar um valor em cima de uma função?R.:Pode-se
//fazer algum tipo de validação, processamento, antes de devolver o valor da variável.]. O JavaScript não aceita sobrecarga de métodos(significa que teremos vá-
//rios métodos com o mesmo nome, porém com parâmetros diferentes)a linguagem só vai aceitar se for usando os dois métodos(get e set).
const sequencia = {
    _valor: 1,   
    get valor() { return this._valor++ },
    set valor(valor) {
        if(valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js"
//1 2
//
//[Done] exited with code=0 in 0.783 seconds
//
//Continuando da linha 29: Então vamos colocar sequência.valor recebe 1000(continuando a sintaxe de código(34 a 44))e em seguida chamar console.Log(sequência.vr),
//retorna conf.linha 66 e 67, mostrando que há uma sequência.
const sequencia = {
    _valor: 1,   
    get valor() { return this._valor++ },
    set valor(valor) {
        if(valor > this.valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js"
//1 2
//1000 1001
//
//[Done] exited with code=0 in 0.564 seconds
//E se caso a gente tentar fazer a sequência com um número menor, simplesmente ele vai ignorar o set e vai trazer a resposta c/a numeração a frente: 1002, 1003(89).
const sequencia = {
    _valor: 1,   
    get valor() { return this._valor++ },
    set valor(valor) {
        if(valor > this.valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js"
//1 2
//1000 1001
//1003 1004
//
//[Done] exited with code=0 in 0.648 seconds
//
//OBS.: A VARIÁVEL  _VALOR:1  POR CONVENÇÃO É DITA COMO PRIVADA.  