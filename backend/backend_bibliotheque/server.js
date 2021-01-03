
const express = require('express');
const mongoose = require('mongoose');
const Bibliotheque = require('./model/bibliotheque');
const app = express();
const mongoDb = require('./database/db');


mongoose.Promise = global.Promise;
mongoose.connect(mongoDb.db, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
}).then(() => {
    console.log('Database sucessfully connected ')
  },
  error => {
    console.log('Database error: ' + error)
  }
)

app.use((req, res, next) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.set('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.set('Access-Control-Allow-Credentials', true);
    next();
});

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

let bibliotheques = [];

// GET /bibliotheques
app.get('/bibliotheques', (request,response) => {
    Bibliotheque.find((error,bibliotheques) =>{
        if(error)   return console.error(error);
        console.log(bibliotheques);
        response.json(bibliotheques);
    }
    )
});

// GET /bibliotheques/:id
app.get('/bibliotheques/:id', (request,response) => {
    console.log('find bibliotheque : '+ request.params.id);
    Bibliotheque.findOne( {_id: request.params.id}, (error,bibliotheque) =>{
        if(error){
            console.log(error);
            return response.status(404).json({error: error});
        }
        console.log(Bibliotheque);
        response.status(200).json(bibliotheque);
    });
});

// POST /bibliotheques
app.post('/bibliotheques', (request,response) => {
    let requestBibliotheque = request.body;
    let newBibliotheque = new Bibliotheque({
        nom: requestBibliotheque.nom,
        adresse: requestBibliotheque.adresse,
        telephone: requestBibliotheque.telephone,
        description: requestBibliotheque.description
    });

    newBibliotheque.save((error,bibliotheque) =>{
        if(error) return console.error(error);
        console.log(bibliotheque);
        response.json(bibliotheque);
    })
});


// PUT /bibliotheques
app.put('/bibliotheques/:id', (request,response) => {
    let requestBibliotheque = request.body;
    let newBibliotheque = new Bibliotheque({
        _id: request.params.id,
        nom: requestBibliotheque.nom,
        adresse: requestBibliotheque.adresse,
        telephone: requestBibliotheque.telephone,
        description: requestBibliotheque.description
    });

    Bibliotheque.updateOne({_id: request.params.id}, newBibliotheque, (error,bibliotheque) =>{
        if(error)   return response.status(404).json({error: error});
        response.status(200).json(bibliotheque);
    });
});

// DELETE /bibliotheques
app.delete('/bibliotheques/:id', (request,response) => {
    Bibliotheque.deleteOne( {_id:request.params.id}, (error) =>{
        if(error)   return response.status(400).json({error: error});
        response.status(201).json({msg: 'delete ok'});
    })
});

app.listen(3500, ()=>{console.log('Lisetening on port 3500')})

