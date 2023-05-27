// Aula de Condicionais II

// Prática guiada
// if e if

let idade = 18 

// ifs aninhados

if (idade >= 13){
    if (idade <= 17){
    console.log("A pessoa dependente já pode ter um cartão de crédito vinculado ao seu!");

    } else {
    console.log("Idade maior ou igual a 18");
    console.log("Consulte outras possibilidades do Labank.");
    }
    
} else {
    console.log("Consulte outras possibilidades do Labank.");
}

// Atenção aqui nesse texto tento explicar a sequência da sintaxe de ifs aninhados: 1. faz o primeiro if; 2. abre o primeiro par de chaves, e atenção que dentro desse primeiro par de chaves logo após o primeiro if deverão estar o próximo if e também o else referente a esse segundo if; 3. faz o segundo if, abre chaves de novo e dentro coloca o console.log; 4. faz o primeiro else referente ao segundo if, também abrindo as duas chaves, a que abre e a que fecha, e dentro delas o console.log desse else, e perceba que a primeira chave que começa lá após o primeiro if, ela termina junto com a chave que fecha esse primeiro else, algo assim }}; 5. por fim, criamos o else referente ao primeiro if, é como se ele estivesse solto daquele aninhamento inicial, pois ele é criado logo após a última chave que engloba tudo aquilo que falamos acima. Criamos ele normalmente também, abrindo e fechando as chaves, e dentro dela colocamos o console.log. De fato essa forma de fazer fica um pouco confusa, sendo preferível adotarmos para esse tipo de cenário, a utilização de Operadores lógicos dentro dos ifs, como veremos a seguir.

// Veja que no primeiro else eu deixei ali dois console.log, e ambos são impressos normalmente no Console. Esses dois elses acima serão executados quando a idade foi menor ou igual a 12 anos ou maior ou igual a 18 anos, porém no exemplo da Ana se fosse maior ou igual a 18 anos era uma mensagem, e se fosse menor ou igual a 12 anos, era outra, mas na verdade poderáimso simplesmente ter criado duas mensagens iguais, pois daria no mesmo neste caso.


// Agora abaixo utilizando Operadores lógicos dentro do if para unir duas operações relacionais, utilizando a mesma variável criada no formato acima (let idade):

if (idade >= 13 && idade <= 17){

    console.log("A pessoa dependente já pode ter um cartão de crédito vinculado ao seu!");

} else {
    console.log("Consulte outras possibilidades do Labank.");
}


// if tenário

// const possuiConta = prompt("Você já possui conta no Labank? Responda Sim ou Não")
const possuiConta = "Não"

// fazendo primeiro pelo modo tradicional if else:
if(possuiConta.toLocaleLowerCase() === "sim"){

    console.log("Boas vindas!");

} else {

    console.log("Faça já o seu cadastro!");
}

// agora sim aplicando o método if tenário:
possuiConta.toLocaleLowerCase() === "sim" ?
    console.log("Boas vindas!"):
    console.log("Faça já o seu cadastro!");

// if ternário só funciona pra cenários simples, seria apenas um simples if else e nada mais. 
// Sobre a sintaxe, primeiro colocamos a mesma lógica que colocaríamos no if (mesma sintaxe/texto) porém seguida de um ponto de interrogação ? ,ou seja, essa é a nossa condição, a qual é avaliada como true ou false. As expressões 1 e 2 que vêm na sequência são expressões com valores de qualquer tipo. Neste caso, como o resultado da condição foi true, será impressa no Console a mensagem "Boas vindas". Muita atenção que logo após a expressão 1, é obrigatório que seja colocado os DOIS PONTOS :, caso contrário o código não irá rodar.

// Para reforçar esse material de Condicionais II, resolvi criar o cenário abaixo utilizando o if tenário, e o código rodou conforme o esperado lá no Console:
let preco
const teste = false

teste === true ?
console.log(preco = 5):
console.log(preco = 10); 

// Ainda para fechar nesse assunto do if tenário, verifiquei que é possível inseri-lo no meio de um if ou de um else, e essa condição roda normalmente no meio dessas estruturas, dando o resultado lá no Console e sem erro no código.


// switch-case

let cartao
let ramal = 2

if (ramal === 1){

    cartao = "Fácil"
} else if (ramal === 2) {

    cartao = "Black"
}else if (ramal === 3) {
    cartao = "Platinum"

}else if (ramal === 4) {
    cartao = "Master Gold"

} else {
    console.log("Escolha uma das 4 opções disponíveis.");
}

console.log(cartao);

