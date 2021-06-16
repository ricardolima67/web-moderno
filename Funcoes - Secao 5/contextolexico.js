//19/05/2021: 82. Contexto Léxico
//
//Nesta aula será abordado o assunto Contexto Léxico(contexto no qual as coisas foram declaradas dentro da linguagem).
//Vamos declarar uma variável(constante)chamada valor que recebe um determinado valor, nesse caso chamamos de Global e eu vou declarar uma função diretamente
//no arquivo, então o contexto léxico que essa função foi declarada foi dentro do módulo do Node, dentro do arquivo c/texto léxico.js diretamente, não foi den-
//tro de objeto, não foi dentro de uma outra função, ou seja, foi diretamente do arquivo Node. e em seguida eu vou logar o valor de console.log() e o vr. dessa
//variável(10)valor,se a gente executar essa função teria como retorno: Global, mas isso não ocorre porque dentro da função(12 e 13)não tem uma constante ou uma
//variável com esse mesmo nome(global), então ele vai procurar no escopo maior(que no meu entendimento baseado em outras aulas o objeto global não está no Node,
//ou seja, registrado em seus arquivos de módulos), por isso que retorna nulo essa busca do escopo maior, esse objeto de fato está no arquivo do browser.
const valor = 'Global'   

function minhaFuncao() {
    console.log(valor)
}
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//
//[Done] exited with code=0 in 0.499 seconds
//Continunado das linhas 8 e 9, se eu fizer uma pequena mudança, criando uma função exec() e dentro de exec eu vou criar uma constante chamada valor que recebe
//'Local' e na linha 28 vou chamar minha função conf.declarei na linha 12 e em seguida eu vou chamar a função exec; retorna conf.linha 33:
const valor = 'Global'   

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//Global
//
//[Done] exited with code=0 in 0.435 seconds
//Então olhando p/ esse código(20 a 31) a gente teria duas possibilidades da execução desse código, a primeira possibidade qdo.chamase exec()linha31 ele vai de-
//clarar uma constante chamada valor(linha27)e vai executar minhaFunção()conf.linha28, no momento que execurtar a linha28 a função vai procurar uma variável ou
//constante com esse nome valor(23)p/imprimir no console, então ele vai procurar no escopo maior, mais abrangente(no caso a linha 20), ou seja, isso ocorre por
//conta do contexto léxico, no contexto que a função foi escrita, a linha 22(minhaFunção)vai achar o valor Global. 
//Isso ocorre porque uma função qdo.foi declarada dentro de JavaScript, ela não tem apenas o seu contéudo interno(seu nome, os parâmetros que ela recebe, aquilo
//que ela retorna)ela tbm.tem consciência no local que ela foi definida, então a função carrega consigo essa informação do contexto do qual ela foi declarada,
//isso tudo tem a ver com conceito de Clouser. 