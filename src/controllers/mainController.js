const fs = require('fs');

const mainController = {
	index: (request, response) => {
		response.render('index')
	},

	petshops: (request, response) => {
		response.render('petshops')
	},

	contato: (request, response) => {
		response.render('contato')
	},	

	clinicasVeterinarias: (request, response) => {
		response.render('clinicasveterinarias')
	},
	
	cadastro: (request, response) => {
		response.render('cadastro')
	},	
	
	areaDoCliente: (request, response) => {
		response.render('areadocliente')
	},		
		
	search: (request, response) => {
		// Do the magic
	}
};

module.exports = mainController;