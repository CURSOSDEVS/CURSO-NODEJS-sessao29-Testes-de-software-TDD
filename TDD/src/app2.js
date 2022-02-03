let express = require('express');
let app2 = express();

app2.get('/', (req, res)=>{
    res.json({sucess: true});
})

app2.listen(3131,()=>{
    console.log("App Rodando");
})
