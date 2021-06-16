//11/06/2021: 108. Evitando Modificações
//
//JavaScript é uma linguagem muito dinâmica e flexível por conta de ser fracamente tipada tendo uma coleção dinâmica de chave/valor, mas eventualmente a gente quer
//restringir um pouco essa liberdade p/que tenhamos um dado mais imutável,que não se consiga adicionar novos atributos ou removê-los em determinados objetos, então
//p/isso tem-se algumas funções que executam essas tarefas. 
//Object.preventExtensions => ele vai previnir não permitindo que o objeto seja estendido, ou seja, não vai se conseguir aumentar o número de atributos, de adicio-
//nar novos atributos no objeto; pode-se até excluir atributos, mas adicionar novos não é permitido devido a restrição; p/isso vamos criar uma constante chamada de
//produto que recebe Object.preventExtensions({})passando no parâmetro desse método um objeto literal,pois a gente quer que ele pegue esse objeto fazendo um resset
//retornando um produto que não pode ser estendido; onde vamos colocar nome: 'Qualquer', preço: 1.99, tag: 'promoção'; conf.apresenta-se a sintaxe de comando abai-
//xo, não vamos conseguir adicionar mais nenhum atributo(ficará somente os três da sintaxe)nesse objeto, mas a gente vai conseguir excluir, continuando vamos colo-
//car consolo.log('Extensível:', e vamos testar: Object.isExtensible(produto)), mostrando que vai retornar falso, dizendo que não é um objeto extensível(17)  
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto))
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js"
//Extensível: false
//
//[Done] exited with code=0 in 0.643 seconds
//Então vamos modificar o nome do produto conforme segue:
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha Escolar Branca'
delete produto.tag
console.log(produto)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js"
//Extensível: false
//{ nome: 'Borracha', preco: 1.99 }
//
//[Done] exited with code=0 in 0.533 seconds
//A resposta da sintaxe indica o que foi feito nas três sentenças de código(26 a 28), onde primeiro tentou-se alterar o atributo relacionado ao nome do produto exis-
//tente da qual não há problema em fazê-lo, pois um objeto não vai estar congelado(freeze)permitindo a gente alterar os dados(o que não é permitido neste cenário é a
//gente adicionar novos atributos[novas chaves e valores]no objeto); descrição não existe no objeto original, portanto a linha 27 não vai surtir efeito nenhum mo ob-
//jeto e em seguida a gente excluiu um atributo existente no objeto(22=>tag), então neste caso pode-se excluir sim, conf. demonstrado; portanto o resultado esperado
//é um objeto que tem nome e preço(13)onde saiu de 'Qualquer' p/Borracha conf.retorno no console linha(32).
//
//O próximo método que vamos ver é o Object.seal(de SELAR): criando uma constante chamada pessoa que recebe parâmetros dentro do objeto e em seguida vamos colocar 
//Object.seal p/selar o objeto pessoa, qdo.selamos um objeto a gente não consegue adicionar novos atributos, não consegue excluir atributos do objeto, mas consegui-
//mos modificar os valores dos atributos do objeto; colocar console.log('Selado:', Object.isSealed(pessoa)), executando -> retorna conf.linha(48). 
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js"
//Selado: true
//
//[Done] exited with code=0 in 0.452 seconds
//De acordo com a linha(48)está selado sim(verdadeiro)já que foi aplicado na linha(45)p/selar o objeto e partir desse momento a gente consegue mexer nos atributos,
//alterando os seus valores(sem adicionar e nem excluir, pois não é permitido), então podemos fazer conf.o exemplo a seguir:
//Sobrenome está presente neste objeto que foi selado?R.:Não!; então, portanto, não vai surtir efeito nenhum, o mesmo acontece com caso de deletar pessoa.nome,pois
//nome existe, mas posso deletar?R.:Não!, porque o objeto está selado; vou alterar um valor que já existe: pessoa.idade = 29, executando a gente percebe que não ex-
//cluiu o nome, conseguiu alterar a idade(de 35 p/29), mas não conseguiu adicionar o sobrenome conf.resposta no console linha(66).  
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js"
//Selado: true
//{ nome: 'Juliana', idade: 29 }
//
//[Done] exited with code=0 in 0.596 seconds
//
//O próximo método que vamos ver é o Object.freeze que significa ter um objeto selado, só que com valores constantes, a gente não consegue incluir novos valores, 
//não consegue excluir chaves do objeto e nem consegue modificar os dados de todas as variávies do objeto, ou seja, ela é completamente constante onde na verdade
//o Object.freeze faz o Object.seal e mais todos os atributos marcados como Right In Able igual a falso, ou seja, que não podem ser modificados. 