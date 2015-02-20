module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    // Conta o tempo das tasks facilitando a identificação de tasks carroça
    require('time-grunt')(grunt);

    var configs = {};

    // Carrega configurações da pasta grunt/
    require('load-grunt-config')(grunt, {
        init: true,
        data: {
            freedom: configs
        }
    });
};