const express = require("express");

const app = express();

app.get('/me', (request, response) => {
    console.log(request.method)
    response.status(200).json({
        name: 'Xavier López',
        age: '36',
        pais: 'Venezuela',
        verb:request.method
    })
    
})

app.post('/metas',(req,res)=>{
    console.log(res.method)
    res.status(200).json({
        hobbies:
        ['Programar','enseñar a mi hijo a programar','jubilarme y viajar'],
        verb:req.method
    })
})

app.patch('/metas',(req,res)=>{
    console.log(res.method)
    res.status(200).json({
        metas:
        ['Trabajar en desarrollo web','empezar mi propia empresa de programacion'],
        verb:req.method
    })
})

app.put('/business',(req,res)=>{
    console.log(res.method)
    res.status(200).json({
        business:
        ['Globant','Meta','Amazon'],
        verb:req.method
    })
})



app.listen(8001, () => {
    console.log('Server started at port 8001')
})
