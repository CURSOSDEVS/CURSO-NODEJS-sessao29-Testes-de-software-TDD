let express = require('express');
let app3 = express();

app3.get('/', (req, res)=>{
    res.json({sucess: true});
})

app3.get('/cor/:pessoa',(req, res) => {

    let pessoa = req.params.pessoa;

    if(pessoa === 'victor'){
        res.json({cor: 'vermelho'});
    }
})

module.exports = app3;