

//importando o arquivo onde está a função soma
let app = require("../src/app");

//criando uma categoria para organizar os teste quando o projeto for muito extenso
describe("Operações basicas",()=>{

    /**Criando o teste de uma função de soma */
    test("Deve retornar o valor 10 ao somar 5 + 5",()=>{

        
        let resultado = app.soma(5,5);

        //para ver se o valor está correto ou não
        expect(resultado).toEqual(10);

    })

    //tese de multipliação
    test("Deve retornar o valor 10 ao multiplicar 2 por 5",()=>{

        let resultado = app.multiplica(2,5);

        expect(resultado).toEqual(10);
    })
})






