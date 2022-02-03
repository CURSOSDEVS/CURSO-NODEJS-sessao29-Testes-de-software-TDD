//importando a biblioteca de teste de rotas
let supertest = require('supertest');

//importando a instancia do app dentro da suite
let app = require('../src/app3');

//criando um objeto para criar requisição dentro do test
//let request = supertest("www.google.com");

//alterando o endereço para o endereço da aplicação
let request = supertest(app);


//teste para verificar se a aplicação está rodando em uma determinada porta
test("A aplicação deve rodar na porta 3131",()=>{

    return request.get('/').then(res => expect(res.statusCode).toEqual(200));
})

test("Deve retornar vermelho como cor favoridta de Victor",()=>{
   return request.get('/cor/victor').then(res => expect(res.body.cor).toEqual("vermelho"))
});