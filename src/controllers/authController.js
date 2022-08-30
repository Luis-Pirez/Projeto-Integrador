const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const authController = {
    getLogin: (request, response) => {
        return response.render('areadocliente');
    },
    login: (request, response) => {
        console.log(request.body);
        return response.render('index');
    }
};

module.exports = authController;