// Apesar da resolução acima não ser no formato Switch-case, vale destacar alguns pontos importantes. Assim como já fiz no exemplo acima de if tenário, a variável let cartão foi declarada ali em cima sem valor, e estamos então no meio dos if else/if atribuindo valores diferentes pra ela, que vão depender de qual ramal será escolhido para serem impressas. Sobre a impressão, um outro ponto interessante, o primeiro console.log colocamos no else no final das condições, solicitando que ao menos uma opção seja escolhida caso o usuário tenha escutado todas e não tenha selecionado nenhuma. Já para imprimir o cartão selecionado de acordo com o ramal, colocamos apenas um console.log aqui no final do código, porém fora dos if else, e quando um desses ramais é escolhido, a informação do nome do cartão é devidamente impressa no Console. Ocorre que se a gente seleciona um ramal inexistente, no Console além de aparecer a frase do console.log que está no else, ele também imprime UNDEFINED no Console, pois o console.log do nome do cartão até roda, mas não há nenhuma correspondência, e a variável lá no início está declarada sem valor atribuído. Lembrando que esse comportamento do undefined vai ocorrer da mesma forma no exemplo abaixo utilizando a estrutura de switch.

// Agora abaixo o método Switch-case

switch(ramal){

    case 1: 
        cartao = "Fácil"
        break
    case 2:
        cartao = "Black"
        break
    case 3:
        cartao = "Platinum"
        break
    case 4:
        cartao = "Master Gold"
        break
    default:
        console.log("Escolha uma das 4 opções disponíveis.")
}

console.log(cartao);

// Primeiro ponto sobre o Switch-case, eu comentei isso pra Ana e ela deu a seguinte contribuição. Eu disse: "O que parece ruim nesse switch case é essa necessidade de ter que colocar o break, no if else if é mais rígida a leitura né!"; Ana disse: "Sim Leo! No if/else ele já entende que tem que parar quando entra em uma das condições, porém o switch ajuda muito quando temos muitas possibilidades de valor de uma mesma variável". Lendo agora depois de estar passando esse material a limpo entendi melhor o que ela quiz dizer, por isso declaramos a variável vazia, pois iremos atriburir a essa mesma variável uma grande quantidade de valores diferentes, seja de números (preços, ramais) ou strings ("banana", "Cartão Master Platinum"). Como diz o próprio material no Resumo do Notion, 1) Considere usar switch-case quando tiver muitas opções possíveis para uma variável ou expressão, em vez de uma série de if-else if-else. 

// Seguindo os comentários sobre essa estrutura condicional, conforme o Resumo do Notion, número 2) Sempre inclua um caso padrão default em seu switch-case para lidar com entradas de usuário inesperadas ou imprevistas, seria como o último else ao meu ver.

// Importante dizer também que, segundo o último item do Resumo do Notion, 4) Lembre-se de que os valores de cada case podem ser expressões em si mesmos, como variáveis, constantes ou chamadas de função.

switch(ramal){

    case 1: 
        cartao = "Fácil"
    
    case 2:
        cartao = "Black"
        
    case 3:
        cartao = "Platinum"
        
    case 4:
        cartao = "Master Gold"
        
    default:
        console.log("Escolha uma das 4 opções disponíveis.")
}

console.log(cartao);

// Como vemos acima, copiei e colei o Switch-case acima para mostrar a diferença que há no console quando removemos ou simplesmente não colocamos a palavra break em cada case, e o resultado no Console é que ele passa batido do termo "Black" e ele percorre todo o switch até nos devolver no Console os dois console.log tanto do default, quando do cartão, e ele ainda imprime o nome do cartão 4, Master Gold, o que é um comprtamento não desejado né. No Resumo do Notion diz: 3) Use break em cada case para garantir que apenas o código necessário seja executado, e então evitar comportamentos inesperados.  


// Exercício de fixação

const divisivelPor2e3 = 30

// Parte 1 letra A)
if (divisivelPor2e3 % 2 === 0){

    console.log(`O número ${divisivelPor2e3} é divisível por 2.`);

 if (divisivelPor2e3 % 3 === 0){

    console.log(`O número ${divisivelPor2e3} é divisível por 3.`);

} else {

    console.log(`O número ${divisivelPor2e3} NÃO é divisível por 3.`);
} 

} else {

    console.log(`O número ${divisivelPor2e3} NÃO é divisível por 2.`);

}

// Parte 1 letra B)

if (divisivelPor2e3 % 2 === 0 && divisivelPor2e3 % 3 === 0){

    console.log(`O número ${divisivelPor2e3} é divisível por 2 e 3.`);

divisivelPor2e3 === 30 ?
    console.log(`O número é ${divisivelPor2e3}. UFA, ACERTEI!`):
    console.log(`O número é ${divisivelPor2e3}. Que pena! Não foi dessa vez.`)

    switch(divisivelPor2e3){

        case 6:
            console.log("Esse é o número 6")
            break
        case 12:
            console.log("Esse é o número 12")
            break
        case 18:
            console.log("Esse é o número 18")
            break
        case 24:
            console.log("Esse é o número 24")
            break
        case 30:
            console.log("Esse é o número 30")
            break
    
            default:
        console.log("O número é maior que 30 ou menor que 6!");
    }

} else {

    console.log(`O número ${divisivelPor2e3} NÃO é divisível por 2 e 3.`);
} 

