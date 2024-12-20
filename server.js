//API REST Simples para Gerenciamento de Clientes com Express.j
const express = require('express')
const app = express();
const data = require("./data.json");

app.use(express.json());

// Listando os clientes
app.get("/clients", function(req, res){
   res.json(data); 
});

// Obtendo cliente por ID
app.get("/clients/:id", function(req, res){
    const { id } = req.params;
    const client = data.find(cli => cli.id === id);

    if(!client) return res.status(204).json();

    res.json(client);
});

// Criando novo cliente
app.post("/clients", function(req, res){
    const { name, email } = req.body;

    res.json({ name, email });

});

app.put("/clients/:id", function(req, res){
    const { id } = req.params;
    const client = data.find(cli => cli.id === id);

    if(!client) return res.status(204).json();

    const { name } = req.body;

    client.name = name;
    
    res.json(client);
});

app.delete("/clients/:id", function(req, res) {
    const { id } = req.params;
    const clientsFiltered = data.filter(client => client.id !== Number(id));

    // Retorna a lista atualizada
    res.json(clientsFiltered);
});

app.listen(3000, function() {
    console.log("Server is running");
})