const express = require('express') //faz a requisição do pacote 'express'
const axios = require('axios') //faz a requisição do axios

const app = express() // variavel app é o express rodando.
app.listen('3000') //express.listen é um metodo para o navegador ouvir a porta 3000. roda na porta 3000 o express

//=======================================================================================================================================================================================
// ROTA GET (PEGA) padrão do navegador.

// app.route('/').get( (req,res)  => res.send("testando...") )
// EXPLICAÇÃO => app.route dar a rota "/" com o método get. de require e response, o response está retornando um send.

// =========================================================================================================================================================================================
//  rota POST (insere)

//middleware => transforma em json
// app.use(express.json()) // transformando em json para ser lido pelo insomnia
// antes do route fazer a requisição ele passa primeiro pelo middleware para constar o tipo.

// app.route('/').post( (req,res) => res.send(req.body))
// EXPLICAÇÃO => app.route dar a rota "/" com o método post. de require e response, o res.send envia o req.body para a resposta da requisição = o corpo da requisição.

// ====================================================================================================================================================================================
// rota PUT or PATCH (edita ou insere um novo)

//middleware => transforma em json
// app.use(express.json()) // transformando em json para ser lido pelo insomnia

// let author = "Aryel Developer" // variavel author

// app.route('/').get( (req,res) => res.send(author)) // envia pro navegador atraves do get o resultado de author. 

// app.route('/').put( (req,res) => { //app.route dar a rota "/" com o método put. de require e response
    // author = req.body.author // faz com que a variavel author receba o que vem da variavel author no body do json.
    // res.send(author) // retorna o author na resposta
// } )

// ====================================================================================================================================================================================================
// rota DELETE (apaga)
// app.route('/:identificador').delete( (req,res) =>{ //adiciona uma variavel depois de '/:' que sera armazenada como identificador.
    // res.send(req.params.identificador) //a variavel vem dentro da requisição, dentro da requisição ela vem dentro do 'params' (todas as variaveis que vem na url) e o .identificador pega a variavel.
    
// })
// ==========================================================================================================================================================================================================
// body params

// app.use(express.json()) //transforma em json

// app.route('/').post( (req,res) => {
    // const {nome,cidade,Estado,Pais} = req.body //constante com os valores do json
    // res.send(`My name is ${nome} and i live in ${cidade} ${Estado} ${Pais}`)
// })
// ==========================================================================================================================================================================================================
// route params
// app.route('/').get((req,res) => {
    // return res.send("1º rota")
// })

// app.route('/:variavel').get((req,res) =>  //tudo que vir depois da barra vira uma variavel 
    // res.send(req.params.variavel)) // 2° rota mostrando o que vier depois da barra 

// app.route('/identidade/:nome').get( (req,res) => res.send( req.params.nome)) //3° rota mostrando o que vier depois da segunda barra /

// =====================================================================================================================================================================
// query params

// app.route('/').get( (req, res) => res.send(req.query)) ele irá mostrar na req tudo que vier depois de "?" na url. a variavel tem que existir na url.

// exemplo:
//localhost:3000?nome=Aryel&cidade=Fortaleza&estado=Ceara || o req vai mostrar nome cidade e estado.
// =====================================================================================================================================================================
// consumindo api do github com node
// app.route('/').get( (req,res) =>{
    
//     axios.get('https://api.github.com/users/aryelzx') //requisição get na api do ghithub
//     .then(result => res.send(result.data)) //caso de tudo certo o axios guarda o reusltado dentro de result, o result será respondido com send e enviado. dentro de resulst .data (.data para mostrar somente os dados)
//     .catch(error => console.log(error))// se axios bater na url e encontrar algum erro ele apresentará o erro.

// })
// ==========================================
// mostrando a imagem no lugar da url.
app.route('/').get( (req,res) =>{
    axios.get('https://api.github.com/users/aryelzx')
    .then(result => res.send(`<img src="${result.data.avatar_url}"/>`)) //template string com a tag img
    .catch(error => console.log(error))
})