// Atenção na estrutura acima, onde criamos um if tenário dentro do if, e o resultado no Console saiu normalmente, como já havíamos comentado nas linhas acima desta aula. Também inserimos o switch case e o resultado também foi impresso normalmente no Console.


// Parte 2 agora abaixo feita separada, tanto por um exemplo independente da Parte 1, como também a repetição da Parte 2 que eu já havia feito, porém depois apenas copiei e colei a mesma estrutura no meio do if acima da letra B da Parte 1 para testar e ver se funcionava. 

let testeIfTernario = 29

testeIfTernario === 30 ? 
    console.log(`O número é ${testeIfTernario}. UFA, ACERTEI!`):
    console.log(`O número é ${testeIfTernario}. Que pena! Não foi dessa vez.`)


divisivelPor2e3 === 30 ?
    console.log(`O número é ${divisivelPor2e3}. UFA, ACERTEI!`):
    console.log(`O número é ${divisivelPor2e3}. Que pena! Não foi dessa vez.`)


// Parte 3

let mensagem2

switch(divisivelPor2e3){

    case 6:
        mensagem2 = "Esse é o número 6"
        break
    case 12:
        mensagem2 = "Esse é o número 12"
        break
    case 18:
        mensagem2 = "Esse é o número 18"
        break
    case 24:
        mensagem2 = "Esse é o número 24"
        break
    case 30:
        mensagem2 = "Esse é o número 30"
        break

        default:
    console.log("O número é maior que 30 ou menor que 6!");
}

console.log(mensagem2);

// Interessante reforçar sobre a sintaxe da estrutura switch case. A gente digita switch, abre parêntesis e digita a expressão a ser comparada, e neste caso é o nome da const divisivelPor2e3. Depois abrimos as chaves, cujo fechamento se dá após digitar o default. Digitamos o Case mais o valor para o termo que estamos buscando, e digitamos os DOIS PONTOS, sem isso o resto da estrutura não roda, e esses dois pontos é sempre fácil de esquecer. Caso o valor do case seja igual ao termo, o código descrito abaixo da palavra case será executado. Após os dois pontos, digitamos o nome da variável, que geralmente declaramos vazia na parte de fora em cima da estrutura, depois sinal de igual e atribuímos um valor, podendo ser Number ou String como já mencionamos. Por fim, digitamos o break, e assim fazemos com todas as possibilidades de valor do cenário. Depois do último case, variável e break, digitamos o default E TAMBÉM os DOIS PONTOS (assim - default:), seguido do console.log, e então a chave é fechada, como já dissemos no início. Importante dizer que para o default, não é necessário digitar o break. 

// Vou simular abaixo a mesma estrutura acima, porém em vez de utilizar a variável mensagem2 e declarar o console.log no final fora do switch case, o que gera aquele undefined no Console já visto e simulado acima, vou colocar um console.log em casa possibilidade, e vamos ver o resultado. Após feito, o resultado é perfeito, o problema do Undefined para o console.log da variável mensagem2 conforme ocorre acima, não ocorre nesse exemplo abaixo, e ainda cimplificamos o código ao eliminar a variável. 


switch(divisivelPor2e3){

    case 6:
        console.log("Esse é o número 6")
        break
    case 12:
        console.log("Esse é o número 12")
        break
    case 18:
        console.log("Esse é o número 18")
        break
    case 24:
        console.log("Esse é o número 24")
        break
    case 30:
        console.log("Esse é o número 30")
        break

        default:
    console.log("O número é maior que 30 ou menor que 6!");
}

// #######################################################################################

let num = 18

function divisivel(numF) {
    
    if (numF % 2 === 0 && numF % 3 === 0) {

        console.log(`O número ${numF} é divisível por 2 e 3.`);

            if (numF === 30) {

                console.log(`O número é ${numF}. UFA, ACERTEI!`);
            
            } else {
                console.log(`O número é ${numF}. Que pena! Não foi dessa vez.`);
            }
    } else {
        console.log(`O número ${numF} NÃO é divisível por 2 e 3.`);
    }

}

divisivel(num)
divisivel(30)
divisivel(9)


// Aqui na função acima, enviada pelo Eduardo, ele uniu dentro de uma função a letra B do exercício 1 com todo o encunciado do exercício 2. É importante sempre praticar funcões pois aqui podemos ver um exemplo claro onde fiz questão de diferenciar o nome do parâmetro da função (e dentro dela também, pois usei o parâmetro como base) do nome da variável, e assim tenho mais versatilidade pra chamar essa função, uma vez que posso chamar tanto pela variável, que está no escopo global e a função consegue fazer a leitura dela, mas também posso inserir outros argumentos e os resultados são devidamente impressos no Console. Quando temos o nome da variável no parâmetro e dentro das funções, isso as torna chumbadas, como já vimos em outros exemplos mais a fundo nos exercícios de Condicionais I. 
