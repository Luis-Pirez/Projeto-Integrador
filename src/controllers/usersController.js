const fs = require('fs');
const path = require('path');
//const { petshops } = require('./mainController');
const {v4: uuid} = require('uuid');
const userPath = path.join(__dirname, '..', 'database', 'users.json');
const usersController = {
    getCreate: (request, response) => {
        return response.render('cadastro');
    },
    create: (request, response) => {
        const { nome, cpf, dataDeNascimento, telefone, sexo,
            email, endereco, cep, bairro, cidade, estado,
            pontoDeReferencia, nomeDoPet,
            raca, idade, porte, peso } = request.body;
        
            const passwordHash = bcrypt.hashSync(password);
        
        const newUser = {
            id: uuid(), nome, cpf, data_nascimento, telefone, sexo,
            email, endereco, cep, bairro, cidade, estado,
            ponto_referencia, nome_pet,
            raca, idade, porte, peso, senha: passwordHash, confirme_senha: passwordHash
        }

        const users = JSON.parse(fs.readFileSync(userPath));
        users.push(newUser);
        fs.writeFileSync(userPath, JSON.stringify(users));

            return response.redirect('/index');

    }

};


module.exports = usersController;