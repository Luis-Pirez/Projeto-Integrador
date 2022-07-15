const fs = require('fs');
const path = require('path');
const mainController = {
	index: (request, response) => {
		response.render('./index')
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

	paginaInicial: (request, response) => {
		response.render('index')
	},			
		
	search: (request, response) => {
		
	}
};

module.exports = mainController;