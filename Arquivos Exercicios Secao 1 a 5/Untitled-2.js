let stringPontuacoes = "10,20,20,08,25,03,00,30,01"

let stringPontuacoes = [10,20,20,8,25,3,0,30,1]

let pontuacoes = stringPontuacoes //usado somente quando os itens do let stringPontuacoes são tipo number

let pontuacoes = stringPontuacoes.split(",") //usado somente quando let stringPontuacoes é string
let qtdQuebraDeRecords = 0

let maiorPontuacao = pontuacoes[0]
let menorPontuacao = pontuacoes[0]

for (let i = 1; i < pontuacoes.length; i++) {
    if(pontuacoes[i] > maiorPontuacao) {
        maiorPontuacao = pontuacoes[i+1]
        qtdQuebraDeRecords++
        console.log(`é maior / maior pontuação é ${maiorPontuacao}, indice ${pontuacoes[i+1]}`)
        console.log(qtdQuebraDeRecords)
    } else {
        console.log(`é menor / maior pontuação é ${maiorPontuacao}, indice ${pontuacoes[i+1]}`)
        console.log(qtdQuebraDeRecords)
    }
}