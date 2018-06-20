var express = require('express')
var cors = require('cors')
var app = express()

var router = express.Router();

app.use(cors())

router.route('/osoitteet').get(function (req, res){res.json(osoite); });

router.route('/osoitteet/:id')
.get(function (req,res) {
    for(var osoite in osoite) {if(osoite.id == req.params.id) {res.json(osoite); return;}}
    res.json("{'msg': 'Virhe, osoitetta ei löytynyt'}"); 
})
.delete(function (req, res) {
    for(var osoite in osoite) {if(osoite[osoite].id == req.params.id){osoite.splice(osoite, 1)}};
    res.json("{'msg': 'Osoite poistettu'}"); return;
    res.json("'msg': 'Virhe osoitetta ei löytynyt'}");});

    var osoite = [{ "id": 0, name: 'John Doekki', email: 'john.doe@party.org'},{ "id": 2, name: 'Jane Doe', email: 'jane@company.fi'},{ "id": 6, name: 'Donald Duck', email: 'duckster@acme.com'},{ "id": 1, name: 'MickeyMouse', email: 'mickey@acme.com'}];

  app.use('/api',router);
 
app.use(cors())
 
app.get('osoitteet/:id', function (req, res, next) {
  res.json({msg: 'get'})
})
 
app.listen(3000, function () {
  console.log('Serveri pyörii')
})