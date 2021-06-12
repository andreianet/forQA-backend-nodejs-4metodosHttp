const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 8080;

//Array de dados
 const heroisMarvel = [
   { id: 1, name: 'Wolverine', description: 'Ele foi criado pelo editor-chefe de Marvel, Roy Thomas,[2] o escritor Len Wein e o diretor de arte da Marvel, John Romita, Sr., que projetou o personagem e foi desenhado pela primeira vez para publicação por Herb Trimpe' },
   { id: 2, name: 'Tesmpestade', description: 'A personagem foi criado pelo roteirista Len Wein e pelo desenhista Dave Cockrum.' },
   { id: 3, name: 'Ciclope', description: 'Criado por Stan Lee e Jack Kirby, sua estreia nos quadrinhos foi em Uncanny X-Men #1 (1963)' },
  
 ];

 const findItem = id => {
   return heroisMarvel.find(item => item.id == id);
 };

 app.use(express.json());
 app.use(bodyParser.urlencoded({ extended: false }));

 //Métodos básicos Http para requisição:
 app.get('/', (req, res) => {
   const result = { name: 'andreia', description: 'apaixonada por TI' };
   return res.json(result);
 });
//Obter por ID
 app.get('/:id', (req, res) => {
   const item = findItem(req.params.id);
   return res.json(item);
 });
//Criar um registro
 app.post('/', (req, res) => {
   const name = req.body.name;
   const description = req.body.description;
   return res.json([name, description]);
 });
//Atualizar um registro
 app.put('/:id', (req, res) => {
     const name = req.body.name;
     //criando um novo valor
     let item = findItem(req.params.id);
     //em seguida atribui essa valor usando spread, e sobrepõe o name do body
     item = {...item,name:name}
     return res.json(item);
 });
//Excluir um registro
 app.delete('/:id', (req, res) => {
     const item = findItem(req.params.id);
     return res.json({msg:"Herói Deletado com Sucesso"})
 })
 //Executando a rota na porta 8080
 app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));